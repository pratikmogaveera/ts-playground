import { Button } from "@/components/ui/button"
import { Edit, Trash } from "lucide-react"
import { Post, deletePost } from "../_features/posts/posts-slice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store"
import { format } from 'date-fns'
import Link from "next/link"

interface PostProp {
    post: Post
}

const Post = ({ post }: PostProp) => {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className="flex justify-between gap-4 pb-2 border-b border-muted">
            <div className="flex flex-col gap-2 w-full" key={post.id}>
                <div className="flex justify-between items-center">
                    <h3><span className="font-bold">Title</span>: {post.title}</h3>
                    <h3 className="text-muted-foreground text-xs">{post.createdAt}</h3>
                </div>
                <p><span className="font-bold">Content</span>: {post.content}</p>
            </div>

            <div className="flex gap-2">
                <Link href={`/redux/posts/edit?id=${post.id}`}>
                    <Button variant="outline" size="icon"><Edit className="h-5" /></Button>
                </Link>

                <Button variant="destructive" size="icon" onClick={() => dispatch(deletePost(post.id))}><Trash className="h-5" /></Button>
            </div>
        </div>
    )
}

export default Post