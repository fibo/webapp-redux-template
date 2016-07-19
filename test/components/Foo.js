import React from 'react'
import reactDom from 'react-dom/server'
import test from 'tape'
import dom from 'cheerio'

import Foo from 'components/Foo'

const render = reactDom.renderToStaticMarkup

test('Foo', (t) => {
  const id = 'my-foo'

  const el = <Foo id={id} />

  const $ = dom.load(render(el))
  const $div = $('div')
  const $span = $('div span')

  t.equal($div.attr('id'), id, 'id')
  t.ok(typeof $span.html() === 'string', 'default text')

  t.end()
})
