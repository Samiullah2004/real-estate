import { getImageDimensions } from '@sanity/asset-utils'
import ImageUrlBuilder from '@sanity/image-url'
import classNames from 'classnames'
import Image from 'next/image'
import { groq } from 'next-sanity'

export const NEXT_IMAGE_FRAGMENT = groq`
 _type,
   caption,
   asset{_ref,_type}
`

const builder = ImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
})

const NextImage = ({ caption, otherClasses, asset, ...rest }) => {
  if (!asset) return null
  const { width, height } = getImageDimensions(asset)
  return (
    <Image
      {...rest}
      width={width ? width : '100%'}
      height={height ? height : 'auto'}
      className={classNames(otherClasses)}
      src={`${builder.image(asset)?.url()}?fm=webp`}
      alt={caption || ' '}
    />
  )
}

export default NextImage
