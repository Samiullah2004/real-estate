import classnames from 'classnames'
import { groq } from 'next-sanity'

import { NEXT_IMAGE_FRAGMENT } from '~/components/next-image'

import Heading from '../../components/heading'
import NextImage from '../../components/next-image'
import RichText from '../../components/rich-text'
const WhyUsSection = ({ otherClasses, cards, mainHeading }) => {
  const whyUsSectionClasses = classnames(
    otherClasses,
    'bg-light-theme',
  )

  return (
    <section className={whyUsSectionClasses} data-testid="why-us-section">
     <div className='px-4 lg:px-20 xl:px-120 py-20 lg:py-[120px] mx-auto max-w-1512'>
     <Heading type="h2" className="text-center ">
        {mainHeading}
      </Heading>
      <div className="mx-auto mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards?.map(({ image, subText, heading }, index) => {
          return (
            <div
              className="max-h-[400px] flex flex-col gap-3 items-center"
              key={index}
            >
              <NextImage
                {...image}
                otherClasses="w-[48px] h-[48px] object-contain"
              />
              <Heading type="h6" otherClasses="text-center">
                {heading}
              </Heading>
              <RichText
                richText={subText}
                otherClasses="text-center global_rich_text_class"
              />
            </div>
          )
        })}
      </div>
     </div>
    </section>
  )
}

export default WhyUsSection

export const WHY_US_SECTION_FRAGMENT = groq`
_type == "whyUsSection"=> {
  _type, 
  identifier,
  mainHeading,
  cards[]{
    identifier,  
    heading,
    image{${NEXT_IMAGE_FRAGMENT}},
    subText,
  }
}
`
