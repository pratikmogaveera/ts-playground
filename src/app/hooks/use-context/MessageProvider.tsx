"use client"
import { createContext, useContext, useState } from 'react'

export const MessageContext = createContext({ message: "No message." })
export const MessageUpdate = createContext((input: string) => { })

export function useMessage() {
    return useContext(MessageContext)
}

export function useMessageUpdate() {
    return useContext(MessageUpdate)
}

export const MessageProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState({ message: "" })

    const setMessage = (input: string) => {
        setData({ message: input })
    }

    return (
        <MessageUpdate.Provider value={setMessage}>
            <MessageContext.Provider value={data}>
                {children}
            </MessageContext.Provider>
        </MessageUpdate.Provider>
    )
}