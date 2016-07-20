import React from 'react'
import reactDom from 'react-dom/server'
import test from 'tape'
import dom from 'cheerio'

import Root from 'components/Root'

const render = reactDom.renderToStaticMarkup

test('Root', (t) => {
  const props = {
    title: 'Offer wall',
    todo: {
      list: []
    }
  }

  const el = <Root {...props} />

  const $ = dom.load(render(el))
  const $h1 = $('h1')

  t.equal($h1.html(), props.title, 'title')

  t.end()
})
