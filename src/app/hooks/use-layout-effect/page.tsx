"use client"

import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const page = () => {
    const [show, setShow] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const popupRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (popupRef.current == null || buttonRef.current == null) return

        const { bottom } = buttonRef.current.getBoundingClientRect()
        popupRef.current.style.top = `${bottom + 40}px`

    }, [show])

    return (
        <div className='starter bg-background flex flex-col'>
            <Link href="/hooks" className={buttonVariants({ variant: "outline", size: "icon", className: "absolute top-4 left-4" })}><ArrowLeft /></Link>

            <h1 className='text-3xl font-bold'>
                useLayoutEffect
            </h1>

            <Button ref={buttonRef} onClick={() => setShow(prev => !prev)} className='mt-8'>
                <span className='font-bold'>Toggle</span>
            </Button>

            {show && (<div ref={popupRef} style={{ position: "absolute" }} className='bg-muted rounded-xl px-8 py-12'>
                <h2 className='text-3xl font-bold'>This is the popup!</h2>
            </div>)}
        </div>
    )
}

export default page