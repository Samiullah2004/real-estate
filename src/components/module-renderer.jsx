// eslint-disable-next-line simple-import-sort/imports

import { groq } from 'next-sanity'

import TwoColumnSection, {
  TWO_COLUMN_GENERIC_SECTION_FRAGMENT,
} from '../sections/two-column-section'
import TestimonialSection, {
  TESTIMONIAL_SECTION_FRAGMENT,
} from '../sections/testimonial-section'
import WhyUsSection, {
  WHY_US_SECTION_FRAGMENT,
} from '../sections/why-us-section'
import CtaSection, {
  CTA_SECTION,
} from '../sections/cta-section'
import BlogHubSection, {
  BLOG_HUB_SECTION_FRAGMENT,
} from '../sections/blog-hub-section'
import FeaturedBlogSection, {
  FEATURED_BLOG_SECTION_FRAGMENT,
} from '../sections/featured-blog-section'
import HomeHeroSection, {
  HOME_HERO_SECTION_FRAGMENT,
} from '../sections/home-hero-section'

export const fragment = groq`
  ${TWO_COLUMN_GENERIC_SECTION_FRAGMENT},
  ${TESTIMONIAL_SECTION_FRAGMENT},
  ${WHY_US_SECTION_FRAGMENT},
  ${CTA_SECTION},
  ${BLOG_HUB_SECTION_FRAGMENT},
  ${FEATURED_BLOG_SECTION_FRAGMENT},
  ${HOME_HERO_SECTION_FRAGMENT},
`

export default function ModuleRenderer({ modules = [], id, toggleFunc }) {
  return modules?.map((module, index) => {
    switch (module._type) {
      case 'genericTwoColumnSection':
        return (
          <TwoColumnSection
            key={index}
            {...module}
            toggleFunc={toggleFunc}
            id={id}
          />
        )
      case 'testimonialSection':
        return (
          <TestimonialSection
            key={index}
            {...module}
            toggleFunc={toggleFunc}
            id={id}
          />
        )
      case 'whyUsSection':
        return (
          <WhyUsSection
            key={index}
            {...module}
            toggleFunc={toggleFunc}
            id={id}
          />
        )
      case 'ctaSection':
        return (
          <CtaSection
            key={index}
            {...module}
            toggleFunc={toggleFunc}
            id={id}
          />
        )
      case 'blogHubSection':
        return (
          <BlogHubSection
            key={index}
            {...module}
            toggleFunc={toggleFunc}
            id={id}
          />
        )
      case 'featuredBlogSection':
        return (
          <FeaturedBlogSection
            key={index}
            {...module}
            toggleFunc={toggleFunc}
            id={id}
          />
        )
      case 'homeHeroSection':
        return (
          <HomeHeroSection
            key={index}
            {...module}
            toggleFunc={toggleFunc}
            id={id}
          />
        )

      default:
        return null
    }
  })
}
