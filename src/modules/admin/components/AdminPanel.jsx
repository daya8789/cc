import { AdminNavbar } from "./AdminNavbar"
import { AdminWork } from "./AdminWork"

export const AdminPanel = () =>{
    return(<div className="bg-[#EFF8F6] p-4">
    <div className="bg-[#DEECE9] p-4 rounded-lg">
        <h1 className="p-4 text-center text-3xl font-semibold">Admin Panel</h1>
        <div className="flex h-screen">
            <div className="w-1/4 p-4 bg-[#000] text-white">
                <AdminNavbar/>
            </div>
            <div className="w-3/4 p-4 bg-[#fff]">
                <AdminWork/>
            </div>
        </div>
    </div>

    </div>)
}