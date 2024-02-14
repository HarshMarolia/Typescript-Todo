import AddTodo from "./components/addTodo"
import Navbar from "./components/navBar"
import Todos from "./components/todos"
import "./App.css"

const App = () => {
  return (
    <main>
      <h1>TYPESCRIPT TODO</h1>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  )
}

export default App