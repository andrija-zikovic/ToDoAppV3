import DropDownMenu from './DropDownMenu'
import MenuButton from '../Menu/MenuButton'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const HeaderComponent = () => {
    const [dropDownVisibility, setDropDownVisibility] = useState<boolean>(false)

    return (
        <div className="w-full bg-gray-700 border-b-1 border-gray-700">
            <div className="flex flex-row justify-between items-center max-w-full w-full text-center px-4 p-3 md:p-6 md:items-end md:flex-row-reverse">
                <h1 className="text-4xl text-orange-200 md:text-7xl">
                    Todo App
                </h1>
                <MenuButton
                    setDropDownVisibility={setDropDownVisibility}
                    dropDownVisibility={dropDownVisibility}
                />
                <div className="hidden md:flex flex-row justify-end items-center h-full">
                    <Link
                        to="/home"
                        className="text-2xl text-orange-200 hover:text-slate-400"
                    >
                        Home
                    </Link>
                    <Link
                        to="/todo/create"
                        className="text-2xl text-orange-200 hover:text-slate-400 px-3"
                    >
                        Create
                    </Link>
                </div>
            </div>
            {dropDownVisibility && (
                <DropDownMenu setDropDownVisibility={setDropDownVisibility} />
            )}
        </div>
    )
}

export default HeaderComponent
