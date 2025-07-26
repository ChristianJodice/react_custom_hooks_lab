import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item !== null ? item : initialValue;
    });

    useEffect(() => {
        if (value !== null) {
            localStorage.setItem(key, value);
        } else {
            localStorage.removeItem(key);
        }
    }, [value, key]);

    return [value, setValue];
}

