import classnames from 'classnames'
import Link from 'next/link'
import { groq } from 'next-sanity'

export default function BreadCrum({ otherClasses, currentSlug, title }) {
  const breadCrumClasses = classnames(
    otherClasses,
    'lg:hidden mt-[104px] px-4 flex items-center gap-1',
  )

  return (
    <div className={breadCrumClasses} data-testid="bread-crum">
      <Link
        href="/"
        className="text-xs font-medium text-typography-medium font-Montserrat hover:underline"
      >
        Home
      </Link>
      <span className="block text-xs font-medium text-typography-medium font-Montserrat ">
        /
      </span>
      <Link
        href="/blog"
        className="text-xs font-medium text-typography-medium font-Montserrat hover:underline"
      >
        Blogs
      </Link>
      <span className="block text-xs font-medium text-typography-medium font-Montserrat">
        /
      </span>

      <Link
        href={`/blog/${currentSlug}`}
        className="text-xs font-medium text-primary-blue-600 font-Montserrat hover:underline"
      >
        {title}
      </Link>
    </div>
  )
}
