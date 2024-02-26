import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef } from "react";

export const AddCompany = () => {

    const Company = useRef();
    const Profile = useRef();
    const Skills = useRef();
    const Package = useRef();
    const Eligibility = useRef();
    const Location = useRef();
    const Roles = useRef();
    const addCompany = ()=> {
        console.log("Company is adding...");
        const CompanyValue = Company.current.value;
        const ProfileValue = Profile.current.value;
        const SkillsValue = Skills.current.value;
        const PackageValue = Package.current.value;
        const EligibilityValue = Eligibility.current.value;
        const LocationValue = Location.current.value;
        const RolesValue = Roles.current.value;

        const CompanyData = {
            Company:CompanyValue,
            Profile:ProfileValue,
            Skills:SkillsValue,
            Package:PackageValue,
            Eligibility:EligibilityValue,
            Location:LocationValue,
            Roles:RolesValue
        }
        console.log("Company Data are ...", CompanyData);

    }
    return (
        <>
            <div className="m-8 p-4 bg-[#F6DDCC] rounded">
                <h1 className="text-center text-xl text-[#34495E] font-semibold">
                    Add Company Information
                </h1>
                <div>
                    <Box flexDirection="column" display="flex">
                        <div className="m-2">
                            <TextField
                                id=""
                                inputRef={Company}
                                label="Name of the Company"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id=""
                                inputRef={Profile}
                                label="Profile Offered"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id="outlined-search"
                                inputRef={Skills}
                                label="Skill Required"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id="outlined-search"
                                inputRef={Package}
                                label="Package"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id="outlined-search"
                                inputRef={Eligibility}
                                label="Eligibility"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id="outlined-search"
                                inputRef={Location}
                                label="Location of Company"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id="outlined-search"
                                inputRef={Roles}
                                label="Roles & Responsibility"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        
                            <Button
                                variant="contained"
                                color="success"
                                onClick={addCompany}
                            >
                                Add Company
                            </Button>
                        
                    </Box>
                </div>
            </div>
        </>
    );
};
