export const Form = {
    CREATE: 'Create',
    UPDATE: 'Update',
} as const

export type TForm = (typeof Form)[keyof typeof Form]
