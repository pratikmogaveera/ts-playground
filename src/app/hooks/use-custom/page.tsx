"use client"

import Link from "next/link"
import useLocalStorage from "./useLocalStorage"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"

const page = () => {
    const [value, setValue] = useLocalStorage("name", () => "")
    return (
        <div className='starter flex-col gap-8 bg-background'>
            <Link href="/hooks" className={buttonVariants({ variant: "outline", size: "icon", className: "absolute top-4 left-4" })}><ArrowLeft /></Link>

            <h1 className='text-3xl font-bold'>useLocalStorage</h1>
            <div className="border border-muted-foreground p-4 rounded-lg flex flex-col gap-4">
                <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Input..." />
                <h2 className="font-bold text-xl">Output: <span className="font-normal">{value}</span></h2>
            </div>
        </div>
    )
}

export default page