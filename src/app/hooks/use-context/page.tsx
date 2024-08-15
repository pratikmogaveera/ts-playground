'use client'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { FormEvent, useRef } from 'react'
import { MessageProvider, useMessage, useMessageUpdate } from './MessageProvider'

const page = () => {
  return (
    <MessageProvider>
      <div className="starter flex-col gap-16 bg-background">
        <Link href="/hooks" className={buttonVariants({ variant: 'outline', size: 'icon', className: 'top-4 left-4 absolute' })}>
          <ArrowLeft />
        </Link>

        <h1 className="text-3xl font-bold">useContext</h1>

        <InputForm />

        <div className="flex max-md:flex-col gap-4">
          <ComponentOne />
          <ComponentTwo />
        </div>
      </div>
    </MessageProvider>
  )
}

const InputForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const setMessage = useMessageUpdate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputRef.current) {
      setMessage(inputRef.current.value)
      inputRef.current.value = ''
    }
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Input ref={inputRef} className="text-lg" placeholder="Enter message.." />
      <Button type="submit" variant="secondary">
        <span className="font-bold">Set</span>
      </Button>
    </form>
  )
}

// 1 Level Deep.
const ComponentOne = () => {
  const data = useMessage()

  return (
    <div className="h-[200px] min-w-[300px] p-4 border border-muted rounded-lg flex items-center justify-center text-muted-foreground text-2xl">
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}

// 2 Levels Deep.
const ComponentTwo = () => (
  <div className="h-[200px] min-w-[300px] p-4 border border-muted rounded-lg flex items-center justify-center text-muted-foreground text-2xl">
    <DisplayData />
  </div>
)

const DisplayData = () => {
  const data = useMessage()
  return <pre>{JSON.stringify(data)}</pre>
}

export default page
