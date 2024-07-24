import { pages } from './documents/pages'
import { genericTwoColumnSection } from './documents/genericTwoColumnSection'
import { bodyPortableText } from './objects/bodyPortableText'
import { button } from './objects/button'
import { customImage } from './objects/image'
import { iframe } from './objects/iframe'
import { youtube } from './objects/youtube'

export const schemaTypes = [
  // documents
  pages,
  genericTwoColumnSection,

  // objects
  bodyPortableText,
  customImage,
  button,
  iframe,
  youtube,
]
