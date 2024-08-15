"use client"

import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowLeft, Minus, Plus } from 'lucide-react'
import Link from 'next/link'
import { useReducer } from 'react'

type State = { count: number }
type Action = "increment" | "decrement" | "increment_three" | "double" | "clear"
type Dispatcher = "INCREMENT" | "DECREMENT" | "INCREMENT_THREE" | "DOUBLE" | "CLEAR"

const ACTIONS: Record<Dispatcher, Action> = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    INCREMENT_THREE: "increment_three",
    DOUBLE: "double",
    CLEAR: "clear"
}

function reducer(state: State, action: { type: Action }) {

    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        case ACTIONS.INCREMENT_THREE:
            return { count: state.count + 3 }
        case ACTIONS.DOUBLE:
            return { count: state.count * 2 }
        case ACTIONS.CLEAR:
            return { count: 0 }
        default:
            return state
    }

}

const page = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div className='starter flex-col gap-8 bg-background'>

            <h1 className="text-3xl font-bold">useReducer</h1>
            <div className='flex gap-4 top-4 left-4 absolute'>
                <Link href="/hooks" className={buttonVariants({ variant: "outline", size: "icon" })}><ArrowLeft /></Link>
                <Link href="/hooks/use-reducer/todos" className={buttonVariants({ variant: "outline" })}>Todos</Link>
            </div>
            <div className='flex flex-col gap-4 rounded-lg border border-muted items-center p-4'>
                <h1 className='text-3xl p-2 bg-muted/20 border border-muted-foreground rounded-lg w-full text-center'>{state.count}</h1>
                <div className='grid grid-cols-3 gap-2'>
                    <Button variant="secondary" size="icon" onClick={() => dispatch({ type: ACTIONS.INCREMENT })}><Plus /></Button>
                    <Button variant="secondary" size="icon" onClick={() => dispatch({ type: ACTIONS.DECREMENT })}><Minus /></Button>
                    <Button variant="secondary" size="icon" onClick={() => dispatch({ type: ACTIONS.CLEAR })}><span className='font-bold text-red-600 text-2xl'>C</span></Button>
                    <Button variant="secondary" size="icon" onClick={() => dispatch({ type: ACTIONS.INCREMENT_THREE })}>+3</Button>
                    <Button variant="secondary" size="icon" onClick={() => dispatch({ type: ACTIONS.DOUBLE })}>x2</Button>
                </div>
            </div>
        </div>
    )
}

export default page