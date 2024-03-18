import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import dayjs from 'dayjs'
import { localStorageWrapper } from '../storage/storage'
import { Stage } from '../../shared/enums/stage'
import { TInfoMessage } from '../../shared/types/types'
import { descriptionInputValidation } from '../../scripts/validation/validations'
import TodoContext from '../context/todoContext'
import MessageContext from '../context/messageContext'
import TextInput from '../../shared/ui/Inputs/Input'
import SubmitButton from '../../shared/ui/Buttons/SubmitButton'

const CreateScreen = () => {
    const navigate = useNavigate()

    const [description, setDescription] = useState('')
    const [message, setMessage] = useState('')

    const { infoMessages, setInfoMessages } = useContext(MessageContext)!
    const { setCurrentTable } = useContext(TodoContext)!

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

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
            console.error(error)
            setInfoMessages([
                ...infoMessages,
                {
                    message: 'Error creating ToDo',
                    type: 'error',
                } as TInfoMessage,
            ])
        }
    }

    return (
        <div
            className={`w-full min-h-96 flex flex-col justify-start items-center gap-2`}
        >
            <div className="w-full flex flex-row justify-start items-center p-2">
                <button
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    Back
                </button>
            </div>
            <h1 className="text-4xl p-2 mt-28">Create ToDo</h1>
            <form
                onSubmit={handleOnSubmit}
                className="w-full h-full flex flex-col justify-center items-center p-2 gap-8"
            >
                <div className="relative">
                    <TextInput
                        label="Description"
                        placeholder="Type here..."
                        name="description"
                        on_change={setDescription}
                        message={message}
                        required={true}
                    />
                    <div className="text-red-600 absolute top-full text-center w-full">
                        <p>{message}</p>
                    </div>
                </div>
                <SubmitButton />
            </form>
        </div>
    )
}

export default CreateScreen
