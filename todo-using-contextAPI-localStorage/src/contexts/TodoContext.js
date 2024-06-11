import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider


//The code snippet defines a TodoContext using the createContext function. The TodoContext is initialized with an object as its default value. This object contains an array of todos, where each todo has an id, a todo message, and a completed status. The default value also includes four methods: addTodo, updateTodo, deleteTodo, and toggleComplete. These methods are currently empty, as indicated by the arrow functions with empty bodies. The code also exports a custom hook useTodo, which can be used to access the TodoContext value. Finally, the code exports the TodoProvider component, which is the Provider component for the TodoContext.
// Additionally, the TodoContext object has several methods defined: addTodo, updateTodo, deleteTodo, and toggleComplete. These methods are currently empty, as indicated by the arrow functions with empty bodies. These methods can be used to perform various operations on the todos array, such as adding a new todo, updating an existing todo, deleting a todo, and toggling the completion status of a todo.