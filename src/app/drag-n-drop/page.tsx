"use client"
import { useState } from "react"
import { initialData } from "./data"
import Column from "./components/Column"
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const page = () => {
    // const [data, setData] = useState(initialData)
    // const tasks = Object.keys(data.tasks).map(item => data.tasks[item])
    // const columns = Object.keys(data.columns).map(item => data.columns[item as keyof typeof data.columns])
    // const column = data.columns["column-1"]

    const data = [
        {
            id: 1,
            name: "Pratik"
        },
        {
            id: 2,
            name: "Mogaveera"
        }
    ]

    return (
        <div className="starter bg-background flex-col gap-8">
            <h1 className="text-3xl font-bold">Drag-N-Drop</h1>
            <div className="flex gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-xl text-center">Column Title</h2>
                    <Droppable droppableId='droppable-column'>
                        {(provided) =>
                            <div className="flex flex-col gap-2 p-4 border border-muted-foreground rounded-lg"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {data.map((task, index) =>
                                    <Draggable draggableId={`draggable-${task.id}`} index={index} key={task.id}>
                                        {(provided2) =>
                                            <div className="bg-muted rounded-lg p-2"
                                                ref={provided2.innerRef}
                                                {...provided2.dragHandleProps}
                                                {...provided2.draggableProps}

                                            >
                                                {task.name}
                                            </div>
                                        }
                                    </Draggable>
                                )}
                                {provided.placeholder}
                            </div>
                        }
                    </Droppable>
                </div>
            </div>
        </div>
    )
}

export default page