import TodoItem from './TodoItem';
import { Todo } from './types';

type TodoListProps = {
    todos: Todo[];
    onRemove: (id: string) => void;
    onToggle: (id: string) => void;
    onUpdate: (id: string, newValue: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle, onUpdate }) => {
    if (todos.length === 0) return <p>할 일이 없습니다.</p>;

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    onUpdate={onUpdate}
                />
            ))}
        </ul>
    );
};

export default TodoList;
