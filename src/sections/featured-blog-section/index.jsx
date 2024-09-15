import classnames from 'classnames'
import { groq } from 'next-sanity'

import NextImage, { NEXT_IMAGE_FRAGMENT } from '~/components/next-image'

import BlogCard from '../../components/blog-card'
export default function FeaturedBlogSection({ otherClasses, featured }) {
  const featuredBlogSectionClasses = classnames(
    otherClasses,
    ' max-w-1512 w-full mx-auto xl:px-120 lg:px-20 px-4 my-20 lg:my-120 grid md:grid-cols-3 gap-10',
  )

  return (
    <section
      className={featuredBlogSectionClasses}
      data-testid="featured-blog-section"
    >
      {featured?.map((node, index) => {
        return <BlogCard key={index} {...node} />
      })}
    </section>
  )
}
export const FEATURED_BLOG_SECTION_FRAGMENT = groq`
_type == "featuredBlogSection"=>{
  _type, 
  identifier,
  "featured":*[_type == 'post' && featured == true][0...3]{
    "slug":slug.current,
    title,
    categories->{
      title,
    },
    mainImage{${NEXT_IMAGE_FRAGMENT}}  
  } 
}
`
