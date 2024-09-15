import classnames from 'classnames'
import Link from 'next/link'
import { groq } from 'next-sanity'

import NextImage from '../next-image'

export default function BlogCard({
  otherClasses,
  slug,
  title,
  categories,
  mainImage,
}) {
  const blogCardClasses = classnames(otherClasses, 'group')

  return (
    <Link
      href={`/blog/${slug}`}
      className={blogCardClasses}
      data-testid="blog-card"
    >
      <NextImage
        {...mainImage}
        otherClasses="w-full group-hover:rounded-[40px] h-[216px] rounded transition-all duration-300 object-cover bg-center"
      />
      <span className="font-medium text-sm text-typography-medium block mt-6">
        {categories.title}
      </span>
      <p className="font-medium text-xl font-Montserrat text-gray-900 mt-2  group-hover:text-[#008ED5] transition-all duration-300">
        {title}
      </p>
    </Link>
  )
}
