export const genericTwoColumnSection = {
  title: 'Generic Two Column Section',
  name: 'genericTwoColumnSection',
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
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Desktop Reversed',
      name: 'desktopReversed',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Mobile Reversed',
      name: 'mobileReversed',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Desktop Image',
      name: 'desktopImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Mobile Image',
      name: 'mobileImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
    },
  ],

  preview: {
    select: {
      title: 'identifier',
      media: 'mobileImage',
    },
    prepare({ title = 'No title', media }) {
      return {
        title,
        media,
      }
    },
  },
}
