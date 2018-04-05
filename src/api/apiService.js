const baseUrl = 'http://localhost:3001/'

const fetchTodos = async () => {
  try {
    const response = await fetch(baseUrl + 'todos')
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const createTodo = async todo => {
  try {
    const response = await fetch(baseUrl + 'todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const editTodo = async todo => {
  try {
    const response = await fetch(baseUrl + 'todos/' + todo.id, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const removeTodo = async todo => {
  try {
    await fetch(baseUrl + 'todos/' + todo.id, {
      method: 'DELETE'
    })
    return todo
  } catch (error) {
    console.log(error)
  }
}

export default { fetchTodos, createTodo, removeTodo, editTodo }
