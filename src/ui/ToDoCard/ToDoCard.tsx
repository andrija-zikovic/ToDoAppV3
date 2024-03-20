import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

type ToDoCardProps = {
    item: {
        id: string
        description: string
        stage: string
        created_at: number
    }
}

const ToDoCard = ({ item }: ToDoCardProps) => {
    const createdAtTime = dayjs(item.created_at).format('HH:mm')
    const createdAtDate = dayjs(item.created_at).format('DD. MM. YYYY.')

    const bg_color =
        item.stage === 'done'
            ? 'bg-green-400'
            : item.stage === 'in_progress'
              ? 'bg-orange-400'
              : 'bg-orange-200'

    return (
        <div
            className={`w-full relative p-3 rounded-md text-2xl border-2 border-gray-400 text-center ${bg_color} hover:bg-orange-200 hover:border-gray-700 hover:text-gray-700 md:max-w-2xl `}
        >
            <Link
                to={`todo/edit/${item.id}?description=${item.description}&stage=${item.stage}&created_at=${item.created_at}`}
                className="block w-full h-full p-2"
            >
                {item.description}
                <div className="absolute top-1 left-1 text-sm w-full flex flex-row justify-between px-2">
                    <p>{createdAtTime}</p>
                    <p>{createdAtDate}</p>
                </div>
            </Link>
        </div>
    )
}

export default ToDoCard
