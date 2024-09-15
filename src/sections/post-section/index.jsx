import classnames from 'classnames'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { groq } from 'next-sanity'
import { useEffect, useState } from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'

import { Heading } from '../../components/heading'
import NextImage from '../../components/next-image'
import RichText from '../../components/rich-text'

export default function PostSection({
  otherClasses,
  title,
  author,
  slug,
  publishedAt,
  mainImage,
  referencePage,
  body,
}) {
  const postSectionClasses = classnames(
    otherClasses,
    'mt-8 lg:mt-[192px] mb-20 max-w-[1512px] mx-auto  lg:px-20 xl:px-120 ',
  )
  const [copied, setCopied] = useState(false)
  const [siteUrl, setSiteUrl] = useState('')
  const copy = () => {
    if (typeof window !== 'undefined') {
      setCopied(true)
      const el = document.createElement('input')
      el.value = window.location.href
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
  }
  useEffect(() => {
    let timer
    if (copied) {
      timer = setTimeout(() => setCopied(false), 1000)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [copied])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let url = window.location.href
      setSiteUrl(url)
    }
  }, [])
  const shareButtons = siteUrl && (
    <>
      <FacebookShareButton url={`${siteUrl}/${slug?.current}/`} quote={title}>
        <Image
          src="/images/facebook.png"
          alt="facebook"
          width={20}
          height={20}
        />
      </FacebookShareButton>
      <LinkedinShareButton url={`${siteUrl}/${slug?.current}/`} quote={title}>
        <Image
          src="/images/linkedin.png"
          alt="facebook"
          width={27}
          height={27}
        />
      </LinkedinShareButton>
      <TwitterShareButton url={`${siteUrl}/${slug?.current}/`} quote={title}>
        <Image
          src="/images/twitter.png"
          alt="facebook"
          width={25}
          height={25}
        />
      </TwitterShareButton>

      <button
        aria-label="copied"
        title="copied"
        aria-labelledby="copied"
        onClick={copy}
        className="group relative h-[25px] w-[25px]"
      >
        <p
          className={classNames(
            'text-gray_900 fontFamily2 animate-waving-hand absolute bottom-[-30px] left-[-70px]  w-[89px] text-xs font-bold sm:left-[-50px] lg:left-[-30px]',
            copied ? 'opacity-1' : 'opacity-0 ',
          )}
        >
          {copied ? 'Link is Copied' : ''}
        </p>
        <Image src="/images/copy.png" alt="facebook" width={25} height={25} />
      </button>
    </>
  )
  const inputDate = new Date(publishedAt)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = inputDate.toLocaleDateString('en-US', options)
  return (
    <section className={postSectionClasses} data-testid="post-section">
      <div className="max-w-[800px] mx-auto lg:px-0 px-4">
        <Heading type="h1">{title}</Heading>
        <div className="flex flex-col gap-6 sm:flex-row items-start sm:items-center justify-between mt-8">
          {author?.owner ? (
            <div className="flex items-center gap-[14px]">
              <NextImage
                {...author.image}
                otherClasses="max-w-12 min-w-12 max-h-12 min-h-12 rounded-full"
              />
              <div>
                <p className="font-medium text-base leading-5">{author.name}</p>

                <span className="font-normal text-base leading-5">
                  {formattedDate}
                </span>
              </div>
            </div>
          ) : (
            <Link
              href="/hvac-services"
              className="flex items-center gap-[14px]"
            >
              <NextImage
                {...author.image}
                otherClasses="max-w-12 min-w-12 max-h-12 min-h-12 rounded-full"
              />
              <div>
                <p className="font-medium text-base leading-5">{author.name}</p>

                <span className="font-normal text-base leading-5">
                  {formattedDate}
                </span>
              </div>
            </Link>
          )}
          <div className="flex gap-3 justify-center">{shareButtons}</div>
        </div>
      </div>

      <div className="max-w-[1024px] mx-auto my-10 lg:my-16">
        <NextImage {...mainImage} otherClasses="w-full" />
      </div>

      <div className="max-w-[800px] mx-auto blogContent lg:px-0 px-4">
        <RichText richText={body} otherClasses="blog_rich_text" />
      </div>
      <div className="flex gap-3 justify-center mt-10 lg:mt-16 lg:px-0 px-4">
        {shareButtons}
      </div>
    </section>
  )
}
