export const blogImage = {
  title: 'Blog Image',
  name: 'blogImage',
  type: 'image',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Float Right', value: 'floatRight' },
          { title: 'Float Left', value: 'floatLeft' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'asset', // Reference the image asset correctly
    },
    prepare({ title = 'No Title', media }) {
      return {
        title,
        media,
      }
    },
  },
}
