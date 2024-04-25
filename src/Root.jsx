import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"


function Root() {
  return (
    <div className=" mt-[60px]">
      <Navbar />
      <Outlet></Outlet>
    </div>
  )
}

export default Root
