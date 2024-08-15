"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Minus, Plus, X } from 'lucide-react'
import Link from 'next/link'
import { Ref, forwardRef, useImperativeHandle, useRef, useState } from 'react'

const page = () => {
    return (
        <div className='flex h-screen w-screen items-center bg-background flex-col gap-8'>
            <Link href="/hooks" className={buttonVariants({ variant: "outline", size: "icon", className: "absolute top-4 left-4" })}><ArrowLeft /></Link>
            <h1 className='text-3xl font-bold mt-8'>useImperativeHandle</h1>

            {/* <TextInputExample /> */}
            {/* <CounterExample /> */}
            <ModalExample />

        </div>
    )
}

export default page

/*TEXT INPUT*/
type ActionsText = keyof TextInputRef
interface Props { }
type TextInputRef = {
    focus: () => void,
    greet: () => void,
    clear: () => void,
}

const TextInputExample = () => {
    const inputRef = useRef<TextInputRef>(null)
    // type temp = 

    const handleClick = (action: ActionsText) => {
        if (!inputRef.current) return

        switch (action) {
            case 'focus': {
                inputRef.current.focus();
                break;
            }
            case 'greet': {
                inputRef.current.greet();
                break;
            }
            case 'clear': {
                inputRef.current.clear();
                break;
            }
        }


    }
    return (
        <div className='flex flex-col gap-4 p-8 rounded-lg border border-muted'>
            <TextInput ref={inputRef} />
            <Button variant="secondary" onClick={() => handleClick('focus')}>Focus</Button>
            <Button variant="secondary" onClick={() => handleClick('greet')}>Greet</Button>
            <Button variant="secondary" onClick={() => handleClick('clear')}>Clear</Button>
        </div>
    )
}

const TextInput = forwardRef((props: Props, ref: Ref<TextInputRef>) => {
    const localRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
        focus: () => {
            if (!localRef.current) return;
            localRef.current.focus()
        },
        greet: () => {
            if (!localRef.current) return;
            localRef.current.value = "Hello!"
        },
        clear: () => {
            if (!localRef.current) return;
            localRef.current.value = ""
        }
    }))

    return (
        <Input ref={localRef} placeholder='Input...' />
    )
})

/*COUNTER*/
interface Props { }
type CounterRef = {
    add: () => void,
    sub: () => void,
    clear: () => void,
}

const CounterExample = () => {
    const localRef = useRef<CounterRef>(null)
    return (
        <div className='flex flex-col gap-4 rounded-lg border border-muted items-center p-4 w-[150px]'>
            <CounterState ref={localRef} />

            <div className='grid grid-cols-2 gap-2'>
                <Button variant="outline" onClick={() => localRef.current?.add()} className='text-xl'><Plus /></Button>
                <Button variant="outline" onClick={() => localRef.current?.sub()} className='text-xl'><Minus /></Button>
                <Button variant="outline" onClick={() => localRef.current?.clear()} className='w-full col-span-2 text-xl'>Clear</Button>
            </div>
        </div>
    )
}

const CounterState = forwardRef((props: Props, ref: Ref<CounterRef>) => {
    const [count, setCount] = useState(0)

    const add = () => {
        setCount(prev => prev + 1)
    }

    const sub = () => {
        setCount(prev => prev - 1)
    }

    const clear = () => {
        setCount(0)
    }

    useImperativeHandle(ref, () => ({
        add,
        sub,
        clear,
    }))

    return (
        <h1 className='text-3xl p-2 bg-muted/20 border border-muted-foreground rounded-lg w-full text-center'>{count}</h1>
    )
})

/*Modal*/
interface Props { }
type ModalRef = {
    focusAccept: () => void,
    focusDeny: () => void,
    focusClose: () => void,
}
type ActionsModal = keyof ModalRef

const ModalExample = () => {
    const [isOpen, setIsOpen] = useState(false)
    const localRef = useRef<ModalRef>(null)

    const HandleClick = (action: ActionsModal) => {
        if (!localRef.current) return

        switch (action) {
            case "focusAccept": {
                localRef.current.focusAccept()
                break;
            };
            case "focusDeny": {
                localRef.current.focusDeny()
                break;
            };
            case "focusClose": {
                localRef.current.focusClose()
                break;
            }
        }

    }

    return (
        <div className='flex flex-col rounded-lg items-center'>
            {isOpen && <Modal ref={localRef} />}
            <div className='grid grid-cols-3 gap-2 p-4 rounded-lg border'>
                <Button className='col-span-3' onClick={() => setIsOpen(prev => !prev)}>Open Modal</Button>
                <span className='col-span-3 font-bold mt-4 text-center'>Focus</span>
                <Button variant="secondary" onClick={() => HandleClick("focusAccept")}>Accept</Button>
                <Button variant="secondary" onClick={() => HandleClick("focusDeny")}>Deny</Button>
                <Button variant="secondary" onClick={() => HandleClick("focusClose")}>Close</Button>
            </div>

        </div >
    )
}

const Modal = forwardRef((props: Props, ref: Ref<ModalRef>) => {
    const acceptRef = useRef<HTMLButtonElement>(null)
    const denyRef = useRef<HTMLButtonElement>(null)
    const closeRef = useRef<HTMLButtonElement>(null)

    useImperativeHandle(ref, () => ({
        focusAccept: () => acceptRef.current?.focus(),
        focusDeny: () => denyRef.current?.focus(),
        focusClose: () => closeRef.current?.focus(),

    }))


    return (
        <div className='absolute p-8 rounded-lg border w-[320px] gap-8 flex flex-col justify-between top-[50%] -translate-y-[20%]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>Hello World!</h1>
                <Button ref={closeRef} onClick={() => console.log('Close')} size="icon" className='rounded-full focus:bg-slate-300'><X /></Button>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quo sit veritatis molestiae.</p>

            <div className='flex items-center justify-between'>
                <Button ref={acceptRef} onClick={() => console.log('Accept')} size="lg" className='bg-green-500 focus:bg-green-700 text-black text-lg'>Accept</Button>
                <Button ref={denyRef} onClick={() => console.log('Deny')} size="lg" className='bg-red-500 focus:bg-red-700 text-lg text-black'>Deny</Button>
            </div>
        </div>
    )
})