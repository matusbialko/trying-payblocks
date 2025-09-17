import { Post } from '@/payload-types'
import { PublicContextProps } from '@/utilities/publicContextProps'
import { Blog20 } from './BlogContent/blog20'
import { BlogContentBlock } from './BlogContent/Component'

export const RenderPostDetailPage: React.FC<{
  post: Post
  publicContext: PublicContextProps
  disableContainer?: boolean
}> = (props) => {
  return <BlogContentBlock {...props.post} publicContext={props.publicContext} />
}
