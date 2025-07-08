import React from 'react'

const TodoItem = ({ todo, onRemove, onToggle }) => {
    return (
        <li
            className={`flex items-center justify-between p-2 border-b
        ${todo.completed ? 'line-through text-gray-400' : ''}`}
        >
            <label className="flex items-center space-x-2 cursor-pointer">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>{todo.value}</span>
            </label>
            <button onClick={() => onRemove(todo.id)} className="text-red-500 hover:text-red-700 font-bold">
                삭제
            </button>
        </li>
    )
}

export default TodoItem
