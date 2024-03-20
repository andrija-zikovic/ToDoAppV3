import DropDownMenu from './DropDownMenu'
import MenuButton from '../Buttons/MenuButton'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const HeaderComponent = () => {
    const [dropDownVisibility, setDropDownVisibility] = useState<boolean>(false)

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
        <div className="bg-gray-700 border-b-1 border-gray-700">
            <div className="flex flex-row justify-between items-center text-center px-4 p-3 md:p-6 md:items-end md:flex-row-reverse">
                <h1 className="text-4xl text-orange-200 md:text-6xl">
                    Todo App
                </h1>
                <MenuButton
                    setDropDownVisibility={setDropDownVisibility}
                    dropDownVisibility={dropDownVisibility}
                />
                <div className="hidden md:flex flex-row justify-end items-center h-full">
                    {dropDownPath.map((item) => (
                        <Link
                            to={item.path}
                            className="text-2xl text-orange-200 hover:text-slate-400 pr-3"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            {dropDownVisibility && (
                <DropDownMenu
                    setDropDownVisibility={setDropDownVisibility}
                    dropDownPath={dropDownPath}
                />
            )}
        </div>
    )
}

export default HeaderComponent
