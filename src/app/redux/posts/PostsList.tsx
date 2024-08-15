"use client"
import { useAppSelector } from '../store'
import Post from './Post'

const PostsList = () => {
    const posts = useAppSelector(state => state.postsSlice.data)

    return (
        <div className='flex flex-col gap-4'>
            {posts.length > 0
                ? posts.map(item => <Post post={item} key={item.id} />)
                : <p className='text-center w-full font-bold text-muted-foreground'>No posts.</p>
            }
        </div>
    )
}

export default PostsList