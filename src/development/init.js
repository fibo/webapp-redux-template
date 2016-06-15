import fetch from 'isomorphic-fetch'
import init from '../index'

// Add root element to mount the app.

let element = document.createElement('div')
element.id = 'dev-init'
document.body.appendChild(element)

fetch('/api')
  .then((response) => response.json())
  .then((api) => init(element, api))
