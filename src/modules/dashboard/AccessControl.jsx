import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const AccessControl = () => {
    
    return (
        <div className="bg-[#EFF8F6] p-12">
            <div className="bg-[#084399] w-2/3 m-auto rounded-lg shadow-xl">
                <h1 className="text-center text-white p-8 text-5xl font-semibold">
                    Who Are You ?
                </h1>
                <div className="text-center w-1/2 m-auto pb-8">
                    <Stack direction="row" spacing={2}>
                        <NavLink to="/admin" className="w-full">
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                endIcon={<AdminPanelSettingsIcon />}
                            >
                                Admin
                            </Button>
                        </NavLink>
                        <NavLink to="" className="w-full">
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                endIcon={<AdminPanelSettingsIcon />}
                            >
                                Faculty
                            </Button>
                        </NavLink>
                        <NavLink to="/student">
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                startIcon={<AccountCircleIcon />}
                            >
                                Student
                            </Button>
                        </NavLink>
                    </Stack>
                </div>
            </div>
        </div>
    );
};
