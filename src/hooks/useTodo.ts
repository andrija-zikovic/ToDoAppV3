import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { localStorageWrapper } from '../storage/storage'
import { Stage } from '../enums/stage'
import { TTodo, TUpdateFormData } from '../types/types'
import MessageContext from '../context/messageContext'
import TodoContext from '../context/todoContext'
import dayjs from 'dayjs'

export const useTodo = () => {
    const { setInfoMessages } = useContext(MessageContext)!
    const { refetchToDoList } = useContext(TodoContext)!
    const navigate = useNavigate()

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

            refetchToDoList()
            navigate('/')
            setInfoMessages({ message: 'Todo created', type: 'success' })
        } catch (error) {
            console.error(error)
            setInfoMessages({ message: 'Error creating todo', type: 'error' })
            return
        }
    }

    const updateTodo = ({ id, description, stage }: TUpdateFormData) => {
        const storage = localStorageWrapper.getItem('toDos') || []

        const item = storage.find(
            (item: TTodo) => item.id.toString() === id
        ) satisfies TTodo

        try {
            description ? (item.description = description) : null
            stage ? (item.stage = stage) : null

            localStorageWrapper.setItem('toDos', storage)

            setInfoMessages({ message: 'Todo updated', type: 'success' })
            refetchToDoList()
        } catch (error) {
            console.error(error)
            setInfoMessages({ message: 'Error updating todo', type: 'error' })
            return
        }
    }

    const deleteTodo = (id: string) => {
        const storage = localStorageWrapper.getItem('toDos') || []

        const item = storage.find(
            (item: TTodo) => item.id.toString() === id
        ) satisfies TTodo

        if (!item) {
            setInfoMessages({ message: 'Todo not found', type: 'error' })
            return
        } else if (item.stage !== 'done') {
            setInfoMessages({
                message: 'Todo must be done to delete',
                type: 'error',
            })
            return
        }

        try {
            const newStorage = storage.filter(
                (item: TTodo) => item.id.toString() !== id
            )

            localStorageWrapper.setItem('toDos', newStorage)

            refetchToDoList()
            navigate('/')
            setInfoMessages({ message: 'Todo deleted', type: 'success' })
        } catch (error) {
            console.error(error)
            setInfoMessages({ message: 'Error deleting todo', type: 'error' })
            return
        }
    }

    return {
        createTodo,
        updateTodo,
        deleteTodo,
    }
}
