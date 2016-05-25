import init from '../index'

const elementId = 'dev-init'

let element = document.createElement('div')
element.id = elementId
document.body.appendChild(element)

init(elementId)
