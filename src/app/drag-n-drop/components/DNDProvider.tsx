"use client"

import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

const DNDProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <DragDropContext onDragEnd={() => { }}>
            {children}
        </DragDropContext>
    )
}

export default DNDProvider