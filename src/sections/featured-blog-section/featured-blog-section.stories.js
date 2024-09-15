import FeaturedBlogSection from './index'
const meta = {
  title: 'Section/FeaturedBlogSection',
  component: FeaturedBlogSection,
  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Desktop',
        url: '',
        allowFullscreen: true,
      },
      {
        type: 'figma',
        name: 'Mobile',
        url: '',
        allowFullscreen: true,
      },
    ],
  },
}

export default meta

export const Default = {
  args: {
    featured: [
      {
        slug: 'blog3',
        title: 'Super Awesome Blog Title Goes Here Lorem Ipsum Dolor Sit Amet',
        categories: {
          title: 'Blog',
        },
        mainImage: {
          _type: 'customImage',
          caption: null,
          asset: {
            _ref: 'image-be2d3447ca69a1a1916d617316eb6a4b2b44ae35-1590x864-png',
            _type: 'reference',
          },
        },
      },
      {
        slug: 'blog2',
        title: 'Super Amazing Blog Title Goes Here Lorem Ipsum Blog',
        categories: {
          title: 'Air Controller  ',
        },
        mainImage: {
          _type: 'customImage',
          caption: null,
          asset: {
            _ref: 'image-5763164e79c42b05d420df3ddeff07f2047259a8-1590x864-png',
            _type: 'reference',
          },
        },
      },
    ],
  },
}
