import { StudentAccess } from "./StudentAccess"

export const StudentProfile = () =>{
    return(<div className="bg-[#EFF8F6]">
        <div className="bg-[#fff] w-4/5 m-auto">
            <h1 className="bg-[#0000FF] text-center text-white p-4 text-xl">Student Dashboard</h1>
            <div className="sm:flex">
                <div className=" bg-[#008080] text-white w-1/3 p-2"><StudentAccess/></div>
                <div className="w-2/3 p-2">Student Information</div>
            </div>
        </div>
    </div>)
}