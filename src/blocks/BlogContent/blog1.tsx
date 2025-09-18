import { format } from 'date-fns'
import { Lightbulb } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DateFormatter } from '@/components/DateFormatter'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { Post } from '@/payload-types'
import { PublicContextProps } from '@/utilities/publicContextProps'
import { getAuthorObject } from '@/utilities/authorUtils'

const Blog1: React.FC<Post & { publicContext: PublicContextProps }> = (props) => {
  const { title, content, meta, authors, publishedAt, image, publicContext } = props || {}

  const author = getAuthorObject(authors?.[0])
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="max-w-3xl text-5xl font-semibold text-pretty md:text-6xl">{title}</h1>
          {meta?.description && (
            <h3 className="text-muted-foreground max-w-3xl text-lg md:text-xl">
              {meta.description}
            </h3>
          )}
          {author && (
            <div className="flex items-center gap-3 text-sm md:text-base">
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
                <AvatarFallback>{author.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>
                <a href="#" className="font-semibold">
                  {author.name}
                </a>
                {publishedAt && (
                  <span className="ml-1">
                    on <DateFormatter date={publishedAt} locale={publicContext?.locale} />
                  </span>
                )}
              </span>
            </div>
          )}
          {image && typeof image !== 'string' && (
            <div className="mt-4 mb-8 aspect-video w-full overflow-hidden rounded-lg border">
              <Media
                resource={image}
                alt={image.alt || title || 'Blog featured image'}
                imgClassName="object-cover"
              />
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <div className="mx-auto max-w-3xl">
          {content && (
            <RichText content={content} publicContext={publicContext} withWrapper={false} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Blog1
