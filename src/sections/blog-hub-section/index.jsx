import classnames from 'classnames'
import { groq } from 'next-sanity'

import Heading from '~/components/heading'
import { NEXT_IMAGE_FRAGMENT } from '~/components/next-image'
import FeaturedBlogSection from '~/sections/featured-blog-section'

export default function BlogHubSection({
  otherClasses,
  mainHeading,
  allBlogs,
}) {
  const blogHubSectionClasses = classnames(
    otherClasses,
    'mb-20 lg:mb-120 mt-[112px] lg:mt-[192px] mx-auto w-full max-w-1512 px-4 lg:px-20 xl:px-120',
  )

  return (
    <section className={blogHubSectionClasses} data-testid="blog-hub-section">
      {mainHeading && <Heading type="h1">{mainHeading}</Heading>}
      <FeaturedBlogSection
        featured={allBlogs.sort(function (x, y) {
          return y.featured - x.featured
        })}
        otherClasses="!mt-16 !mb-0 !px-0"
      />
    </section>
  )
}

export const BLOG_HUB_SECTION_FRAGMENT = groq`
_type == "blogHubSection"=>{
  _type, 
  identifier,
  mainHeading,
  "allBlogs":*[_type == 'post' ]{
    "slug":slug.current,
    title,
    categories->{
      title,
    },
    featured,
    mainImage{${NEXT_IMAGE_FRAGMENT}}  
  } 
}
`
