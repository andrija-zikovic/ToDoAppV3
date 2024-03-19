import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { localStorageWrapper } from '../storage/storage'
import { descriptionInputValidation } from '../validation/validations'
import { Stage } from '../enums/stage'
import {
    TInfoMessage,
    TTodo,
    TCreateFormData,
    TUpdateFormData,
} from '../types/types'
// import TodoContext from '../context/todoContext'
// import MessageContext from '../context/messageContext'
import dayjs from 'dayjs'

export const useTodo = () => {
    // const { infoMessages, setInfoMessages } = useContext(MessageContext)!
    // const { setCurrentTable, localTable } = useContext(TodoContext)!
    // const [description, setDescription] = useState(item ? item.description : '')
    // const [stage, setStage] = useState(item ? item.stage : '')
    // const [message, setMessage] = useState('')
    // const [isLoading, setIsLoading] = useState(false)

    const createTodo = ({ description }: TCreateFormData) => {
        // setIsLoading(true)
        // const validation = descriptionInputValidation(description)

        // if (validation) {
        //     setMessage(validation)
        //     return
        // }

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

            // setCurrentTable(updatedTodos)

            //  setInfoMessages([
            //     ...infoMessages,
            //     { message: 'ToDo created', type: 'success' } as TInfoMessage,
            // ])
            // navigate('/')
        } catch (error) {
            return error
        }
    }

    const updateTodo = ({ id, description, stage }: TUpdateFormData) => {
        const storage = localStorageWrapper.getItem('toDos') || []
        if (storage.length === 0) {
            return
        }
        const item = storage.find(
            (item: TTodo) => item.id.toString() === id
        ) satisfies TTodo

        // setIsLoading(true)
        // const item = localTable.find(
        //     (item) => item.id.toString() === id
        // ) as TTodo

        // const validation = descriptionInputValidation(description)

        // if (validation) {
        //     console.log(validation)
        //     setMessage(validation)
        //     return
        // }

        try {
            item.description = description

            item.stage = stage

            localStorageWrapper.setItem('toDos', storage)

            // setCurrentTable(localTable)

            // navigate('/')
        } catch (error) {
            return error
            // console.error(error)
            // setInfoMessages([
            //     { message: 'Error updating To do!', type: 'error' },
            // ])
        }
        // setIsLoading(false)
    }

    const deleteTodo = (id: string) => {
        const storage = localStorageWrapper.getItem('toDos') || []

        if (storage.length === 0) {
            return
        }

        const item = storage.find(
            (item: TTodo) => item.id.toString() === id
        ) satisfies TTodo

        if (item.stage !== 'done') {
            return
        }

        try {
            const newStorage = storage.filter(
                (item: TTodo) => item.id.toString() !== id
            )

            localStorageWrapper.setItem('toDos', newStorage)
            // localTable.splice(localTable.indexOf(item), 1)
            // localStorageWrapper.setItem('toDos', localTable)

            // setCurrentTable(localTable)

            // setInfoMessages([{ message: 'To do deleted!', type: 'success' }])

            // navigate('/')
        } catch (error) {
            return error
            // setInfoMessages([
            //     { message: 'Error deleting To do!', type: 'error' },
            // ])
        }
    }

    return {
        createTodo,
        updateTodo,
        deleteTodo,
        // description,
        // setDescription,
        // setStage,
        // stage,
        // message,
        // setMessage,
        // isLoading,
    }
}
