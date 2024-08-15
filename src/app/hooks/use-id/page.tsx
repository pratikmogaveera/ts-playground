import { buttonVariants } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Form from './Form'

const page = () => {
    return (
        <div className='starter flex-col gap-8 bg-background'>
            <Link href="/hooks" className={buttonVariants({ variant: "outline", size: "icon", className: "absolute top-4 left-4" })} ><ArrowLeft /></Link>

            <h1 className='text-3xl font-bold'>useId</h1>
            <Form />
            <Form />

        </div>
    )
}

export default page