"use client"

import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { ChangeEvent, useState, useTransition } from 'react'

const LIST_COUNT = 20000



const page = () => {
    const [input, setInput] = useState("")
    const [list, setList] = useState<string[]>([])
    const [isLoading, startTransition] = useTransition()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)

        startTransition(() => {
            const tempList: string[] = []
            for (let i = 0; i < LIST_COUNT; i++) {
                tempList.push(e.target.value)
            }

            setList(tempList)
        })
    }

    return (
        <div className='reative flex justify-center h-screen w-screen bg-background gap-4'>
            <Link href="/hooks" className={buttonVariants({ variant: "outline", size: "icon", className: "top-4 left-4 absolute" })}><ArrowLeft /></Link>


            <div className='flex flex-col items-center gap-8 mt-8 px-16 py-4 h-fit'>
                <h1 className='text-3xl font-bold w-fit'>useTransition</h1>
                <div>
                    <Input placeholder='Input' value={input} onChange={handleChange} />
                </div>

                <div className='flex flex-col gap-2 w-full border p-2 rounded-lg'>
                    {isLoading
                        ? <p className='flex items-center justify-center gap-2'><span className='animate-spin'><Loader2 /></span>Loading</p>
                        : list.map((item, i) => <span key={i}>{item}</span>)
                    }
                </div>
            </div>
        </div>
    )
}

export default page