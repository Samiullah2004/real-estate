import { genericTwoColumnSection } from './documents/genericTwoColumnSection'
import { pages } from './documents/pages'
import { bodyPortableText } from './objects/bodyPortableText'
import { button } from './objects/button'
import { iframe } from './objects/iframe'
import { customImage } from './objects/image'
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
