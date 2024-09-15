import classnames from 'classnames'
import { groq } from 'next-sanity'
import Button, { BUTTON_FRAGMENT } from '~/components/button/Button'
import NextImage, { NEXT_IMAGE_FRAGMENT } from '~/components/next-image'
import RichText from '../../components/rich-text'

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMedia } from "use-media";
import Heading from '~/components/heading'
export default function HomeHeroSection({
  otherClasses,
  mobileImage,
  desktopImage,
  subText,
  heading,
  button,
  toggleFunc,
}) {
  const homeHeroSectionClasses = classnames(
    otherClasses,
    'relative flex items-center justify-center overflow-hidden py-20 md:py-32 lg:py-40 xl:py-60',
  )


  return (
    <section className={homeHeroSectionClasses} data-testid="home-hero-section">
      <div className="w-full h-full absolute top-0 left-0 banner z-20"></div>
        <video
          id="animated-bg-video"
          autoPlay
          controls={false}
          playsInline
          loop
          muted
          height="100%"
          width="100%"
          className="absolute left-0 top-0 h-full w-full !object-cover"
        >
          <source src="/video/realEstate.mp4" />
        </video>

        <div className="z-20 mx-auto w-full max-w-[950px] text-center flex items-center justify-center flex-col gap-4 hero-black-color">
          <Heading type="largeText" otherClasses="text-white">{heading}</Heading>

          <p className="hero-black-color text-white text-lg font-medium">
            A full-service agency helping established businesses gain a
            competitive edge.
          </p>
          <div className="flex items-center justify-center px-[42px] lg:px-0 mt-5">
                <Button {...button} otherClasses="" />
          </div>
        </div>
      
    </section>
  )
}

export const HOME_HERO_SECTION_FRAGMENT = groq`
_type == "homeHeroSection"=>{
  _type, 
  identifier,
  subText,
  heading,
  desktopImage{${NEXT_IMAGE_FRAGMENT}},
  mobileImage{${NEXT_IMAGE_FRAGMENT}},
  button{${BUTTON_FRAGMENT}}
  
}
`
