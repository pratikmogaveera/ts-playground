"use client"
import { useState, useEffect, useDebugValue } from "react";

function getSavedValue(key: string, initialValue: any) {
    if (typeof window !== 'undefined') {
        const savedItem = localStorage.getItem(key)
        let parsedItem = savedItem ? JSON.parse(savedItem) : ""

        if (parsedItem) return parsedItem
    }

    if (typeof initialValue === 'function') { return initialValue() }

    return initialValue
}

export default function useLocalStorage(key: string, initialValue: any) {
    const [value, setValue] = useState(() => getSavedValue(key, initialValue))

    useDebugValue(value)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])


    return [value, setValue]
}