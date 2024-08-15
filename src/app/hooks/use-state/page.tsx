"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowLeft, Minus, Plus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const page = () => {
    const [count, setCount] = useState(0)

    const add = () => {
        setCount(prev => prev + 1)
    }

    const addThree = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    const subtract = () => {
        setCount(prev => prev - 1)
    }

    return (
        <div className='starter bg-background flex-col gap-8'>
            <Link href="/hooks" className={buttonVariants({ variant: "outline", size: "icon", className: "top-4 left-4 absolute" })}><ArrowLeft /></Link>

            <h1 className='text-3xl font-bold'>useState</h1>
            <div className='flex flex-col gap-4 rounded-lg border border-muted items-center p-4 w-[150px]'>
                <h1 className='text-3xl p-2 bg-muted/20 border border-muted-foreground rounded-lg w-full text-center'>{count}</h1>

                <div className='grid grid-cols-2 gap-2'>
                    <Button variant="outline" onClick={add} className='text-xl'><Plus /></Button>
                    <Button variant="outline" onClick={subtract} className='text-xl'><Minus /></Button>
                    <Button variant="outline" onClick={addThree} className='w-full col-span-2 text-xl'>+3</Button>
                </div>
            </div>
        </div>
    )
}

export default page