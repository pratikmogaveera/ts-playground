import { Droppable } from 'react-beautiful-dnd'
import { ColumnType, TaskType } from '../data'
import Task from './Task'

const Column = ({ column, tasks }: { column: ColumnType, tasks: TaskType[] }) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl text-center">{column.title}</h2>

            <Droppable droppableId={column.id}>
                {(provided) =>
                    <div className="flex flex-col gap-2 p-4 border border-muted-foreground rounded-lg"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) =>
                            <Task task={task} index={index} key={task.id} />
                        )}
                        {provided.placeholder}
                    </div>
                }
            </Droppable>
        </div>
    )
}

export default Column