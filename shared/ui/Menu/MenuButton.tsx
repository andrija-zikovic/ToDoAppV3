import { Menu } from '../Icons/index'

type MenuButtonProps = {
    setDropDownVisibility: (visibility: boolean) => void
    dropDownVisibility: boolean
}

const MenuButton = ({
    setDropDownVisibility,
    dropDownVisibility,
}: MenuButtonProps) => {
    const toggleVisibility = () => {
        setDropDownVisibility(!dropDownVisibility)
    }

    return (
        <button
            id="menu"
            className="w-8 h-8 bg-orange-200 p-1 flex justify-center items-center rounded-md hover:border-l-orange-50 hover:border transition-all duration-300 ease-in-out md:hidden"
            onClick={toggleVisibility}
        >
            <Menu />
        </button>
    )
}

export default MenuButton
