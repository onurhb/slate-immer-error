/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from 'slate-hyperscript'
import { it } from 'vitest'

import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'

type CustomElement = { type: 'paragraph'; id: string; children: CustomText[] }
type CustomText = { text: string; bold?: true }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const input = (
  <editor>
    <element>
      o<cursor />
      ne
    </element>
  </editor>
) as any as Editor

it('insert paragraph', () => {
  Editor.insertNode(input, { type: 'paragraph', id: '1', children: [{ text: '' }] })
})
