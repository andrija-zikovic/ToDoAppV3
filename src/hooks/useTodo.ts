import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { localStorageWrapper } from '../storage/storage'
import { descriptionInputValidation } from '../validation/validations'
import { Stage } from '../enums/stage'
import { TInfoMessage, TTodo } from '../types/types'
import TodoContext from '../context/todoContext'
import MessageContext from '../context/messageContext'
import dayjs from 'dayjs'

export const useTodo = (id?: string) => {
    const { infoMessages, setInfoMessages } = useContext(MessageContext)!
    const { setCurrentTable, localTable } = useContext(TodoContext)!

    const item = localTable.find((item) => item.id.toString() === id) as TTodo

    const [description, setDescription] = useState(item ? item.description : '')
    const [stage, setStage] = useState(item ? item.stage : '')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const createTodo = () => {
        const validation = descriptionInputValidation(description)

        if (validation) {
            setMessage(validation)
            return
        }

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

            setCurrentTable(updatedTodos)

            setInfoMessages([
                ...infoMessages,
                { message: 'ToDo created', type: 'success' } as TInfoMessage,
            ])
            navigate('/')
        } catch (error) {
            setInfoMessages([
                ...infoMessages,
                {
                    message: 'Error creating ToDo',
                    type: 'error',
                } as TInfoMessage,
            ])
        }
    }

    const updateTodo = (id: string) => {
        console.log('UPDATE')
        const item = localTable.find(
            (item) => item.id.toString() === id
        ) as TTodo

        const validation = descriptionInputValidation(description)

        if (validation) {
            console.log(validation)
            setMessage(validation)
            return
        }

        try {
            item.description = description

            item.stage = stage

            localStorageWrapper.setItem('toDos', localTable)

            setCurrentTable(localTable)

            navigate('/')
        } catch (error) {
            console.error(error)
            setInfoMessages([
                { message: 'Error updating To do!', type: 'error' },
            ])
        }
    }

    const deleteTodo = (id: string) => {
        const item = localTable.find(
            (item) => item.id.toString() === id
        ) as TTodo
        if (item.stage !== 'done') {
            setInfoMessages([
                {
                    message: 'You can only delete To do that is "Done"!',
                    type: 'error',
                },
            ])
            return
        }

        try {
            localTable.splice(localTable.indexOf(item), 1)
            localStorageWrapper.setItem('toDos', localTable)

            setCurrentTable(localTable)

            setInfoMessages([{ message: 'To do deleted!', type: 'success' }])

            navigate('/')
        } catch (error) {
            setInfoMessages([
                { message: 'Error deleting To do!', type: 'error' },
            ])
        }
        console.log('Deleting todo:', id)
    }

    return {
        createTodo,
        updateTodo,
        deleteTodo,
        description,
        setDescription,
        setStage,
        stage,
        message,
        setMessage,
    }
}
