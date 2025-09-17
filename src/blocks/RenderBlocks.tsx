import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { FeatureBlock } from '@/blocks/Feature/Component'
import { GalleryBlock } from './Gallery/Component'
import { CtaBlock } from '@/blocks/Cta/Component'
import { LogosBlock } from '@/blocks/Logos/Component'
import { AboutBlock } from '@/blocks/About/Component'
import { TestimonialBlock } from '@/blocks/Testimonial/Component'
import { FaqBlock } from './Faq/Component'
import { StatBlock } from './Stat/Component'
import { SplitViewBlock } from './SplitView/Component'
import { TextBlock } from './TextBlock/Component'
import { MediaBlock } from './MediaBlock/Component'
import { ChangelogBlock } from './Changelog/Component'
import { CustomBlock } from '@/blocks/CustomBlock'
import type { PublicContextProps } from '@/utilities/publicContextProps'
import ContactBlock from './Contact/Component'
import { BlogBlock } from './Blog/Component'
import { BannerBlock } from './Banner/Component'
import { CasestudiesBlock } from './Casestudies/Component'
import { TimelineBlock } from './Timeline/Component'
import { LoginBlock } from './Login/Component'
import { SignupBlock } from './Signup/Component'

const blockComponents: Partial<Record<Page['layout'][0]['blockType'], React.FC<any>>> = {
  archive: ArchiveBlock,
  formBlock: FormBlock,
  feature: FeatureBlock,
  gallery: GalleryBlock,
  cta: CtaBlock,
  logos: LogosBlock,
  about: AboutBlock,
  testimonial: TestimonialBlock,
  faq: FaqBlock,
  stat: StatBlock,
  splitView: SplitViewBlock,
  text: TextBlock,
  mediaBlock: MediaBlock,
  changelog: ChangelogBlock,
  contact: ContactBlock,
  blog: BlogBlock,
  customblock: CustomBlock,
  banner: BannerBlock,
  casestudies: CasestudiesBlock,
  timeline: TimelineBlock,
  login: LoginBlock,
  signup: SignupBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
  publicContext: PublicContextProps
  disableContainer?: boolean
}> = (props) => {
  const { blocks, publicContext, disableContainer } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            let className = ''
            if ('backgroundColor' in block) {
              // HACK: this enumeration is needed because otherwise tailwind compiler does not include the bg-* class in the output
              switch (block.backgroundColor) {
                case 'primary':
                  className = 'bg-primary'
                  break
                case 'primary-foreground':
                  className = 'bg-primary-foreground'
                  break
                case 'secondary':
                  className = 'bg-secondary'
                  break
                case 'secondary-foreground':
                  className = 'bg-secondary-foreground'
                  break
                case 'accent':
                  className = 'bg-accent'
                  break
                case 'accent-foreground':
                  className = 'bg-accent-foreground'
                  break
                case 'background':
                  className = 'bg-background'
                  break
                case 'foreground':
                  className = 'bg-foreground'
                  break
                case 'muted':
                  className = 'bg-muted'
                  break
                case 'muted-foreground':
                  className = 'bg-muted-foreground'
                  break
                case 'muted2':
                  className = 'bg-muted2'
                  break
                case 'muted2-foreground':
                  className = 'bg-muted2-foreground'
                  break
                case 'card':
                  className = 'bg-card'
                  break
                case 'card-foreground':
                  className = 'bg-card-foreground'
                  break
                case 'popover':
                  className = 'bg-popover'
                  break
                case 'popover-foreground':
                  className = 'bg-popover-foreground'
                  break
                case 'destructive':
                  className = 'bg-destructive'
                  break
                case 'destructive-foreground':
                  className = 'bg-destructive-foreground'
                  break
                case 'border':
                  className = 'bg-border'
                  break
                case 'input':
                  className = 'bg-input'
                  break
                case 'ring-3':
                  className = 'bg-ring'
                  break
                case 'success':
                  className = 'bg-success'
                  break
                case 'warning':
                  className = 'bg-warning'
                  break
                case 'error':
                  className = 'bg-error'
                  break
                case 'chart-1':
                  className = 'bg-chart-1'
                  break
                case 'chart-2':
                  className = 'bg-chart-2'
                  break
                case 'chart-3':
                  className = 'bg-chart-3'
                  break
                case 'chart-4':
                  className = 'bg-chart-4'
                  break
                case 'chart-5':
                  className = 'bg-chart-5'
                  break
                case 'transparent':
                default:
                  className = ''
              }
            }

            if (Block) {
              return (
                <div key={index} className={className} id={block.id || undefined}>
                  <Block
                    {...block}
                    publicContext={publicContext}
                    disableContainer={disableContainer}
                  />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
