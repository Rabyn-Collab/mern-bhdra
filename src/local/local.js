

export const setTodosToLocal = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}



export const getTodosFromLocal = () => {
  const todos = localStorage.getItem('todos')
  return todos ? JSON.parse(todos) : [];
}


