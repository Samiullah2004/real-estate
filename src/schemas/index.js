import { testimonialSection } from './documents/testimonialSection'
import { homeHeroSection } from './documents/homeHeroSection'
import { genericTwoColumnSection } from './documents/genericTwoColumnSection' 
import { whyUsSection } from './documents/whyUsSection'
import { ctaSection } from './documents/ctaSection'
import { pages } from './documents/pages'
import { reviews } from './documents/reviews'
import { featuredBlogSection } from './documents/featuredBlogSection'
import { blogHubSection } from './documents/blogHubSection'

import { author } from './documents/author'
import { post } from './documents/post'
import { category } from './documents/category'


import { bodyPortableText } from './objects/bodyPortableText'
import { blogImage } from './objects/blogImage'
import { button } from './objects/button'
import { iframe } from './objects/iframe'
import { customImage } from './objects/image'
import { youtube } from './objects/youtube'

export const schemaTypes = [
  // documents
  pages,
  reviews,

homeHeroSection,
  genericTwoColumnSection,
  testimonialSection,
  whyUsSection,
  ctaSection,
  blogHubSection,
  featuredBlogSection,


  post,
  author,
  category,
  // objects
  bodyPortableText,
  blogImage,
  customImage,
  button,
  iframe,
  youtube,
]
