type TTodo = {
    id: string
    description: string
    stage: string
    created_at: number
}

type TInfoMessage = {
    message: string
    type: 'default' | 'error' | 'success'
}

type TCreateFormData = {
    description: string
}

type TUpdateFormData = {
    id: string
    description?: string
    stage?: string
}

type IForm = {
    event: React.FormEvent<HTMLFormElement>
}

export type { TTodo, TInfoMessage, TCreateFormData, TUpdateFormData, IForm }
