"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from "next/navigation"
import { FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '../../store'
import { updatePost } from '../../_features/posts/posts-slice'

const page = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const searchParams = useSearchParams()
    const id = searchParams.get('id') as string
    const AllPosts = useAppSelector(state => state.postsSlice.data)
    const post = AllPosts.find(item => item.id === id)

    useEffect(() => {
        const getPost = (id: string) => {
            if (post) {
                setTitle(post?.title)
                setContent(post?.content)
            }
        }

        getPost(id)
    }, [id])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(updatePost({
            id,
            title,
            content
        }))
    }

    return (
        <div className='flex flex-col min-h-[100vh] w-screen items-center justify-start gap-8 bg-background pb-8'>
            <Link href="/redux/posts" className='absolute top-4 left-4'>
                <Button variant="outline" size="icon">
                    <ArrowLeft />
                </Button>
            </Link>

            <h1 className='text-3xl font-bold text-purple-600 mt-8'>Redux</h1>

            <div className='flex flex-col gap-4 w-[600px]'>
                <form
                    className="flex flex-col gap-4 w-full border-2 rounded-lg border-muted p-4"
                    onSubmit={handleSubmit}
                >
                    <Input placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Textarea placeholder="Your content goes here.." required value={content} onChange={(e) => setContent(e.target.value)} />
                    <Button type="submit" variant="secondary">Update</Button>
                </form>
            </div>
        </div>
    )
}

export default page