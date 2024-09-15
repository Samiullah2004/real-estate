export const author = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Reference Page',
      name: 'referencePage',
      type: 'reference',

      options: {
        disableNew: true,
      },
      to: [{ type: 'pages' }],
      hidden: ({ parent }) => parent?.owner !== true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
