import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

type ToDoCardProps = {
    index: number
    item: {
        id: string
        description: string
        stage: string
        created_at: number
    }
}

const ToDoCard = ({ index, item }: ToDoCardProps) => {
    const createdAt = dayjs(item.created_at).format('YYYY-MM-DD HH:mm')
    return (
        <div
            id={`${index}`}
            className={`relative w-full p-3 rounded-md text-2xl border-2 border-gray-400 text-center hover:bg-orange-200 hover:border-gray-700 hover:text-gray-700 ${item.stage === 'done' ? ' bg-green-400' : item.stage === 'in_progress' ? 'bg-orange-400' : ''} md:max-w-2xl`}
        >
            <Link
                to={`todo/edit/${item ? item.id : ''}`}
                className="block w-full h-full p-2"
            >
                {item.description}
            </Link>
            <div className="absolute top-1 left-1 text-sm">
                <p>{createdAt}</p>
            </div>
        </div>
    )
}

export default ToDoCard
