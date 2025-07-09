import React from 'react';

const TodoItem = ({ todo, onRemove, onToggle }) => {
    return (
        <li
            className={`flex items-center justify-between p-2 border-b
        ${todo.completed ? 'line-through text-gray-400' : ''}`}
        >
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <span>{todo.value}</span>
            <button
                onClick={() => onRemove(todo.id)}
            >
                삭제
            </button>
        </li>
    );
};

export default TodoItem;
