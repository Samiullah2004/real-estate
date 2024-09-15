export const testimonialSection = {
  title: 'Testimonial Section',
  name: 'testimonialSection',
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
      title: 'Desktop Background Image',
      name: 'desktopBackgroundImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Mobile Background Image',
      name: 'mobileBackgroundImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'identifier',
      subtitle: 'heading',
      media: 'mobileBackgroundImage',
    },
    prepare({ title = 'No title', subtitle, media }) {
      return {
        title,
        subtitle,
        media,
      }
    },
  },
}
