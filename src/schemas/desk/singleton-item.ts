import { StructureBuilder } from 'sanity/desk'

// import { metaPreviewView } from '~/lib/meta'
import { resolveHref } from '~/lib/sanity.links'

export const singletonItem = (
  S: StructureBuilder,
  type: string,
  title: string,
) => {
  return S.listItem()
    .title(title)
    .child(
      S.document().schemaType(type).documentId(type).views([
        // Default form view
        S.view.form(),
        // Preview
      ]),
    )
}
