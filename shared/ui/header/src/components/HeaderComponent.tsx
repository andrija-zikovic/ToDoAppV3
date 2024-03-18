import DropDownMenu from './DropDownMenu'
import MenuButton from '../../../Menu/src/components/MenuButton'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const HeaderComponent = () => {
    const [dropDownVisibility, setDropDownVisibility] = useState<boolean>(false)

    return (
        <div className="flex flex-col justify-center items-center w-full bg-gray-700 border-b-1 border-gray-700 relative">
            <div className="flex flex-row justify-center items-center max-w-full w-full text-center px-4 p-3 relative md:p-6">
                <MenuButton
                    setDropDownVisibility={setDropDownVisibility}
                    dropDownVisibility={dropDownVisibility}
                />
                <h1 className="text-4xl text-orange-200 md:text-7xl">
                    Todo App
                </h1>
                {dropDownVisibility ? (
                    <DropDownMenu
                        setDropDownVisibility={setDropDownVisibility}
                    />
                ) : null}
            </div>
            <div className="hidden md:flex flex-row justify-start items-center w-full absolute bottom-2 left-2">
                <div>
                    <Link
                        to="/home"
                        className="text-2xl text-orange-200 hover:text-slate-400 p-3"
                    >
                        Home
                    </Link>
                </div>
                <div>
                    <Link
                        to="/todo/create"
                        className="text-2xl text-orange-200 hover:text-slate-400 p-3"
                    >
                        Create
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent
