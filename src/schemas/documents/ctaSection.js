export const ctaSection = {
  title: 'CTA Section',
  name: 'ctaSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
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

    {
      title: 'Buttons',
      name: 'buttons',
      type: 'array',
      of: [{ type: 'button' }],
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Background Mobile Image',
      name: 'backgroundMobileImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      subtitle: 'heading',
    },
    prepare({ title = 'No title', subtitle }) {
      return {
        title,
        subtitle,
      }
    },
  },
}
