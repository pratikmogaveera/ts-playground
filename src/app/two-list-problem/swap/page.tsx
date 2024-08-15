"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowLeft, ArrowRightLeft, Home } from "lucide-react"
import Link from 'next/link'
import React from 'react'

const defaultListLeft: string[] = ["Apple", "Banana", "Grape", "Watermelon"]
const defaultListRight: string[] = ["Red", "Green", "Blue", "Purple"]

const page = () => {
    const [selectedItems, setSelectedItems] = React.useState<string[]>([])
    const [leftList, setLeftList] = React.useState<string[]>([...defaultListLeft])
    const [rightList, setRightList] = React.useState<string[]>([...defaultListRight])

    const toggleSelected = (value: string) => {
        setSelectedItems((prevSelectedItems) => {
            if (prevSelectedItems.includes(value)) {
                return prevSelectedItems.filter((item) => item !== value);
            } else {
                return [...prevSelectedItems, value];
            }
        });
    }

    const swapItems = () => {
        let newLeftList = [...leftList.filter(item => !selectedItems.includes(item)), ...rightList.filter(item => selectedItems.includes(item))]
        let newRightList = [...rightList.filter(item => !selectedItems.includes(item)), ...leftList.filter(item => selectedItems.includes(item))]
        setSelectedItems([])
        setLeftList([...newLeftList])
        setRightList([...newRightList])
    }

    return (
        <div className='h-screen w-screen bg-background flex justify-center p-20'>
            <Link href="/two-list-problem" className={buttonVariants({ variant: "outline", size: "icon", className: "absolute top-4 left-4" })}><ArrowLeft /></Link>

            <div className='flex flex-col gap-4'>
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
                    <Button className='self-center' variant="outline" size="icon" onClick={swapItems} disabled={selectedItems.length === 0}><ArrowRightLeft /></Button>

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