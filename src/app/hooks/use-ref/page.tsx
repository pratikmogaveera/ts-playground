'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'

const page = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState('')

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.value = 'Rubbish'
    }
  }

  return (
    <div className="starter flex-col gap-8 bg-background ">
      <Link href="/hooks" className={buttonVariants({ variant: 'outline', size: 'icon', className: 'absolute top-4 left-4' })}>
        <ArrowLeft />
      </Link>

      <h1 className="text-3xl font-bold">useRef</h1>
      <div className="min-w-[400px] flex flex-col gap-4 p-8 border border-muted rounded-xl">
        <Input ref={inputRef} className="text-lg" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <p className="text-3xl">
          My name is <span className="font-bold">{name}</span>
        </p>
        <Button size="sm" className="w-fit" onClick={focus}>
          <span className="font-bold">Focus</span>
        </Button>
      </div>
    </div>
  )
}

export default page
