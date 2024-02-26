import { NavLink } from "react-router-dom"

export const AdminNavbar = () =>{
    return(<div className="">
        <h1 className="text-center text-2xl">Admin Navbar</h1>
        <div >
            <NavLink to="/add-company" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Add Company</NavLink>
            <NavLink to="/delete" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Remove Company</NavLink>
            <NavLink to="/search" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Search Company</NavLink>
            <NavLink to="/company-list" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Companies List</NavLink>
            <NavLink to="/search" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Assign test</NavLink>
            <NavLink to="/search" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Results</NavLink>
        </div>
    </div>)
}