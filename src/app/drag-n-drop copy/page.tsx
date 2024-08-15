"use client"
import { useState } from "react"
import { initialData } from "./data"
import Column from "./components/Column"
import { DragDropContext } from 'react-beautiful-dnd'

const page = () => {
    const [data, setData] = useState(initialData)

    const tasks = Object.keys(data.tasks).map(item => data.tasks[item])
    const columns = Object.keys(data.columns).map(item => data.columns[item as keyof typeof data.columns])

    const onDragEnd = () => {

    }

    return (
        <div className="starter bg-background flex-col gap-8">

            <h1 className="text-3xl font-bold">Drag-N-Drop</h1>
            <DragDropContext
                onDragEnd={onDragEnd}
            >
                <div className="flex gap-8">
                    {data.columnOrder.map((col) => {
                        const column = data.columns[col]
                        return <Column
                            column={column}
                            tasks={column.taskIds.map(item => data.tasks[item])}
                            key={column.id}
                        />
                    })}
                </div>
            </DragDropContext>
        </div>
    )
}

export default page