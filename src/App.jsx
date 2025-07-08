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
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-center">React Todo List</h1>
            <form onSubmit={handleSubmit} className="flex mb-4">
                <input
                    type="text"
                    placeholder="할 일을 입력하세요"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600">
                    추가
                </button>
            </form>
            <TodoList todos={todos} onRemove={removeTodo} onToggle={toggleComplete} />
        </div>
    )
}

export default App
