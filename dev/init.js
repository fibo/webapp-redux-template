import fetch from 'isomorphic-fetch'
import init from '../src/index'

const element = document.getElementById('webapp-container')

const err = (msg) => console.error(msg)

fetch('/api', { credentials: 'include' })
  .then((response) => response.json())
  .catch(err)
  .then((api) => init(element, api))
  .catch(err)
