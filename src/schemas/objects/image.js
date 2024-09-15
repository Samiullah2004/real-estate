export const customImage = {
  title: 'Image',
  name: 'customImage',
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
