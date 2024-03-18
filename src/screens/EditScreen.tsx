import React, { useContext, useState } from 'react'
import Context from '../context/todoContext'
import TextInput from '../../shared/ui/Inputs/Input'
import SelectInput from '../../shared/ui/Selects/Select'
import SubmitButton from '../../shared/ui/Buttons/SubmitButton'
import { useParams, useNavigate } from 'react-router'
import { descriptionInputValidation } from '../../scripts/validation/validations'
import { TTodo } from '../../shared/types/types'
import { localStorageWrapper } from '../storage/storage'

const EditScreen = () => {
    const navigate = useNavigate()
    const { localTable, setCurrentTable, setInfoMessages } =
        useContext(Context)!
    const { id } = useParams()
    const item = localTable.find((item) => item.id.toString() === id) as TTodo

    const [description, setDescription] = useState(item.description)
    const [stage, setStage] = useState(item.stage)
    const [message, setMessage] = useState('')
    const [deleteMessage, setDeleteMessage] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validation = descriptionInputValidation(description)

        if (validation === true) {
            item.description = description
        } else {
            console.log(validation)
            setMessage(validation)
            return
        }

        item.stage = stage

        localStorageWrapper.setItem('toDos', localTable)

        setCurrentTable(localTable)

        navigate('/')
    }

    const handleDelete = () => {
        if (item.stage === 'done') {
            localTable.splice(localTable.indexOf(item), 1)
            localStorageWrapper.setItem('toDos', localTable)
            setCurrentTable(localTable)
            setInfoMessages([{ message: 'To do deleted', type: 'success' }])
            navigate('/')
        } else {
            setInfoMessages([
                {
                    message: 'You can only delete To do that is "Done"!',
                    type: 'error',
                },
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
                >
                    Back
                </button>
                <button
                    onClick={() => {
                        setDeleteMessage(true)
                    }}
                    className="bg-red-300"
                >
                    Delete
                </button>
            </div>
            <h1 className="text-3xl text-center p-3 border-b-2 mt-14 w-full md:mt-32">
                {description.length > 0 ? description : item.description}
            </h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-evenly items-center h-full gap-8 py-5"
            >
                <div className="flex flex-col justify-evenly items-center gap-8 md:flex-row">
                    <div className="flex flex-col justify-center items-center relative">
                        <TextInput
                            LABEL="Change description"
                            PLACEHOLDER="Change description..."
                            NAME="edit"
                            ON_CHANGE={setDescription}
                            MESSAGE={message}
                            REQUIRED={false}
                        />
                        <div className="text-red-600 absolute top-full">
                            <p>{message}</p>
                        </div>
                    </div>
                    <SelectInput
                        LABEL="Change stage"
                        NAME="stage"
                        VALUE={stage}
                        ON_CHANGE={setStage}
                        MESSAGE=""
                    />
                </div>
                <SubmitButton />
            </form>
            {deleteMessage && (
                <div className="absolute w-full top-1/2 flex flex-col justify-center items-center md:w-96">
                    <div className="w-3/4 flex flex-col justify-center items-center p-4 rounded-md gap-3 border-2 border-gray-700 bg-orange-200">
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
                </div>
            )}
        </div>
    )
}

export default EditScreen
