const baseUrl = 'http://localhost:3001/'

const fetchTodos = async () => {
  try {
    const response = await fetch(baseUrl + 'todos')
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

export default { fetchTodos }
