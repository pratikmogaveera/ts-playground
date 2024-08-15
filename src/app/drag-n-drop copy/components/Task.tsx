import React from 'react'
import { TaskType } from '../data'
import { Draggable } from 'react-beautiful-dnd'

const Task = ({ task, index }: { task: TaskType, index: number }) =>
    <Draggable draggableId={task.id} index={index}>
        {(provided) =>
            <div className="bg-muted rounded-lg p-2"
                {...provided.dragHandleProps}
                {...provided.draggableProps}
                ref={provided.innerRef}
            >
                {index + 1}. &nbsp;
                {task.content}
            </div>
        }
    </Draggable>


export default Task