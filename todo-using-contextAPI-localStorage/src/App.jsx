import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'

import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])  // State to store all todos
 
  const addTodo = (todo) => { 
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  // addTodo function to add new todo to the todos state . here we are using the spread operator to add the new todo to the existing todos array.

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  // updateTodo function to update the existing todo in the todos state. Here we are using the map function to loop through the todos array and update the todo with the matching id.

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

// deleteTodo function to delete the todo from the todos state. Here we are using the filter function to filter out the todo with the matching id.

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) =>  prev.map((prevTodo) =>  prevTodo.id === id ? { ...prevTodo,  completed: !prevTodo.completed } : prevTodo))
  }
  // toggleComplete function to toggle the completed state of the todo. Here we are using the map function to loop through the todos array and update the completed state of the todo with the matching id.

  // setTodos ke ander se callback se previous values mil gyi hme saari then uske ander se map function se loop krke uska id check krke uska completed state toggle kr diya using ternary operator if true to object ko spread operator se copy krke uska completed state toggle kr diya or false to wahi object return kr diya.


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  // useEffect hook to get the todos from the local storage when the component mounts. Here we are using the JSON.parse function to parse the todos from the local storage and set the todos state with the parsed todos.

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
// useEffect hook to save the todos to the local storage when the todos state changes. Here we are using the JSON.stringify function to stringify the todos and save them to the local storage.


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
