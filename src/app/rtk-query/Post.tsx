import { Post } from "./api/posts/posts"

const Post = ({ post }: { post: Post }) => {
    return (
        <div className="flex flex-col gap-2 pb-4 border-b border-muted-foreground" key={post.id}>
            <h3><span className="font-bold">{post.id}. &nbsp;</span>{post.title}</h3>
            <p><span className="font-bold">Body:</span><br />{post.body}</p>
        </div>
    )
}

export default Post