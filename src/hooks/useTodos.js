import { useState, useEffect } from 'react'
import { getStorage, setStorage } from '../utils/storage'

const STORAGE_KEY = 'todos'

const createTodo = (value) => ({
    id: Date.now().toString(),
    value,
    completed: false,
})

export const useTodos = () => {
    const [todos, setTodos] = useState(() => getStorage(STORAGE_KEY) || [])

    useEffect(() => {
        setStorage(STORAGE_KEY, todos)
    }, [todos])

    const addTodo = (value) => {
        if (!value.trim()) return
        setTodos((prev) => [...prev, createTodo(value)])
    }

    const removeTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
    }

    return { todos, addTodo, removeTodo, toggleComplete }
}
