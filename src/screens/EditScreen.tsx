import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { descriptionInputValidation } from '../validation/validations'
import { TTodo } from '../types/types'
import { localStorageWrapper } from '../storage/storage'
import TodoContext from '../context/todoContext'
import MessageContext from '../context/messageContext'
import TextInput from '../ui/Inputs/TextInput'
import SelectInput from '../ui/Inputs/SelectInput'
import SubmitButton from '../ui/Buttons/SubmitButton'
import PopupWindow from '../ui/PopupWindow/PopupWindow'

const EditScreen = () => {
    const navigate = useNavigate()

    const { localTable, setCurrentTable } = useContext(TodoContext)!
    const { setInfoMessages } = useContext(MessageContext)!
    const { id } = useParams()

    const item = localTable.find((item) => item.id.toString() === id) as TTodo

    const [description, setDescription] = useState(item.description)
    const [stage, setStage] = useState(item.stage)

    const [message, setMessage] = useState('')
    const [deleteMessage, setDeleteMessage] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

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

    const handleDelete = () => {
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
    }

    return (
        <div className="flex flex-col justify-evenly items-center p-2 w-full h-full min-h-96 relative">
            <div className="w-full flex flex-row justify-between items-center">
                <button
                    onClick={() => {
                        navigate(-1)
                    }}
                    className="dark:border-orange-200"
                >
                    Back
                </button>
                <button
                    onClick={() => {
                        setDeleteMessage(true)
                    }}
                    className="bg-red-300 dark:text-gray-700"
                >
                    Delete
                </button>
            </div>
            <h1 className="text-3xl text-center p-3 border-b-2 mt-14 w-full md:mt-32 dark:border-orange-200">
                {description.length > 0 ? description : item.description}
            </h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-evenly items-center h-full gap-8 py-5"
            >
                <div className="flex flex-col justify-evenly items-center gap-8 md:flex-row">
                    <div className="flex flex-col justify-center items-center relative">
                        <TextInput
                            label="Change description"
                            placeholder="Change description..."
                            name="edit"
                            value={description}
                            on_change={setDescription}
                            message={message}
                        />
                        <div className="text-red-600 absolute top-full">
                            <p>{message}</p>
                        </div>
                    </div>
                    <SelectInput
                        label="Change stage"
                        name="stage"
                        value={stage}
                        on_change={setStage}
                    />
                </div>
                <SubmitButton />
            </form>
            {deleteMessage && (
                <PopupWindow
                    children={
                        <div className=" w-80 flex flex-col justify-center items-center p-4 rounded-md gap-3 border-2 border-gray-700 bg-orange-200 dark:text-gray-700">
                            <p className=" font-bold">Delete To do!</p>
                            <p>Are you sure?</p>
                            <div className="flex flex-row justify-evenly items-center gap-2 w-full">
                                <button
                                    onClick={handleDelete}
                                    className=" bg-white hover:bg-red-300 "
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() => {
                                        setDeleteMessage(false)
                                    }}
                                    className="bg-white"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    }
                />
            )}
        </div>
    )
}

export default EditScreen
