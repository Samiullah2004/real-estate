import classnames from 'classnames'
// import gsap from 'gsap/dist/gsap'
// import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { groq } from 'next-sanity'
import { useEffect, useRef } from 'react'

import Button, { BUTTON_FRAGMENT } from '~/components/button/Button'
import Heading from '~/components/heading'
import NextImage, { NEXT_IMAGE_FRAGMENT } from '~/components/next-image'
import RichText from '~/components/rich-text'

export default function CtaSection({
  otherClasses,
  subText,
  buttons,
  backgroundImage,
  heading,
  toggleFunc,
  backgroundMobileImage,
}) {
  const ctaSectionClasses = classnames(otherClasses, 'relative w-full')

  return (
    <section
      className={ctaSectionClasses}
      data-testid="cta-section"
      id="cta-section-trigger"
    >
      {/* <NextImage
        {...backgroundImage}
        otherClasses="absolute top-0 left-0 w-full h-full hidden md:block object-cover"
      />
      <NextImage
        {...backgroundMobileImage}
        otherClasses="absolute top-0 left-0 w-full h-full md:hidden sm:object-cover"
      /> */}

<div className='absolute top-0 left-0 w-full h-ful blue'>   

 
      <div className="max-w-[1512px] mx-auto px-4 lg:px-20 xl:px-120 py-20 relative">
        <div className="w-full lg:w-[55%] xl:w-[52%] cta-content flex flex-col gap-4">
          <Heading
            type="h2"
            className="text-center lg:text-left text-white"
          >
            {heading}
          </Heading>
          <RichText
            richText={subText}
            otherClasses="font-Montserrat text-xl font-normal text-center lg:text-left text-white"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            {buttons?.map((node, index) => {
              return (
                <Button
                  {...node}
                  key={index}
                  onClick={() => toggleFunc(node?.form)}
                  otherClasses={classnames(
                    'w-full justify-center sm:w-auto',
                    index === 0 && 'border-primary-blue-600 border',
                  )}
                />
              )
            })}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
export const CTA_SECTION = groq`
_type == "ctaSection"=> {
  _type,
  identifier, 
  subText,
  heading,
  buttons[]{${BUTTON_FRAGMENT}},
  backgroundImage{${NEXT_IMAGE_FRAGMENT}},
  backgroundMobileImage{${NEXT_IMAGE_FRAGMENT}},
  
}
`
