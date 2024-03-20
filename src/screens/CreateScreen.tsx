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

    const onSubmit = ({ event }: IForm) => {
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
        console.log('description', description)
        createTodo(description)
    }

    return (
        <div className="w-full min-h-96 flex flex-col justify-start items-center gap-2">
            <button
                onClick={() => {
                    navigate('/')
                }}
                className="dark:border-orange-200 fixed top-20 left-2 md:top-32"
            >
                Back
            </button>

            <h1 className="text-4xl p-2 mt-28">Create ToDo</h1>
            <TodoForm
                onSubmit={onSubmit}
                submitType={Form.CREATE}
                errorMessage={errorMessage}
                isSubmitting={isSubmitting}
            />
        </div>
    )
}

export default CreateScreen
