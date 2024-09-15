import BlogCard from './index'

const meta = {
  title: 'Components/BlogCard',
  component: BlogCard,
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
}
