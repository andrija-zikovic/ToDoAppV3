import { Menu } from '../../../icons/src/index'

type MenuButtonProps = {
    setDropDownVisibility: (visibility: boolean) => void
    dropDownVisibility: boolean
}

const MenuButton = ({
    setDropDownVisibility,
    dropDownVisibility,
}: MenuButtonProps) => {
    const toogleVisibility = () => {
        setDropDownVisibility(!dropDownVisibility)
    }

    return (
        <button
            id="menu"
            className="absolute right-4 top-4 w-8 h-8 bg-orange-200 p-1 flex justify-center items-center rounded-md hover:border-l-orange-50 hover:border transition-all duration-300 ease-in-out md:hidden"
            onClick={toogleVisibility}
        >
            <Menu />
        </button>
    )
}

export default MenuButton
