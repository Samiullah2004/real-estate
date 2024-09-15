import classnames from 'classnames'
import Image from 'next/image'
import { groq } from 'next-sanity'

import Heading from '~/components/heading'
import RichText from '~/components/rich-text'
import Slider from '~/components/slider'

import NextImage, {
  NEXT_IMAGE_FRAGMENT,
} from '../../components/next-image/index'
export default function TestimonialSection({
  otherClasses,
  heading,
  desktopBackgroundImage,
  mobileBackgroundImage,
  reviews,
  featured,
}) {
  const testimonialSectionClasses = classnames(otherClasses, 'relative w-full')

  const TestimonailPrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        aria-label="arrow-prev"
        onClick={onClick}
        className="top-[40%] -translate-y-2/4 lg:-left-16 xl:-left-6 w-12 h-12 group absolute z-20 lg:block hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <path
            d="M54 30c0 8.625-4.5938 16.5-12 20.8125-7.5 4.3125-16.5938 4.3125-24 0C10.5 46.5 6 38.625 6 30c0-8.5312 4.5-16.4062 12-20.71875 7.4062-4.3125 16.5-4.3125 24 0C49.4062 13.5938 54 21.4688 54 30ZM31.4062 18.6562l-9.75 9.8438c-.9374.8438-.9374 2.25 0 3.0938l9.75 9.75c.8438.9374 2.25.9374 3.0938 0 .9375-.8438.9375-2.25 0-3.1876L26.3438 30 34.5 21.8438c.9375-.8438.9375-2.25 0-3.1876-.8438-.8437-2.25-.8437-3.0938 0Z"
            className="fill-primary-blue-600 group-hover:fill-primary-blue-900 transition-all duration-300"
          />
        </svg>
      </button>
    )
  }

  const TestimonailNextArrow = (props) => {
    const { onClick } = props
    return (
      <button
        aria-label="arrow-next"
        onClick={onClick}
        className="top-[43%] -translate-y-2/4 -right-16 xl:-right-6 w-12 h-12 group absolute z-40 lg:block hidden rotate-180"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <path
            d="M54 30c0 8.625-4.5938 16.5-12 20.8125-7.5 4.3125-16.5938 4.3125-24 0C10.5 46.5 6 38.625 6 30c0-8.5312 4.5-16.4062 12-20.71875 7.4062-4.3125 16.5-4.3125 24 0C49.4062 13.5938 54 21.4688 54 30ZM31.4062 18.6562l-9.75 9.8438c-.9374.8438-.9374 2.25 0 3.0938l9.75 9.75c.8438.9374 2.25.9374 3.0938 0 .9375-.8438.9375-2.25 0-3.1876L26.3438 30 34.5 21.8438c.9375-.8438.9375-2.25 0-3.1876-.8438-.8437-2.25-.8437-3.0938 0Z"
            className="fill-primary-blue-600 group-hover:fill-primary-blue-900 transition-all duration-300 "
          />
        </svg>
      </button>
    )
  }
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    nextArrow: <TestimonailNextArrow />,
    prevArrow: <TestimonailPrevArrow />,
  }

  return (
    <section
      className={testimonialSectionClasses}
      data-testid="testimonial-section"
    >
      <NextImage
        {...desktopBackgroundImage}
        otherClasses="absolute top-0 left-0 w-full h-full lg:block hidden"
      />
     
      <NextImage
        {...mobileBackgroundImage}
        otherClasses="absolute top-0 left-0 w-full h-full lg:hidden"
      />
      <div className="w-full py-20 lg:py-160 max-w-[1512px] mx-auto px-4 lg:px-20  xl:px-120 2xl:px-192 relative">
        <div className="pb-[100px] pt-10 px-6 lg:px-120 xl:px-16 relative bg-white rounded-2xl border">
          {/* <Image
            src="/images/testimonial-desk.png"
            fill={true}
            alt="testimonial-background-desk"
            className="sm:block hidden"
          />
          <Image
            src="/images/testimonial-mob.png"
            fill={true}
            alt="testimonial-background-mob"
            className="sm:hidden "
          /> */}
          <div className="relative">
            <Heading type="h2" otherClasses="text-center text-white">
              {heading}
            </Heading>

            <Slider
              customSettings={settings}
              customClass="testimonial-slick-slider"
              otherClasses="mt-12"
            >
              {reviews?.map(
                ({ name, avatar, title, review, logo, featured }, index) => {
                  const setBg = () => {
                    const randomColor = Math.floor(
                      Math.random() * 16777215,
                    ).toString(16)
                    return '#' + randomColor
                  }
                  let text = review[0].children[0].text
                  text = text?.slice(0, 800)

                  return (
                    <div
                      key={index}
                      className="!flex flex-col items-center max-w-720 mx-auto"
                    >
                      {avatar.asset ? (
                        <NextImage
                          {...avatar}
                          otherClasses="w-14 h-14 rounded-full mb-2 text-white"
                        />
                      ) : (
                        <div
                          className="w-14 h-14 rounded-full mb-4 flex items-center justify-center font-medium text-xl text-white"
                          style={{ backgroundColor: setBg() }}
                        >
                          {name.slice(0, 1)}
                        </div>
                      )}

                      <Heading
                        type="h6"
                        otherClasses="text-center font-Montserrat font-normal text-white"
                      >
                        {name}
                      </Heading>
                      {title && (
                        <span className="block text-sm font-semibold font-Montserrat text-white">
                          {title}
                        </span>
                      )}
                      <p className="text-center mb-10 mt-5 font-Montserrat text-base font-normal text-white">
                        {`${text} ${text.length > 800 ? '...' : ''}`}
                      </p>
                      <NextImage
                        {...logo}
                        otherClasses="max-h-7 max-w-120 w-auto h-auto mb-2"
                      />
                    </div>
                  )
                },
              )}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export const TESTIMONIAL_SECTION_FRAGMENT = groq`
_type == "testimonialSection"=>{
  _type, 
  identifier,
  heading,
  desktopBackgroundImage{${NEXT_IMAGE_FRAGMENT}},
  mobileBackgroundImage{${NEXT_IMAGE_FRAGMENT}}, 
  "reviews":*[_type == "reviews" && featured == true ]{
      _type, 
      name,
      title,
      avatar{${NEXT_IMAGE_FRAGMENT}},
      review,
      logo{${NEXT_IMAGE_FRAGMENT}},
       featured,
  }
}
`
