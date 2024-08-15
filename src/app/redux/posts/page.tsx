import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Form from "./Form"
import PostsList from "./PostsList"

const page = () => {
    return (
        <div className='flex flex-col min-h-[100vh] w-screen items-center justify-start gap-8 bg-background pb-8'>
            <Link href="/redux" className='absolute top-4 left-4'>
                <Button variant="outline" size="icon">
                    <ArrowLeft />
                </Button>
            </Link>

            <h1 className='text-3xl font-bold text-purple-600 mt-8'>Redux</h1>

            <div className='flex flex-col gap-4 w-[600px]'>
                <Form />

                <h2 className="text-2xl font-bold border-b-2 border-muted mb-4">Posts:</h2>

                <PostsList />
            </div>
        </div>
    )
}

export default page