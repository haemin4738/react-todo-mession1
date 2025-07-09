export const getStorage = <T = unknown>(key: string): T | null => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) as T : null;
};

export const setStorage = (key: string, data: unknown): void => {
    localStorage.setItem(key, JSON.stringify(data));
};