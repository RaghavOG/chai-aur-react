### Todo App with Context API and Local Storage

This project is a simple Todo application built with React, demonstrating the use of Context API for state management and local storage for persistent data. 

#### Features:
1. **Context API**: 
   - Manages global state, making the state accessible to any component without prop drilling.
   - Used to manage the todos list and user information.

2. **Local Storage**:
   - Persists the todos list between page reloads.
   - Ensures that data remains intact even if the user closes and reopens the browser.

3. **Add Todo**:
   - Users can add new todo items.
   - Input field for todo content and a button to submit.

4. **Delete Todo**:
   - Users can remove a todo item.
   - Each todo item has a delete button.

5. **Toggle Todo**:
   - Users can mark a todo as completed or uncompleted.
   - Checkbox to toggle the state of the todo.

6. **Component Structure**:
   - **App Component**: The main component that uses context providers.
   - **TodoList Component**: Displays the list of todos.
   - **TodoItem Component**: Represents a single todo item with delete and toggle functionality.
   - **AddTodo Component**: Input field and button to add new todos.

#### Why These Features are Used:
- **Context API**: Provides an efficient way to manage and share state across the application, avoiding the complexity of passing props down multiple levels.
- **Local Storage**: Ensures data persistence, offering a better user experience by retaining todo items across sessions.
- **Componentization**: Breaks down the UI into manageable, reusable pieces, promoting code reusability and maintainability.

### How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/raghavog/chai-aur-react
   cd chai-aur-react/10todocontextLocal
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000` to view the app.

This README provides a concise overview of the application's functionalities and the purpose behind using specific features like Context API and local storage. For more details, visit the [project repository](https://github.com/RaghavOG/react-mini-projects).