import { useState, useContext } from 'react'
import { useTodo } from '../../hooks/useTodo'
import MessageContext from '../../context/messageContext'
import { TTodo } from '../../types/types'
import { descriptionInputValidation } from '../../validation/descriptionInputValidation'
import { TForm, Form } from '../../enums/form'
import TextInput from '../Inputs/TextInput'
import SubmitButton from '../Buttons/SubmitButton'
import SelectInput from '../Inputs/SelectInput'
import ConfirmationWindow from '../ConfirmationWindow/ConfirmationWindow'
import Overlay from '../Overlay/Overlay'

type IProps = {
    initData?: TTodo
    onSubmit: TForm
    onDelete?: boolean
}

type IForm = {
    event: React.FormEvent<HTMLFormElement>
}

const TodoForm = ({ initData, onSubmit, onDelete }: IProps) => {
    const { setInfoMessages } = useContext(MessageContext)!
    const { createTodo, updateTodo, deleteTodo } = useTodo()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    const handleSubmitCreate = ({ event }: IForm) => {
        event.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(event.currentTarget)

        const description = formData.get('description') as string | ''

        const descCheck = descriptionInputValidation(description)
        if (descCheck) {
            setErrorMessage(descCheck)
            setIsSubmitting(false)
            return
        }

        const create = createTodo(description)
        if (create) {
            setInfoMessages([{ message: 'Error creating Todo', type: 'error' }])
            return
        }

        setInfoMessages([{ message: 'Todo created', type: 'success' }])
        setIsSubmitting(false)
    }

    const handleSubmitUpdate = ({ event }: IForm) => {
        event.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(event.currentTarget)

        const description = formData.get('description') as string | ''
        const stage = formData.get('stage') as string | ''

        const descCheck = descriptionInputValidation(description)
        if (descCheck) {
            setErrorMessage(descCheck)
            setIsSubmitting(false)
            return
        }

        const update = updateTodo({
            id: initData!.id,
            description: description,
            stage: stage,
        })

        if (update) {
            setInfoMessages([{ message: 'Error updating Todo', type: 'error' }])
            return
        }

        setInfoMessages([{ message: 'Todo updated', type: 'success' }])
        setIsSubmitting(false)
    }

    const handleSubmit = ({ event }: IForm) => {
        if (onSubmit === Form.CREATE) {
            handleSubmitCreate({ event })
        } else {
            handleSubmitUpdate({ event })
        }
    }

    const handleDelete = () => {
        const del = deleteTodo(initData!.id)
        if (del) {
            setInfoMessages([{ message: 'Error deleting Todo', type: 'error' }])
            return
        }

        setInfoMessages([{ message: 'Todo deleted', type: 'success' }])
    }

    const handleCancel = () => {
        setIsDeleting(false)
    }

    return (
        <form
            onSubmit={(event) => handleSubmit({ event })}
            className="w-full h-full flex flex-col justify-center items-center p-2 gap-8"
        >
            <div className="relative flex flex-row justify-center items-center gap-6">
                <TextInput
                    label="Description"
                    placeholder="Type here..."
                    name="description"
                    value={initData?.description}
                    message={errorMessage}
                    required={true}
                />
                <div className="text-red-600 absolute top-full text-center w-full">
                    <p>{errorMessage}</p>
                </div>
                {onSubmit === 'Update' && (
                    <SelectInput
                        label="Stage Change"
                        name="stage"
                        value={initData ? initData.stage : 'default'}
                    />
                )}
            </div>
            <SubmitButton isLoading={isSubmitting} />
            {onDelete && (
                <button
                    onClick={() => setIsDeleting(true)}
                    className="w-auto h-12 p-2 border-2 border-red-600 rounded-md text-red-600 bg-orange-200 transition-all duration-300 ease-in-out"
                >
                    Delete
                </button>
            )}
            {isDeleting && (
                <Overlay>
                    <ConfirmationWindow
                        onConfirm={handleDelete}
                        onCancel={handleCancel}
                        message="Are you sure you want to delete this ToDo?"
                    />
                </Overlay>
            )}
        </form>
    )
}

export default TodoForm
