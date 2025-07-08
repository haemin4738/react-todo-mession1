export const getStorage = (key) => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : null
}

export const setStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}
