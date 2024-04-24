import { NavLink } from "react-router-dom"

const MenuItem = ({ navItem }) => {
    const { name, path } = navItem;
    return (
        <NavLink to={path} className="capitalize font-medium py-2 px-4 text-base">{name}</NavLink>
    )
}
export default MenuItem
