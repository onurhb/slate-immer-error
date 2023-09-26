import { createEditor } from 'slate'
import { createHyperscript, createText } from 'slate-hyperscript'

/**
 * This is the mapping for the JSX that creates editor state. Add to it as needed.
 * The h prefix isn't needed. It's added to be consistent and to let us know it's
 * hyperscript.
 */
export const jsx = createHyperscript({
  elements: {
    // Add any nodes here with any attributes that's required or optional
    hp: { type: 'paragraph' },
    hheader: { type: 'header' },
    hrow: { type: 'row' },
    hcolumn: { type: 'column' },
  },
  creators: {
    htext: createText,
    heditor: createEditor
  },
})
