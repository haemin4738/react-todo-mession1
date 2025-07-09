import { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import TodoList from './components/TodoList';
import './components/App.css';  // CSS 임포트

const App: React.FC = () => {
    const { todos, addTodo, removeTodo, toggleComplete, updateTodo } = useTodos();
    const [input, setInput] = useState('');

    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(input);
        setInput('');
    };

    return (
        <div className="todo-container">
            <h1 className="todo-title">할 일 목록</h1>
            <p className="todo-date">{formattedDate}</p>
            <form onSubmit={handleSubmit} className="todo-form">
                <input
                    type="text"
                    placeholder="할 일을 입력하세요"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="todo-input"
                />
                <button type="submit" className="todo-button">
                    추가
                </button>
            </form>
            <TodoList
                todos={todos}
                onRemove={removeTodo}
                onToggle={toggleComplete}
                onUpdate={updateTodo}
            />
        </div>
    );
};

export default App;
