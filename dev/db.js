var id = 1

var todos = [
  {
    id: 1,
    text: 'Milk'
  }
]

export function todoList () {
  return todos
}

export function todoAdd ({ text }) {
  id++

  todos.push({ text, id })
}
