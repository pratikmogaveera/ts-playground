"use client"
import { useDeferredValue, useEffect, useMemo } from 'react'

const List = ({ input }: { input: string }) => {
    const LIST_SIZE = 20000
    const deferredInput = useDeferredValue(input)

    const list = useMemo(() => {
        const l: string[] = []
        if (deferredInput.length)
            for (let i = 0; i < LIST_SIZE; i++)
                l.push(deferredInput)
        return l
    }, [deferredInput])

    // Showing difference
    useEffect(() => {
        console.log(`input: ${input}, \ndeferredInput: ${deferredInput}`)
    }, [input, deferredInput])


    return (
        <div className='flex flex-col gap-4'>
            {list.map((item, i) => <span key={i}>{item}</span>)}
        </div>
    )
}

export default List