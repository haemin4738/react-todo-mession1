import React, { useState } from 'react'
import { useTodos } from './hooks/useTodos'
import TodoList from './components/TodoList'

const App = () => {
    const { todos, addTodo, removeTodo, toggleComplete } = useTodos()
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(input)
        setInput('')
    }

    return (
        <div>
            <h1>React Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="할 일을 입력하세요"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">
                    추가
                </button>
            </form>
            <TodoList todos={todos} onRemove={removeTodo} onToggle={toggleComplete} />
        </div>
    )
}

export default App
