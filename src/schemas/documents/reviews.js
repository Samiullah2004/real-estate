export const reviews = {
  title: 'Reviews',
  name: 'reviews',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Featured',
      name: 'featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Avatar',
      name: 'avatar',
      type: 'customImage',
    },
    {
      title: 'Review',
      name: 'review',
      type: 'bodyPortableText',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'avatar',
    },
    prepare({ title = 'No title', media }) {
      return {
        title,
        media,
      }
    },
  },
}
