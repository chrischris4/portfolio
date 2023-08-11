import { useState } from 'react';

function LocalStorage(key, initialValue) {
    const storedValue = localStorage.getItem(key);
    const initial =
        storedValue !== null ? JSON.parse(storedValue) : initialValue;

    const [value, setValue] = useState(initial);

    const setStoredValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setStoredValue];
}

export default LocalStorage;
