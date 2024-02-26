import {Routes, Route} from "react-router-dom"; 
import { Dashboard } from "../dashboard/Dashboard.jsx"
import { About } from "../about/About.jsx";
import { Internship } from "../../modules/drives/internship/Internship";
import { Drive } from "../drives/components/Drive.jsx"
import { Login } from "../login/Login.jsx";
import { SignUp } from "../signUp/SignUp.jsx";
import { Main } from "./Main.jsx";
import { Contact } from "../contact/Contact.jsx";
// import { AccessControl } from "../dashboard/AccessControl.jsx";
// import { AdminPanel } from "../admin/components/AdminPanel.jsx";
// import { StudentProfile } from "../students/components/StudentProfile.jsx";
import { AccessControl } from "../dashboard/AccessControl.jsx";
import { StudentProfile } from "../students/components/StudentProfile.jsx";
import { Registration } from "../students/components/Registration.jsx";
import { CompanyList } from "../company/CompanyList.jsx";
import { AddCompany } from "../company/AddCompany.jsx";
import { StudentLogin } from "../students/components/StudentLogin.jsx";

export const Home=()=>{
    return(<>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/internship" element={<Internship/>}/>
            <Route path="/drive" element={<Drive/>}/>
            <Route path="/access-control" element={<AccessControl/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/admin" element={<Login/>}/>
            <Route path="/student" element={<Registration/>}/>
            <Route path="/student-register" element={<Registration/>}/>
            <Route path="/student-login" element={<StudentLogin/>}/>
            <Route path="/add-company" element={<AddCompany/>}/>
            <Route path="/company-list" element={<CompanyList/>}/>
        </Routes>
    </>)
}