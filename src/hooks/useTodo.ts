import { localStorageWrapper } from '../storage/storage'
import { Stage } from '../enums/stage'
import { TTodo, TUpdateFormData } from '../types/types'
import dayjs from 'dayjs'

const getValidStorage = () => {
    const storage = localStorageWrapper.getItem('toDos')
    if (storage === null) {
        return { message: 'No todos found', type: 'error' }
    }
    return storage
}

export const useTodo = () => {
    const createTodo = (description: string) => {
        try {
            const storedTodos = localStorageWrapper.getItem('toDos') || []

            const now = dayjs().valueOf()

            const newTodo = {
                id: now,
                description: description,
                created_at: now,
                stage: Stage.PENDING,
            }

            const updatedTodos = [newTodo, ...storedTodos]

            localStorageWrapper.setItem('toDos', updatedTodos)
        } catch (error) {
            return error
        }
    }

    const updateTodo = ({ id, description, stage }: TUpdateFormData) => {
        const storage = getValidStorage()
        if (storage.message) {
            return storage
        }

        const item = storage.find(
            (item: TTodo) => item.id.toString() === id
        ) satisfies TTodo

        try {
            description ? (item.description = description) : null

            stage ? (item.stage = stage) : null

            localStorageWrapper.setItem('toDos', storage)
        } catch (error) {
            console.error(error)
            return { message: 'Error updating todo', type: 'error' }
        }
    }

    const deleteTodo = (id: string) => {
        const storage = getValidStorage()
        if (storage.message) {
            return storage
        }

        const item = storage.find(
            (item: TTodo) => item.id.toString() === id
        ) satisfies TTodo

        if (item.stage !== 'done') {
            return { message: 'You can only delete done todos', type: 'error' }
        }

        try {
            const newStorage = storage.filter(
                (item: TTodo) => item.id.toString() !== id
            )

            localStorageWrapper.setItem('toDos', newStorage)
        } catch (error) {
            console.error(error)
            return { message: 'Error deleting todo', type: 'error' }
        }
    }

    return {
        createTodo,
        updateTodo,
        deleteTodo,
    }
}
