import { useState, useEffect } from "react";

const uselocalstoreage = (key, intitionavalue) => {
    const [value, setvalue] = useState(() => {
        const localstate = localStorage.getItem(key);
        return localstate ? JSON.parse(localstate) : intitionavalue;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value).toLowerCase());
    }, [value]);
    return [value, setvalue];
};

export default uselocalstoreage;
