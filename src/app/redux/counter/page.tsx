"use client"
import { clear, decrement, increment } from '@/app/redux/_features/counter/counter-slice'
import { AppDispatch, useAppSelector } from '@/app/redux/store'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Minus, Plus } from 'lucide-react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch<AppDispatch>()
    const count = useAppSelector(state => state.counterSlice.count)

    const inc = () => {
        dispatch(increment())
    }

    const dec = () => {
        dispatch(decrement())
    }

    const clr = () => {
        dispatch(clear())
    }

    return (
        <div className='flex flex-col h-screen w-screen items-center justify-start gap-8 bg-background'>
            <Link href="/redux" className='absolute top-4 left-4'>
                <Button variant="outline" size="icon">
                    <ArrowLeft />
                </Button>
            </Link>

            <h1 className='text-3xl font-bold text-purple-600 mt-8'>Redux</h1>

            <div className='flex flex-col gap-4 p-4 border-2 rounded-lg border-muted'>
                <h1 className='text-3xl font-bold px-3 py-2 w-full bg-muted/50 text-center text-purple-600 rounded-lg'>{count}</h1>

                <div className='flex gap-4 justify-between'>
                    <Button variant="outline" onClick={inc}><Plus /></Button>
                    <Button variant="outline" onClick={dec}><Minus /></Button>
                </div>

                <Button variant="outline" onClick={clr}>Clear</Button>
            </div>
        </div>
    )
}

export default page