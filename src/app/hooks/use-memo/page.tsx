"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"
import { useMemo, useState, useEffect } from "react"

const page = () => {
    const [number, setNumber] = useState(0)
    const [theme, setTheme] = useState<"light" | "dark">("dark")

    // const doubleNumber = slowFunction(number)
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])

    // const tempObj = {
    //     name: "Pratik",
    //     age: 23
    // }
    const tempObj = useMemo(() => {
        return {
            name: "Pratik",
            age: 23
        }
    }, [])

    useEffect(() => {
        console.log('Use effect triggered.')
    }, [tempObj])

    return (
        <div className={`starter flex-col gap-8 ${theme === "dark" ? "bg-background text-foreground" : "bg-foreground text-background"}`}>
            <Link href="/hooks" className={buttonVariants({ variant: "outline", size: "icon", className: "absolute top-4 left-4 text-foreground" })}><ArrowLeft /></Link>

            <h1 className="text-3xl font-bold">useMemo</h1>
            <div className="flex gap-4 items-start">
                <div className="flex-col gap-8">
                    <Input placeholder="Enter a number.." value={number} onChange={(e) => setNumber(parseInt(e.target.value))} className={theme === "dark" ? "bg-muted text-foreground" : "bg-muted-foreground text-background"} />
                    <p className="text-muted text-3xl">Output: <span className={theme === "dark" ? "text-foreground" : "text-background"}>{doubleNumber}</span></p>
                </div>
                <Button variant="secondary" onClick={() => setTheme(prev => prev === "dark" ? "light" : "dark")}>Change Theme</Button>
            </div>
        </div >
    )
}

const slowFunction = (number: number) => {
    for (let i = 0; i < 1000000000; i++) {

    }

    return number * 2

}

export default page