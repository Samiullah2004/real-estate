import { groq } from 'next-sanity'

import { BUTTON_FRAGMENT } from '~/components/button/Button'
import { NEXT_IMAGE_FRAGMENT } from '~/components/next-image'

import BreadCrum from '../../components/bread-crum'
import Layout from '../../components/layout'
// import SEO from '../../components/seo'
import { readToken } from '../../lib/sanity.api'
import { getClient } from '../../lib/sanity.client'
import FeaturedBlogSection from '../../sections/featured-blog-section'
import PostSection from '../../sections/post-section'
import { getNavigation } from '../[[...slug]]'

export const getBlogQuery = (slug) => groq`
*[_type == 'post' && slug.current == '${slug}']{
   _type,
  seoTitle,
  seoTitle,
  JSONLD,
  metaDescription,
  title,
  "slug":slug.current,
  featured,
  indexed,
  author->{
    name,
    image{${NEXT_IMAGE_FRAGMENT}},
    owner,
    referencePage->{
      "slug":slug.current
    },
  },
  categories,
  mainImage{${NEXT_IMAGE_FRAGMENT}},
  publishedAt,
  body,
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
function Page(props) {
  // const { navigation, page, JSONLD } = props
  const { page} = props
  return (
    <Layout  >
      {/* <SEO {...props?.page} /> */}
      <BreadCrum currentSlug={page?.slug} title={page.title} />
      <PostSection {...page} />
      <FeaturedBlogSection featured={page?.featured} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const client = getClient()
  const allSlugs = await client.fetch(
    groq`
      *[_type == "posts"] {    
        "title": title,
        "slug": slug.current
      }
    `,
  )

  return {
    paths: allSlugs?.map(({ slug }) => `/blog/${slug}`) || [],
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ draftMode = false, params }) => {
  try {
    const { slug } = params

    const client = getClient(draftMode ? readToken : undefined)
    if (!slug) throw new Error('No slug provided')
    const pageQuery = getBlogQuery(slug)

    const pageData = await client.fetch(pageQuery)
    // const navigation = await client.fetch(getNavigation())
    if (pageData?.length === 0) {
      return {
        notFound: true,
        props: {},
      }
    }
    const props = {
      draftMode,
      token: draftMode ? readToken : '',
      page: pageData[0],
      // JSONLD: pageData[0]?.JSONLD || '',
      // navigation: navigation,
      slug,
    }
    return {
      props,
      revalidate: 10,
    }
  } catch (error) {
    throw new Error(error)
  }
}

export default Page
