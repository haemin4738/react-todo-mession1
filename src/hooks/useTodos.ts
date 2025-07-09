import { useState, useEffect } from 'react';
import { getStorage, setStorage } from '../utils/storage';
import { Todo } from '../components/types';

const STORAGE_KEY = 'todos';

const createTodo = (value: string): Todo => ({
    id: Date.now().toString(),
    value,
    completed: false,
});

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>(() => getStorage(STORAGE_KEY) || []);

    useEffect(() => {
        setStorage(STORAGE_KEY, todos);
    }, [todos]);

    const addTodo = (value: string) => {
        if (!value.trim()) return;
        setTodos((prev) => [...prev, createTodo(value)]);
    };

    const removeTodo = (id: string) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id: string) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const updateTodo = (id: string, newValue: string) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, value: newValue } : todo
            )
        );
    };

    return { todos, addTodo, removeTodo, toggleComplete, updateTodo };
};
