"use client"
import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import List from './List'

const page = () => {
    const [input, setInput] = useState("")

    return (
        <div className='flex h-screen w-screen justify-center items-start gap-8 bg-background'>
            <Link href="/hooks" className={buttonVariants({ variant: "outline", size: "icon", className: "absolute top-4 left-4" })}><ArrowLeft /></Link>

            <div className='mt-8 flex flex-col gap-4'>
                <h1 className="text-3xl font-bold">useDeferredValue</h1>

                <Input value={input} placeholder='Input...' onChange={(e) => setInput(e.target.value)} />

                <div className='p-4 border rounded-lg h-fit'>
                    <List input={input} />
                </div>
            </div>
        </div>
    )
}

export default page