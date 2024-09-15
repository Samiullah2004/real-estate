import PostSection from './index'
const meta = {
  title: 'Section/PostSection',
  component: PostSection,
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
    author: {
      name: 'By Air Control',
      image: {
        _type: 'customImage',
        caption: null,
        asset: {
          _ref: 'image-7db5873c11543435a14dd917e44450ff840b0c1e-192x192-png',
          _type: 'reference',
        },
      },
      owner: false,
      referencePage: null,
    },
    categories: {
      _type: 'reference',
      _ref: 'fd6f2c18-eaa4-49e2-b89a-bbbebdb2aee0',
    },
    publishedAt: '2024-07-29T12:21:00.000Z',
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
    metaDescription: null,
    slug: 'blog3',
    indexed: 'index',
    title: 'Super Awesome Blog Title Goes Here Lorem Ipsum Dolor Sit Amet',
    mainImage: {
      _type: 'customImage',
      caption: null,
      asset: {
        _ref: 'image-be2d3447ca69a1a1916d617316eb6a4b2b44ae35-1590x864-png',
        _type: 'reference',
      },
    },
    body: [
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'H2 Heading',
            _key: '212c4086b309',
          },
        ],
        _type: 'block',
        style: 'h1',
        _key: 'f1200882aa6b',
        markDefs: [],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu, elit vel nisl nam. Risus aliquam varius pretium, placerat mattis lorem suscipit dignissim. Lectus cras feugiat orci pulvinar cursus molestie varius. Tortor, elit porttitor sit ut quisque ut quis posuere consequat. Sed porttitor feugiat at mi interdum cras enim. Velit pellentesque eu in convallis arcu purus, integer. Cras eu, varius at hac. Placerat enim, ornare a eu enim et. A sed lacus leo tortor convallis massa. Amet ac at volutpat consequat integer id vel ullamcorper. Nunc etiam faucibus risus in erat. Facilisi nulla at faucibus diam. Dolor, quisque eu pellentesque ultricies. Mauris duis diam tempus urna nulla.',
            _key: '293ec18b5984',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '5866fae8dab5',
      },
      {
        style: 'h2',
        _key: 'b5009e6001f8',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'H2 Heading',
            _key: '247dd8daffe7',
          },
        ],
        _type: 'block',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '96b9c031df9e',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu, elit vel nisl nam. Risus aliquam varius pretium, placerat mattis lorem suscipit dignissim. Lectus cras feugiat orci pulvinar cursus molestie varius. Tortor, elit porttitor sit ut quisque ut quis posuere consequat. Sed porttitor feugiat at mi interdum cras enim. Velit pellentesque eu in convallis arcu purus, integer. Cras eu, varius at hac. Placerat enim, ornare a eu enim et. A sed lacus leo tortor convallis massa. Amet ac at volutpat consequat integer id vel ullamcorper. Nunc etiam faucibus risus in erat. Facilisi nulla at faucibus diam. Dolor, quisque eu pellentesque ultricies. Mauris duis diam tempus urna nulla.',
            _key: '05ef9e22fe8c',
          },
        ],
      },
      {
        _key: '0d93624efd73',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'H3 Heading',
            _key: '5ab46a466545',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'h3',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '09415d9d8e5d',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Nisl aliquam convallis vitae est facilisis quisque. Nam elementum tempus eleifend tincidunt varius. Adipiscing ultrices convallis hendrerit duis in facilisis. Ultrices condimentum in arcu integer euismod. In nec ultricies vel lorem non sed augue integer purus. Habitasse mauris, feugiat condimentum et dictum.',
            _key: '62f6e35e0728',
          },
        ],
      },
      {
        children: [
          {
            text: 'Vitae est facilisis quisque. Nam elementum tempus eleifend tincidunt varius. Adipiscing ultrices convallis',
            _key: '4db337ec217a',
            _type: 'span',
            marks: [],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '47d0fa64b98d',
        listItem: 'bullet',
        markDefs: [],
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Nam elementum tempus eleifend tincidunt varius. Adipiscing ultrices convallis',
            _key: '23762e634371',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '443b0f8f88b7',
        listItem: 'bullet',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '2b42aa7ac038',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Nisl aliquam convallis vitae est facilisis quisque',
            _key: 'b8fb9cc302ff',
          },
        ],
        level: 1,
      },
      {
        style: 'normal',
        _key: '97ea2901f4c2',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _key: 'f976fc765d21',
            _type: 'span',
            marks: [],
            text: 'Elementum tempus eleifend tincidunt varius. Adipiscing ultrices convallis',
          },
        ],
        level: 1,
        _type: 'block',
      },
      {
        _key: '0de03c47ff3c',
        markDefs: [],
        children: [
          {
            text: 'H3 Heading',
            _key: '05c66c4782f8',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'h4',
      },
      {
        markDefs: [],
        children: [
          {
            _key: 'eacde8c54c19',
            _type: 'span',
            marks: [],
            text: 'Adipiscing ultrices convallis hendrerit duis in facilisis. Ultrices condimentum in arcu integer euismod. In nec ultricies vel lorem non sed augue integer purus. Habitasse mauris, feugiat condimentum et dictum.',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'e29ea08c3a07',
      },
      {
        asset: {
          _ref: 'image-be2d3447ca69a1a1916d617316eb6a4b2b44ae35-1590x864-png',
          _type: 'reference',
        },
        title: 'kjhu',
        _type: 'customImage',
        _key: '5aab37254367',
      },
      {
        _key: 'd6bd2c6f8045',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Section Subheading',
            _key: 'bdc8796989a9',
          },
        ],
        _type: 'block',
        style: 'h5',
      },
      {
        _key: '89ae03a4e6a9',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Adipiscing ultrices convallis hendrerit duis in facilisis. Ultrices condimentum in arcu integer euismod. In nec ultricies vel lorem non sed augue integer purus. Habitasse mauris, feugiat condimentum et dictum.',
            _key: 'bab53c7f6750',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'b128f8d1f092',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: '0201ce1701c1',
          },
        ],
      },
      {
        _type: 'youtube',
        _key: 'cc0bb3d4c540',
        url: 'https://youtu.be/9J2QtKsMXL4?si=PR8v8nNACD2uThoe',
      },
      {
        markDefs: [],
        children: [
          {
            text: 'Section Subheading',
            _key: '33f3924dccfb',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'h6',
        _key: '0b23244b56f9',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'c0fc1509b841',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Adipiscing ultrices convallis hendrerit duis in facilisis. Ultrices condimentum in arcu integer euismod. In nec ultricies vel lorem non sed augue integer purus. Habitasse mauris, feugiat condimentum et dictum.',
            _key: '9505a88a4c01',
          },
        ],
      },
      {
        children: [
          {
            marks: [],
            text: 'Vitae est facilisis quisque. Nam elementum tempus eleifend tincidunt varius. Adipiscing ultrices convallis',
            _key: '68e999b4cf6e',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '29e623bd155f',
        listItem: 'number',
        markDefs: [],
      },
      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '3156c0ef40c7',
        listItem: 'number',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Nam elementum tempus eleifend tincidunt varius. Adipiscing ultrices convallis',
            _key: '04d991602ebc',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Nisl aliquam convallis vitae est facilisis quisque',
            _key: '07db9651e2ec',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '94d7d8463f9f',
        listItem: 'number',
      },
      {
        style: 'normal',
        _key: 'c4ae676e54e4',
        listItem: 'number',
        markDefs: [],
        children: [
          {
            _key: '82bd93b1567d',
            _type: 'span',
            marks: [],
            text: 'Elementum tempus eleifend tincidunt varius. Adipiscing ultrices convallis',
          },
        ],
        level: 1,
        _type: 'block',
      },
      {
        style: 'normal',
        _key: '412def651402',
        markDefs: [],
        children: [
          {
            text: 'Adipiscing ultrices convallis hendrerit duis in facilisis. Ultrices condimentum in arcu integer euismod. In nec ultricies vel lorem non sed augue integer purus. Habitasse mauris, feugiat condimentum et dictum.',
            _key: '67e2eb474a52',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
    ],
    _type: 'post',
    seoTitle: 'Super Blog  ',
    JSONLD: null,
  },
}
