import { NavLink } from "react-router-dom"

export const StudentAccess = () =>{
    return(<>
        <div >
            <NavLink to="" className="block p-2 text-lg hover:text-white hover:bg-[#808000]">Profile</NavLink>
            <NavLink to="" className="block p-2 text-lg hover:text-white hover:bg-[#808000]">Companies</NavLink>
            <NavLink to="" className="block p-2 text-lg hover:text-white hover:bg-[#808000]">Prepare</NavLink>
            <NavLink to="" className="block p-2 text-lg hover:text-white hover:bg-[#808000]">Test Yourself</NavLink>
            <NavLink to="" className="block p-2 text-lg hover:text-white hover:bg-[#808000]">Performance</NavLink>
            <NavLink to="" className="block p-2 text-lg hover:text-white hover:bg-[#808000]">Result</NavLink>
        </div>
    </>)
}