"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn, logOut, toggleIsAdmin } from '@/app/redux/_features/auth/auth-slice'
import { AppDispatch, useAppSelector } from '@/app/redux/store'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const page = () => {
    const [username, setUsername] = useState("")
    const dispatch = useDispatch<AppDispatch>()

    const ReduxValue = useAppSelector(state => state.authSlice.value)

    const handleLogIn = () => {
        dispatch(logIn(username))
        setUsername("")
    }

    const handleLogOut = () => {
        dispatch(logOut())
    }

    const toggleAdmin = () => {
        dispatch(toggleIsAdmin())
    }

    return (
        <div className='flex flex-col h-screen w-screen items-center justify-start gap-8 bg-background'>
            <Link href="/redux" className='absolute top-4 left-4'>
                <Button variant="outline" size="icon">
                    <ArrowLeft />
                </Button>
            </Link>

            <h1 className='text-3xl font-bold text-purple-600 mt-8'>Redux</h1>

            <div className='flex flex-col gap-4 w-[340px] p-8 border-2 rounded-lg border-purple-600'>
                <div>
                    <Label htmlFor='username'>Username <span className='text-red-600 font-bold'>*</span></Label>
                    <Input id="username" placeholder='Username...' disabled={ReduxValue.isAuth} value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className='flex gap-4 justify-center'>
                    <Button variant="secondary" size="lg" onClick={handleLogIn} disabled={ReduxValue.isAuth || username.length === 0} className='w-full'><span className='font-bold'>Login</span></Button>
                    <Button variant="secondary" size="lg" onClick={handleLogOut} disabled={!ReduxValue.isAuth} className='w-full'><span className='font-bold'>Logout</span></Button>
                </div>
                <Button variant="outline" size="lg" onClick={toggleAdmin} disabled={!ReduxValue.isAuth}>Toggle Admin</Button>

                <div className='bg-muted/50 w-full rounded-lg p-4'>
                    <pre className='flex px-4'>
                        "value": {JSON.stringify(ReduxValue, null, 4)}
                    </pre>
                </div>

            </div>
        </div>
    )
}

export default page