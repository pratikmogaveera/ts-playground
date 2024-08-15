"use client"
import { useEffect, useState } from "react"

const List = ({ getNumbers }: { getNumbers: (val: number) => number[] }) => {
    const [numbers, setNumbers] = useState<number[]>([])

    useEffect(() => {
        console.log('Getting Numbers')
        const res = getNumbers(5)
        setNumbers(res)
    }, [getNumbers])

    return (
        <div className="flex gap-4">
            {numbers.map((num, i) => <span key={i}>{num}</span>)}
        </div>
    )
}

export default List