import { Block } from 'payload'
import { backgroundColor } from '@/fields/color'
import { designVersionPreview } from '@/components/AdminDashboard/DesignVersionPreview/config'

export const allBlogPostDesignVersions = [
  {
    label: 'Blog Post 1 (Modern Article Layout)',
    value: 'BLOGPOST1',
    image: '',
  },
] as const

export type BlogPostDesignVersion = (typeof allBlogPostDesignVersions)[number]

export const BlogPost: Block = {
  slug: 'blogpost',
  interfaceName: 'BlogPostBlock',
  labels: {
    singular: 'Blog Post',
    plural: 'Blog Post Blocks',
  },
  fields: [
    designVersionPreview(allBlogPostDesignVersions),
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Title of the blog post',
      },
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      admin: {
        description: 'Description or subtitle for the blog post',
      },
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
      admin: {
        description: 'Name of the author',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Featured image for the blog post',
      },
    },
    {
      name: 'pubDate',
      type: 'date',
      required: true,
      admin: {
        description: 'Publication date of the blog post',
      },
    },
    {
      name: 'authorImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Author profile image',
      },
    },
    backgroundColor,
  ],
}