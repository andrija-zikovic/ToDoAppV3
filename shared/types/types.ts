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

export type { TTodo, TInfoMessage }
