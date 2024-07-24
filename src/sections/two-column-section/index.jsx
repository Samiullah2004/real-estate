import clsx from 'clsx'
import { groq } from 'next-sanity'

import { BUTTON_FRAGMENT } from '../../components/button/Button'
import NextImage, {
  NEXT_IMAGE_FRAGMENT,
} from '../../components/next-image/index'

export const TwoColumnSection = ({ otherClasses, desktopImage, heading }) => {
  const twoColumnGenericSectionClasses = clsx(otherClasses)

  return (
    <section
      className={twoColumnGenericSectionClasses}
      data-testid="two-column-generic-section"
    >
      {heading}
      <NextImage {...desktopImage} />
    </section>
  )
}

export default TwoColumnSection

export const TWO_COLUMN_GENERIC_SECTION_FRAGMENT = groq`
_type == "genericTwoColumnSection"=> {
  _type,
  identifier,
  heading,
  subText,
  desktopReversed,
  mobileReversed,
  desktopImage{${NEXT_IMAGE_FRAGMENT}},
  mobileImage{${NEXT_IMAGE_FRAGMENT}},
  button{${BUTTON_FRAGMENT}}
}
`
