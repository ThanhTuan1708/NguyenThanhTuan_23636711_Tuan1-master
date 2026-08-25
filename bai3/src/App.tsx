import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

type Todo = {
  id: string
  title: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', title: 'Học cách định nghĩa mảng object', completed: true },
    { id: '2', title: 'Hiển thị danh sách bằng map()', completed: false },
    { id: '3', title: 'Thực hành quản lý state', completed: false },
  ])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const title = newTodo.trim()

    if (!title) return

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ])
    setNewTodo('')
  }

  const toggleTodo = (id: string) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const removeTodo = (id: string) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }

  const completedCount = todos.filter((todo) => todo.completed).length

  return (
    <main className="todo-page">
      <section className="todo-shell" aria-labelledby="todo-title">
        <header className="todo-header">
          <div>
            <p className="eyebrow">Bài 3 · Todo Basic</p>
            <h1 id="todo-title">Việc cần làm</h1>
            <p className="subtitle">Một việc nhỏ hôm nay, một bước tiến mỗi ngày.</p>
          </div>
          <div className="progress" aria-label={`${completedCount} trên ${todos.length} việc đã hoàn thành`}>
            <strong>{completedCount}/{todos.length}</strong>
            <span>đã xong</span>
          </div>
        </header>

        <form className="add-form" onSubmit={addTodo}>
          <label className="sr-only" htmlFor="new-todo">Tên việc cần làm</label>
          <input
            id="new-todo"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            placeholder="Bạn muốn hoàn thành việc gì?"
          />
          <button type="submit">Thêm việc</button>
        </form>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li className={`todo-item${todo.completed ? ' is-completed' : ''}`} key={todo.id}>
              <button
                className="check-button"
                type="button"
                onClick={() => toggleTodo(todo.id)}
                aria-label={todo.completed ? `Bỏ hoàn thành: ${todo.title}` : `Hoàn thành: ${todo.title}`}
              >
                {todo.completed ? '✓' : ''}
              </button>
              <span>{todo.title}</span>
              <button className="remove-button" type="button" onClick={() => removeTodo(todo.id)} aria-label={`Xóa: ${todo.title}`}>
                ×
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
