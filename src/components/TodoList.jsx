import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onRemove, onToggle }) => {
    if (todos.length === 0) return <p className="text-center text-gray-500 mt-4">할 일이 없습니다.</p>

    return (
        <ul className="divide-y divide-gray-300">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </ul>
    )
}

export default TodoList
