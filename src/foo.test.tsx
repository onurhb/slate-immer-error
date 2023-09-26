/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from './jsx'
import { describe, it } from 'vitest'

import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'

type CustomElement = { type: 'paragraph'; id: string, children: CustomText[] }
type CustomText = { text: string; bold?: true }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor 
    Element: CustomElement
    Text: CustomText
  }
}

const input = (
  <heditor>
    <element>
      o<cursor />
      ne
    </element>
  </heditor>
) as any as Editor

describe('blockIdPlugin', () => {
  it('apply node id on element insertion', () => {
    Editor.insertNode(input, { type: 'paragraph', id: '1', children: [{text: 'This works!'}] })
  })
})
