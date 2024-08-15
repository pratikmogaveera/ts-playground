"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { ArrowLeft, ArrowRight, Home, SendHorizonal } from "lucide-react"
import Link from 'next/link'
import React from 'react'

const defaultList: string[] = ["One", "Two", "Third", "Fourth"]

const page = () => {
    const [selectedItems, setSelectedItems] = React.useState<string[]>([])
    const [leftList, setLeftList] = React.useState<string[]>([...defaultList])
    const [rightList, setRightList] = React.useState<string[]>([])
    const [inputField, setInputField] = React.useState<string>("")

    const addItemToList = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLeftList(prev => [...prev, inputField])
        setInputField("")
    }

    const toggleSelected = (value: string) => {
        if (selectedItems.includes(value)) {
            let newSelectedItems = selectedItems.filter(item => item !== value)
            setSelectedItems([...newSelectedItems])
        }
        else
            setSelectedItems(prev => [...prev, value])
    }

    type MoveItemsType = "leftToRight" | "rightToLeft"
    const moveItems = (direction: MoveItemsType) => {
        const source = direction === "leftToRight" ? leftList : rightList
        const itemsToMove: string[] = source.filter(item => selectedItems.includes(item))
        const newSource = source.filter(item => !selectedItems.includes(item))
        const newSelected = selectedItems.filter(item => !itemsToMove.includes(item))

        if (direction === 'leftToRight') {
            setLeftList([...newSource])
            setRightList(prev => [...prev, ...itemsToMove])
        } else {
            setRightList([...newSource])
            setLeftList(prev => [...prev, ...itemsToMove])
        }

        setSelectedItems([...newSelected])
    }

    return (
        <div className='relative h-screen w-screen bg-background flex justify-center p-20'>
            <div className="flex gap-4 top-4 left-4 absolute">
                <Link href="/" className={buttonVariants({ variant: "outline", size: "icon" })}><Home /></Link>
                <Link href="/two-list-problem/swap" className={buttonVariants({ variant: "outline", size: "icon" })}>Swap</Link>
            </div>

            <div className='flex flex-col gap-4'>
                {/* Input Container */}
                <form className='flex gap-4' onSubmit={addItemToList}>
                    <Input placeholder='Add to list...' type='text' value={inputField} onChange={(e) => setInputField(e.target.value)} />
                    <Button type="submit" variant="secondary" disabled={inputField.length === 0}><SendHorizonal /></Button>
                </form>

                {/* Lists Container */}
                <div className='flex gap-8 '>

                    {/* First List */}
                    <div className='flex flex-col gap-4 border border-muted rounded-lg p-4 min-w-[200px]'>
                        <h1 className='font-bold text-3xl border-b border-muted-foreground pb-2'>Left</h1>
                        {leftList.length > 0
                            ? leftList?.map(item => (
                                <div className='flex gap-2 py-2 items-center border-b border-muted/50 last-of-type:border-none' key={item}>
                                    <Checkbox id={item} checked={selectedItems.includes(item)} onCheckedChange={() => toggleSelected(item)} />
                                    <p>{item}</p>
                                </div>
                            ))
                            : <p className='text-lg text-muted-foreground/50'>No items.</p>
                        }
                    </div>

                    {/* SWAP BUTTONS */}
                    <div className='flex flex-col gap-2 self-center'>
                        <Button variant="outline" size="icon" onClick={() => moveItems("leftToRight")} disabled={!leftList.some(item => selectedItems.includes(item))}><ArrowRight /></Button>
                        <Button variant="outline" size="icon" onClick={() => moveItems("rightToLeft")} disabled={!rightList.some(item => selectedItems.includes(item))}><ArrowLeft /></Button>
                    </div>

                    {/* Second List */}
                    <div className='flex flex-col gap-4 border border-muted rounded-lg p-4 min-w-[200px]'>
                        <h1 className='font-bold text-3xl border-b border-muted-foreground pb-2'>Right</h1>

                        {rightList.length > 0
                            ? rightList?.map(item => (
                                <div className='flex gap-2 py-2 items-center border-b border-muted/50 last-of-type:border-none' key={item}>
                                    <Checkbox id={item} checked={selectedItems.includes(item)} onCheckedChange={() => toggleSelected(item)} />
                                    <p>{item}</p>
                                </div>
                            ))
                            : <p className='text-lg text-muted-foreground/50'>No items.</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page