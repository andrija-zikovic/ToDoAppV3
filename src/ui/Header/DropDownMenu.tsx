import { Link } from 'react-router-dom'

type DropDownMenuProps = {
    setDropDownVisibility: (visibility: boolean) => void
}

export const DropDownMenu = ({ setDropDownVisibility }: DropDownMenuProps) => {
    return (
        <div className="absolute top-16 z-10 w-full h-auto bg-gray-700 flex flex-col justify-center items-center gap-2 px-2 py-4 border-b-2 border-orange-200 text-3xl">
            <div className=" text-orange-200 w-full h-full flex flex-col justify-center items-center border-b-2 border-orange-200 hover:border-slate-400 hover:text-slate-400 p-3">
                <Link
                    to="/home"
                    className=" w-full h-full flex flex-row justify-center items-center "
                    onClick={() => setDropDownVisibility(false)}
                >
                    Home
                </Link>
            </div>
            <div className="text-orange-200 w-full h-full flex flex-col justify-center items-center border-b-2 border-orange-200 hover:border-slate-400 hover:text-slate-400 p-3">
                <Link
                    to="/todo/create"
                    className=" w-full h-full flex flex-row justify-center items-center"
                    onClick={() => setDropDownVisibility(false)}
                >
                    Create
                </Link>
            </div>
        </div>
    )
}

export default DropDownMenu
