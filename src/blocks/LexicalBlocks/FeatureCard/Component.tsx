import type { FeatureCardBlock as FeatureCardBlockProps } from 'src/payload-types'
import { cn } from 'src/utilities/cn'
import React from 'react'
import { PublicContextProps } from '@/utilities/publicContextProps'
import { Media } from '@/components/Media'

type Props = {
  className?: string
} & FeatureCardBlockProps

export const FeatureCardBlock: React.FC<Props & { publicContext: PublicContextProps }> = ({
  className,
  title,
  description,
  image,
  imagePosition,
  publicContext,
}) => {
  return (
    <div
      className={cn(
        'border-border my-6 flex flex-col rounded-xl border text-clip md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8',
        imagePosition === 'right' && 'md:flex-col-reverse',
        className,
      )}
    >
      <div className="md:min-h-96 lg:min-h-112 xl:min-h-128">
        {image && (
          <img
            src={image.url}
            alt={title}
            className="aspect-video size-full object-cover object-center not-prose"
          />
        )}
      </div>
      <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">{title}</h3>
        <p className="text-muted-foreground lg:text-lg">{description}</p>
      </div>
    </div>
  )
}
