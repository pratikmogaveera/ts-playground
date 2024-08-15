'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import List from './List'

const page = () => {
  const [number, setNumber] = useState(0)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const getNumbers = useCallback(
    (increment: number) => {
      return [number, number * increment, number * increment * 2]
    },
    [number]
  )

  return (
    <div className={`starter flex-col gap-8 ${theme === 'dark' ? 'bg-background text-foreground' : 'bg-foreground text-background'}`}>
      <Link href="/hooks" className={buttonVariants({ variant: 'outline', size: 'icon', className: 'absolute top-4 left-4 text-foreground' })}>
        <ArrowLeft />
      </Link>

      <h1 className="text-3xl font-bold">useCallback</h1>
      <div className="flex flex-col gap-4 items-start w-full md:w-[450px] bg-muted/20 p-8 rounded-lg">
        <div className="flex gap-8">
          <Input
            placeholder="Enter a number.."
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value !== '' ? e.target.value : '0'))}
            className={`w-[200px] text-lg ${theme === 'dark' ? 'bg-muted text-foreground' : 'bg-muted-foreground text-background'}`}
          />
          <Button variant="secondary" onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}>
            Change Theme
          </Button>
        </div>

        <List getNumbers={getNumbers} />
      </div>
    </div>
  )
}

export default page
