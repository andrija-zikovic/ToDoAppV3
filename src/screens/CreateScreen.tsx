import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useTodo } from '../hooks/useTodo'
import { Form } from '../enums/form'
import { IForm } from '../types/types'
import TodoForm from '../ui/Forms/TodoForm'
import { descriptionInputValidation } from '../validation/descriptionInputValidation'

const CreateScreen = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { createTodo } = useTodo()

    const handleSubmit = ({ event }: IForm) => {
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
        createTodo(description)
    }

    return (
        <div className="w-full inset-0 flex flex-col justify-start items-center gap-2">
            <button
                onClick={() => {
                    navigate('/')
                }}
                className="fixed top-20 left-2 md:top-32"
            >
                Back
            </button>

            <h1 className="text-4xl p-2 mt-28">Create ToDo</h1>
            <TodoForm
                onSubmit={handleSubmit}
                submitType={Form.CREATE}
                errorMessage={errorMessage}
                isSubmitting={isSubmitting}
            />
        </div>
    )
}

export default CreateScreen
