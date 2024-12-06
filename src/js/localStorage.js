export const save = (key, value) => {
try {
    localStorage.setItem(key, JSON.stringify(value));
} catch (error) {
    console.error('Error saving to localStorage', error);
}
};

export const load = (key) => {
try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
} catch (error) {
    console.error('Error reading from localStorage', error);
}
};
