import './Rich-text.scss'

import { PortableText } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import ImageUrlBuilder from '@sanity/image-url'
import clsx from 'classnames'
import classNames from 'classnames'
import getYouTubeID from 'get-youtube-id'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import YouTube from 'react-youtube'

import Button from '../button/Button'

const builder = ImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
})

const SampleImageComponent = ({ value, isInline, otherClasses }) => {
  const { position } = value
  const { width, height } = getImageDimensions(value)
  return (
    <Image
      width={width ? width : '100%'}
      height={height ? height : 'auto'}
      className={classNames(
        otherClasses,
        position === 'left'
          ? 'mr-auto'
          : position === 'right'
          ? 'ml-auto'
          : 'mx-auto',
      )}
      
      src={builder.image(value).url()}
      alt={value.alt || ' '}
    />
  )
}

export const RichText = ({ richText, otherClasses, toggleFunc }) => {
  const richTextClasses = clsx(otherClasses, 'relative')
  const ButtonComponent = (props) => {
    const data = props.value
    return (
      <Button {...data} onClick={() => toggleFunc(data?.form, data?.tab)} />
    )
  }


  return (
    <div className={richTextClasses}>
      <PortableText
        value={richText}
        components={{
          types: {
            img: SampleImageComponent,
            button: ButtonComponent,
            iframe: ({ value }) => {
              const { url, height } = value
              return (
                <iframe
                  title="Iframe"
                  src={url}
                  className="!w-full"
                  width="100%"
                  height={`${height}px`}
                />
              )
            },
            youtube: (prop) => {
              const { value } = prop
              const id = getYouTubeID(value?.url)
              return (
                <YouTube
                  className="youtube-iframe aspect-video w-full"
                  videoId={id}
                />
              )
            },
          },
          marks: {
            link: ({ children, value }) => {
              const { href } = value
              const rel = !href.startsWith('/')
                ? 'noreferrer noopener'
                : undefined
              if (href === 'tel:(888) 939-3309') {
                return (
                  <Link
                    aria-label="children"
                    href={href}
                    target="_self"
                    rel={rel}
                  >
                    {children}
                  </Link>
                )
              } else {
                return (
                  <Link
                    aria-label="children"
                    href={href}
                    target={rel && '_blank'}
                    rel={rel}
                  >
                    {children}
                  </Link>
                )
              }
            },
            form: ({ children, value }) => {
              if (value.formName) {
                return (
                  <span
                    onClick={() => toggleFunc(value.formName)}
                    className="cursor-pointer text-[#051011] underline hover:text-[#019f44]"
                  >
                    {children}
                  </span>
                )
              } else {
                return <span>{children}</span>
              }
            },
          },
        }}
      />
    </div>
  )
}

export default RichText
