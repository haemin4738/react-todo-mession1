import { useState } from 'react';
import { Todo } from './types';

type TodoItemProps = {
    todo: Todo;
    onRemove: (id: string) => void;
    onToggle: (id: string) => void;
    onUpdate: (id: string, newValue: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove, onToggle, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.value);

    const handleEditSubmit = () => {
        if (!editValue.trim()) return;
        onUpdate(todo.id, editValue);
        setIsEditing(false);
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleEditSubmit();
                            if (e.key === 'Escape') {
                                setIsEditing(false);
                                setEditValue(todo.value);
                            }
                        }}
                        autoFocus
                        className="todo-edit-input"
                    />
                    <button onClick={handleEditSubmit} className="todo-btn-small">
                        저장
                    </button>
                    <button
                        onClick={() => {
                            setIsEditing(false);
                            setEditValue(todo.value);
                        }}
                        className="todo-btn-small"
                    >
                        취소
                    </button>
                </>
            ) : (
                <>
                    <span
                        onDoubleClick={() => setIsEditing(true)}
                        className="todo-text"
                        title="더블클릭하여 수정"
                    >
                        {todo.value}
                    </span>
                    <button
                        onClick={() => onRemove(todo.id)}
                        className="todo-btn-small todo-btn-delete"
                    >
                        삭제
                    </button>
                </>
            )}
        </li>
    );
};

export default TodoItem;
