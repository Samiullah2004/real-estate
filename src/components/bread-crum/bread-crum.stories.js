import BreadCrum from './index'

const meta = {
  title: 'Components/BreadCrum',
  component: BreadCrum,
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
    currentSlug: 'blog1',
    title: 'blog1',
  },
}
