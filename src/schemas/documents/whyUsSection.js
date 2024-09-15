export const whyUsSection = {
  title: 'Why Us Section',
  name: 'whyUsSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Main Heading',
      name: 'mainHeading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Identifier',
              name: 'identifier',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Image',
              name: 'image',
              type: 'customImage',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Heading',
              name: 'heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Sub Text',
              name: 'subText',
              type: 'bodyPortableText',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      subtitle: 'mainHeading',
    },
    prepare({ title = 'No title', subtitle }) {
      return {
        title,
        subtitle,
      }
    },
  },
}
