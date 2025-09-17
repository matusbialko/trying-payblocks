import { ImageResponse } from 'next/og'
import { loadGoogleFont } from './loadGoogleFont'
import { getCachedGlobal } from './getGlobals'
import { DataFromGlobalSlug } from 'payload'
import { Media } from '@/payload-types'
import { serverUrl as NEXT_PUBLIC_SERVER_URL } from '@/config/server'

/**
 * OG Image generation. PayloadCMS can'T be run on edge routes, so prevent setting the open graph routes to edge.
 * We are reading the default OG Image from the public directory
 */

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

/**
 * Generates an Open Graph image with a background image and title.
 *
 * The background image is loaded from the public directory.
 * The title is rendered with the font 'Inter', loaded from Google Fonts.
 *
 * @param {Object} options - Options for generating the image
 * @param {string} [options.title] - Title to render on the image. Defaults to "Payblocks".
 * @returns {Promise<ImageResponse>} - A promise that resolves to an `ImageResponse` object.
 */
export default async function generateOGImage({ title }: { title?: string | null }) {
  const pageConfig = (await getCachedGlobal(
    'page-config',
    3,
  )()) as DataFromGlobalSlug<'page-config'>

  const backgroundImageUrl = (pageConfig.openGraph?.backgroundImage as Media)?.url

  const pageTitle = title || pageConfig.defaultMeta.title

  const textColor = pageConfig.openGraph?.textColor

  if (!backgroundImageUrl) {
    return new Response('No background image found', { status: 404 })
  }

  if (!textColor) {
    return new Response('No text color found', { status: 404 })
  }

  const backgroundImage = `${NEXT_PUBLIC_SERVER_URL}${backgroundImageUrl}`

  try {
    // Load the font
    const fontData = await loadGoogleFont('Inter', pageTitle)

    return new ImageResponse(
      (
        <div
          style={{
            background: '#fff',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          {/* Background image */}
          <img
            src={backgroundImage}
            alt="Background"
            width={size.width}
            height={size.height}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Title container with fixed height */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '60px',
              maxWidth: '70%',
              minHeight: '200px',
            }}
          >
            <h1
              style={{
                fontSize: '48px',
                lineHeight: '1.4',
                fontWeight: '600',
                color: textColor,
                textAlign: 'left',
                margin: '0',
                fontFamily: 'Inter',
              }}
            >
              {pageTitle}
            </h1>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal',
          },
        ],
      },
    )
  } catch (error) {
    console.error('Error generating OG image:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}
