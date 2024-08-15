"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {

    return (
        <div className='flex flex-col h-screen w-screen items-center justify-start gap-8 bg-background'>
            <h1 className='text-3xl font-bold text-purple-600 mt-8'>Redux</h1>

            <div className='flex gap-4 p-8 border-2 rounded-lg border-purple-600'>
                <Link href="/redux/counter">
                    <Button variant="secondary" className='font-bold'>Counter</Button>
                </Link>
                <Link href="/redux/auth-form">
                    <Button variant="secondary" className='font-bold'>Auth Form</Button>
                </Link>
                <Link href="/redux/posts">
                    <Button variant="secondary" className='font-bold'>Posts</Button>
                </Link>
            </div>
        </div>
    )
}

export default page