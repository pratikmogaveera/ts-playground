"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useGetAllPostsQuery } from './api/posts/posts'
import Post from './Post'
import { Home, Loader2 } from 'lucide-react'

const page = () => {
    const { data, isLoading } = useGetAllPostsQuery({})

    return (
        <div className='flex flex-col min-h-[100vh] w-screen items-center justify-start gap-8 bg-background'>
            <Link href="/" className='absolute top-4 left-4'>
                <Button variant="outline" size="icon"><Home /></Button>
            </Link>

            <h1 className='text-3xl font-bold text-purple-600 mt-8'>RTK Query</h1>

            <div className='w-[600px] flex flex-col gap-4'>
                <h2 className='text-2xl font-bold mb-4 border-b-2 border-purple-500'>Posts:</h2>

                {isLoading
                    ? <p className='flex items-center justify-center gap-2 w-full'><span className='animate-spin'><Loader2 /></span>Loading...</p>
                    : data?.map(item => <Post post={item} />)}
            </div>

        </div>
    )
}

export default page