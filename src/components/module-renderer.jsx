// eslint-disable-next-line simple-import-sort/imports

import { groq } from 'next-sanity'
import TwoColumnSection, {
  TWO_COLUMN_GENERIC_SECTION_FRAGMENT,
} from '../sections/two-column-section'

export const fragment = groq`
  ${TWO_COLUMN_GENERIC_SECTION_FRAGMENT},
`

export default function ModuleRenderer({ modules = [], id, toggleFunc }) {
  return modules?.map((module, index) => {
    switch (module._type) {
      case 'genericTwoColumnSection':
        return (
          <TwoColumnSection
            key={index}
            {...module}
            toggleFunc={toggleFunc}
            id={id}
          />
        )

      default:
        return null
    }
  })
}
