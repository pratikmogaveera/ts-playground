'use client'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Check, Trash } from 'lucide-react'
import Link from 'next/link'
import { useReducer, useRef } from 'react'

type Todo = { id: string; title: string; completed: boolean }
type State = Todo[]
type ActionType = 'create' | 'delete' | 'update'
type ActionPayload = { title?: string; id?: string }
type Action = { type: ActionType; payload?: ActionPayload }
type Dispatcher = 'CREATE' | 'DELETE' | 'UPDATE'

const ACTIONS: Record<Dispatcher, ActionType> = {
  CREATE: 'create',
  DELETE: 'delete',
  UPDATE: 'update',
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ACTIONS.CREATE: {
      if (action.payload?.title) return [...state, createTodo(action.payload.title)]

      return state
    }
    case ACTIONS.DELETE: {
      if (action.payload?.id) return [...state.filter((item) => item.id !== action.payload?.id)]

      return state
    }
    case ACTIONS.UPDATE: {
      if (action.payload?.id)
        return state.map((item) => {
          if (item.id === action.payload?.id) return { ...item, completed: !item.completed }
          return item
        })

      return state
    }
    default:
      return state
  }
}

function createTodo(title: string) {
  return { id: crypto.randomUUID(), title, completed: false }
}

const page = () => {
  const [todos, dispatch] = useReducer(reducer, [])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputRef.current) {
      dispatch({ type: ACTIONS.CREATE, payload: { title: inputRef.current.value } })
      inputRef.current.value = ''
    }
  }

  return (
    <div className="starter flex-col gap-8 bg-background">
      <Link href="/hooks/use-reducer" className={buttonVariants({ variant: 'outline', size: 'icon', className: 'absolute top-4 left-4' })}>
        <ArrowLeft />
      </Link>

      <h1 className="text-3xl font-bold">useReducer</h1>
      <div className="w-full md:w-[600px] flex flex-col gap-8">
        <form onSubmit={handleSubmit} className="flex gap-4 border border-muted rounded-lg p-4">
          <Input ref={inputRef} placeholder="Todo.." />
          <Button type="submit">
            <span className="font-bold">Create</span>
          </Button>
        </form>

        <h1 className="text-2xl font-bold">Todos:</h1>

        <div className="flex flex-col gap-4">
          {todos.map((item) => (
            <div key={item.id} className="bg-muted/20 rounded-lg flex items-center gap-4 p-4 w-full">
              <Button variant="outline" size="icon" onClick={() => dispatch({ type: ACTIONS.UPDATE, payload: { id: item.id } })}>
                <Check className={item.completed ? 'flex text-green-600' : 'hidden'} />
              </Button>
              <h2>{item.title}</h2>
              <Button variant="secondary" size="icon" className="ml-auto" onClick={() => dispatch({ type: ACTIONS.DELETE, payload: { id: item.id } })}>
                <Trash className="text-red-500" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
