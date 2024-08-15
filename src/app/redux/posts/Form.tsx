"use client"
import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AppDispatch } from "../store"
import { useDispatch } from "react-redux"
import { addPost } from "../_features/posts/posts-slice"

const Form = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(addPost({
            title,
            content
        }))

        setTitle("")
        setContent("")
    }

    return (
        <form
            className="flex flex-col gap-4 w-full border-2 rounded-lg border-muted p-4"
            onSubmit={handleSubmit}
        >
            <Input placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <Textarea placeholder="Your content goes here.." required value={content} onChange={(e) => setContent(e.target.value)} />
            <Button type="submit" variant="secondary">Post</Button>
        </form>
    )
}

export default Form