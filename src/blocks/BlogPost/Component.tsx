import React from 'react'
import type { PublicContextProps } from '@/utilities/publicContextProps'

import { Blogpost1 } from './blogpost1'

// Temporary type definition until payload-types.ts is generated
interface BlogPostBlock {
  designVersion: 'BLOGPOST1'
  title?: string
  description?: string
  authorName?: string
  image?: { url: string } | string
  pubDate?: string
  authorImage?: { url: string } | string
  backgroundColor?: string
}

interface BlogPostProps extends BlogPostBlock {
  publicContext: PublicContextProps
  disableContainer?: boolean
}

const BlogPostBlock: React.FC<BlogPostProps> = ({
  designVersion = 'BLOGPOST1',
  title,
  description,
  authorName,
  image,
  pubDate,
  authorImage,
  publicContext,
  disableContainer,
}) => {
  // Transform the data to match the Blogpost1 component interface
  const postData = {
    title: title || 'Designing websites faster with shadcn/ui',
    authorName: authorName || 'John Doe',
    image:
      typeof image === 'object' && image?.url
        ? image.url
        : 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
    pubDate: pubDate ? new Date(pubDate) : new Date(),
    description:
      description ||
      'A step-by-step guide to building a modern, responsive blog using React and Tailwind CSS.',
    authorImage:
      typeof authorImage === 'object' && authorImage?.url
        ? authorImage.url
        : 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
  }

  // Render different design versions based on the selected version
  switch (designVersion) {
    case 'BLOGPOST1':
    default:
      return <Blogpost1 post={postData} />
  }
}

export { BlogPostBlock }