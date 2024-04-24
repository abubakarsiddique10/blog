import { useContext, useState } from "react"
import MenuItem from "./MenuItem";
import openMenu from "../../assets/images/svg/open-menu.svg";
import closeMenu from "../../assets/images/svg/close-menu.svg";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '#' },
        { name: 'Portfolio', path: '#' },
        { name: 'Contact Us', path: '#' }
    ];

    return (
        <nav id="header" className="static w-full top-0 bg-slate-200">
            <div className="container">
                <div className="lg:flex items-center justify-between py-3 z-10 space-y-2 lg:space-y-0">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {/* <img className="w-7 h-7 rounded-full ring-2 ring-gray-700"
                                src="./assets/images/banner/abu-bakaar.png" alt="abu bakar">  */}

                            <a className="text-3xl font-semibold" href="index.html">Medium</a>
                        </div>
                        <button onClick={() => setOpen(!open)} className=" p-0 border-0 lg:hidden" type="button">
                            {open ? <img src={closeMenu} alt="" /> : <img src={openMenu} alt="" />}
                        </button>
                    </div>

                    <div className={` ${open ? "block" : "hidden lg:block"}`}>
                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
                            {
                                navItems.map((navItem, index) => <MenuItem key={index} navItem={navItem} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar