import { Link } from 'react-router-dom'

type DropDownMenuProps = {
    setDropDownVisibility: (visibility: boolean) => void
}

export const DropDownMenu = ({ setDropDownVisibility }: DropDownMenuProps) => {
    const dropDownPath = [
        {
            path: '/home',
            name: 'Home',
        },
        {
            path: '/todo/create',
            name: 'Create',
        },
    ]

    return (
        <div className="absolute top-16 z-10 w-full h-auto bg-gray-700 flex flex-col justify-center items-center gap-2 px-2 py-4 border-b-2 border-orange-200 text-3xl">
            {dropDownPath.map((item) => (
                <Link
                    to={item.path}
                    className=" w-full h-full text-center text-orange-200 p-2 border-b-2 border-orange-200 hover:text-gray-400 hover:border-gray-400 transition-all duration-200 ease-in-out"
                    onClick={() => setDropDownVisibility(false)}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    )
}

export default DropDownMenu
