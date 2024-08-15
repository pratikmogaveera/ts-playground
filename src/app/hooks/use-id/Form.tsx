"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useId } from 'react'

const Form = () => {
    const id = useId()
    return (
        <div className='flex flex-col gap-4 p-8 border-muted-foreground/50 border rounded-lg'>
            <div className='flex items-center gap-2'>
                <Label htmlFor={`email-${id}`}>Email:</Label>
                <Input placeholder='Email' type='email' id={`email-${id}`} />
            </div>
            <div className='flex items-center gap-2'>
                <Label htmlFor={`name-${id}`}>Name:</Label>
                <Input placeholder='Name' type='text' id={`name-${id}`} />
            </div>
        </div>
    )
}

export default Form