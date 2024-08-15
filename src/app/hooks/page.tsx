import { buttonVariants } from '@/components/ui/button'
import { Home } from 'lucide-react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='starter bg-background flex-col'>
            <Link href="/" className={buttonVariants({ variant: "outline", size: "icon", className: "top-4 left-4 absolute" })}><Home /></Link>


            <h1 className='font-bold text-5xl mb-8'>Hooks</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {links.map(item =>
                    <Link key={item.title} href={`/hooks/${item.href}`} className={buttonVariants({ variant: "secondary" })}>{item.title}</Link>
                )}
            </div>
        </div>
    )
}

const links = [
    {
        href: "use-state",
        title: "useState"

    },
    {
        href: "use-effect",
        title: "useEffect"

    },
    {
        href: "use-memo",
        title: "useMemo"

    },
    {
        href: "use-ref",
        title: "useRef"

    },
    {
        href: "use-context",
        title: "useContext"

    },
    {
        href: "use-reducer",
        title: "useReducer"

    },
    {
        href: "use-callback",
        title: "useCallback"

    },
    {
        href: "use-custom",
        title: "useCustom"

    },
    {
        href: "use-layout-effect",
        title: "useLayoutEffect"

    },
    {
        href: "use-transition",
        title: "useTransition"

    },
    {
        href: "use-deferred-value",
        title: "useDeferredValue"

    },
    {
        href: "use-imperative-handle",
        title: "useImperativeValue"

    },
    {
        href: "use-debug-value",
        title: "useDebugValue"

    },
    {
        href: "use-id",
        title: "useId"

    },
]

export default page