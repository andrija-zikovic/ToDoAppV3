import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { descriptionInputValidation } from '../validation/descriptionInputValidation'
import TodoForm from '../ui/Forms/TodoForm'
import { IForm } from '../types/types'
import { Form } from '../enums/form'
import { useTodo } from '../hooks/useTodo'

const EditScreen = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { deleteTodo, updateTodo } = useTodo()

    const [searchParams] = useSearchParams()

    const initData = {
        id: useParams().id!,
        description: searchParams.get('description')!,
        stage: searchParams.get('stage')!,
        created_at: Number(searchParams.get('created_at')!),
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

        updateTodo({
            id: initData!.id,
            description: description,
            stage: stage,
        })
        setIsSubmitting(false)
    }

    const handleDelete = () => {
        deleteTodo(initData!.id)
    }

    return (
        <div className="flex flex-col justify-evenly items-center p-2 w-full h-full min-h-96 relative">
            <button
                onClick={() => {
                    navigate(-1)
                }}
                className="dark:border-orange-200 fixed top-20 left-2 md:top-32"
            >
                Back
            </button>
            <h1 className="text-4xl p-2 mt-28">Edit ToDo</h1>
            <TodoForm
                onSubmit={handleSubmitUpdate}
                onDelete={handleDelete}
                isSubmitting={isSubmitting}
                initData={initData}
                submitType={Form.UPDATE}
                errorMessage={errorMessage}
            />
        </div>
    )
}

export default EditScreen
