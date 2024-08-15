"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Check, Eye, Home } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type ConstraintsType = {
    length: boolean;
    lowerCase: boolean;
    upperCase: boolean;
    number: boolean;
    special: boolean;
}

const page = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [progress, setProgress] = useState(5)
    const [constraints, setConstrains] = useState<ConstraintsType>({
        length: false,
        lowerCase: false,
        upperCase: false,
        number: false,
        special: false,
    })

    useEffect(() => {
        CheckConstraints(password)
    }, [password])

    useEffect(() => {
        let count = 0
        Object.keys(constraints).map(key => constraints[key as keyof typeof constraints] === true ? count += 1 : "")
        setProgress(count === 0 ? 5 : count * 20)
    }, [constraints])

    const ClearInputs = () => {
        setPassword("")
        setEmail("")
    }

    const CheckConstraints = (pass: string) => {
        let constraintStatus: ConstraintsType = {
            length: pass.length >= 8,
            lowerCase: /[a-z]/.test(pass),
            upperCase: /[A-Z]/.test(pass),
            number: /\d/.test(pass),
            special: /[@#$_]/.test(pass),
        }

        setConstrains({ ...constraintStatus })
    }

    return (
        <div className='starter bg-background'>
            <Link href="/" className={buttonVariants({ variant: "outline", size: "icon", className: "top-4 left-4 absolute" })}><Home /></Link>
            <div className=' rounded-lg p-8 flex flex-col gap-4 border border-muted-foreground'>
                <h1 className='text-3xl font-bold mb-4'>Register</h1>
                <div>
                    <Label htmlFor='email' >Email address:</Label>
                    <Input id='email' value={email} className="text-[16px]" onChange={(e) => setEmail(e.target.value)} type='text' placeholder='joe@example.com' />
                </div>
                <div>
                    <Label htmlFor='password' >Password:</Label>
                    <div className='flex gap-2'>
                        <Input id='password' value={password} className="text-[16px]" onChange={(e) => setPassword(e.target.value.trim())} type={showPassword ? "text" : "password"} placeholder='YourStrongPassword' />
                        <Button variant={showPassword ? "secondary" : "outline"} size="icon" className='aspect-square' onClick={() => setShowPassword(prev => !prev)}><Eye className='h-5 w-5' /></Button>
                    </div>
                </div>
                <div>
                    <Progress value={progress} className='h-2' />
                </div>
                <ProgressList constraints={constraints} />
                <div className='flex gap-2 justify-end'>
                    <Button variant="secondary" onClick={ClearInputs}>Clear</Button>
                    <Button disabled={!Object.keys(constraints).every(key => constraints[key as keyof typeof constraints] === true)}>Register</Button>
                </div>
            </div>
        </div>
    )
}

const ProgressList = ({ constraints }: { constraints: ConstraintsType }) => {
    return (
        <div className='text-muted-foreground/50 text-xs flex flex-col'>
            <p className={`flex items-center gap-2 ${constraints['length'] ? "text-green-400" : ""}`}>
                <span><Check className={`h-4 w-4 ${constraints['length'] === true ? "opacity-100" : "opacity-0"}`} /></span> <span>Length &gt; 8</span>
            </p>
            <p className={`flex items-center gap-2 ${constraints['lowerCase'] ? "text-green-400" : ""}`}>
                <span><Check className={`h-4 w-4 ${constraints['lowerCase'] === true ? "opacity-100" : "opacity-0"}`} /></span> <span>Lowercase</span>
            </p>
            <p className={`flex items-center gap-2 ${constraints['upperCase'] ? "text-green-400" : ""}`}>
                <span><Check className={`h-4 w-4 ${constraints['upperCase'] === true ? "opacity-100" : "opacity-0"}`} /></span> <span>Uppercase</span>
            </p>
            <p className={`flex items-center gap-2 ${constraints["number"] ? "text-green-400" : ""}`}>
                <span><Check className={`h-4 w-4 ${constraints['number'] === true ? "opacity-100" : "opacity-0"}`} /></span> <span>Number</span>
            </p>
            <p className={`flex items-center gap-2 " ${constraints['special'] ? "text-green-400" : ""}`}>
                <span><Check className={`h-4 w-4 ${constraints['special'] === true ? "opacity-100" : "opacity-0"}`} /></span> <span>Special characters '@#$_'</span>
            </p>
        </div>
    )
}

export default page