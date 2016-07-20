import fetch from 'isomorphic-fetch'
import init from '../src/index'

let element = document.createElement('div')
element.id = 'dev-init'
document.body.appendChild(element)

const err = (err) => console.error(err)

fetch('/api', { credentials: 'include' })
  .then((response) => response.json())
  .catch(err)
  .then((api) => init(element, api))
  .catch(err)
