"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const page = () => {
    const [option, setOption] = useState('posts')

    useEffect(() => {
        console.log('Option triggered.')

        return () => {
            console.log('Option removed.')
        }

    }, [option])

    return (
        <div className='starter bg-background flex-col gap-4'>
            <Link href="/hooks" className={buttonVariants({ variant: "outline", size: "icon", className: "top-4 left-4 absolute" })}><ArrowLeft /></Link>
            <h1 className='text-3xl font-bold mb-8'>useEffect</h1>
            <div className='flex gap-4'>
                <Button variant="outline" onClick={() => setOption('posts')}>Posts</Button>
                <Button variant="outline" onClick={() => setOption('users')}>Users</Button>
                <Button variant="outline" onClick={() => setOption('comments')}>Comments</Button>
            </div>
            <h1 className='text-3xl capitalize'>selected: <span className='font-bold'>{option}</span></h1>
        </div>

    )
}

export default page