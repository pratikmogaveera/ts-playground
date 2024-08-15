import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="starter flex-col bg-background">
      <h1 className="text-3xl sm:text-5xl font-extralight">
        <span className="font-bold">TypeScript</span> Playground
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 mt-12">
        <Link href="/state-in-url" className={buttonVariants({ variant: 'secondary' })}>
          State in URL
        </Link>
        <Link href="/hooks" className={buttonVariants({ variant: 'secondary' })}>
          Hooks
        </Link>
        <Link href="/pw-strength" className={buttonVariants({ variant: 'secondary' })}>
          Password Strength
        </Link>
        <Link href="/two-list-problem" className={buttonVariants({ variant: 'secondary' })}>
          Two List Problem
        </Link>
        <Link href="/redux" className={buttonVariants({ variant: 'secondary' })}>
          Redux
        </Link>
        <Link href="/rtk-query" className={buttonVariants({ variant: 'secondary' })}>
          RTK Query
        </Link>
        <Link href="/drag-n-drop" className={buttonVariants({ variant: 'secondary' })}>
          Drag N Drop
        </Link>
        <Link href="/recursive-comp" className={buttonVariants({ variant: 'secondary' })}>
          Recursive Comp
        </Link>
      </div>
    </div>
  )
}
