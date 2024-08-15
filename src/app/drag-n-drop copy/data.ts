export type TaskType = {
    id: string,
    content: string
}

const tasks = {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch the favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
}

type ColumnKeys = "column-1"
// | "column-2"

export type ColumnType = {
    id: ColumnKeys,
    title: string,
    taskIds: (keyof typeof tasks)[]
}

interface InitialData {
    tasks: { [key: string]: TaskType },
    columns: Record<ColumnKeys, ColumnType>,
    columnOrder: (keyof typeof initialData.columns)[]
}

export const initialData: InitialData = {
    tasks,
    columns: {
        'column-1': { id: 'column-1', title: 'To-Do', taskIds: ['task-1', 'task-2', 'task-3', 'task-4'] },
        // 'column-2': { id: 'column-2', title: 'To-Do', taskIds: ['task-3', 'task-1', 'task-4', 'task-2'] },
    },
    // Facilitate reordering of columns
    columnOrder: ["column-1",]
}