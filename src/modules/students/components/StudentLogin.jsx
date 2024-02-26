import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

export const StudentLogin = () => {
    const emailRef = useRef();
    const pwdRef = useRef();

    const studentLogin = () =>{
        console.log("Admin is signing in ...");
        const adminInfo = {
            email: emailRef.current.value,
            password: pwdRef.current.value,
        }
        console.log("Admin Info is : ", adminInfo);
    }
    return (
        <div className="bg-[#9FE2BF] p-12">
            <div className="md:w-1/2 m-auto bg-[#fff] p-4 rounded-lg shadow-lg">
                <h1 className="text-center text-xl sm:text-2xl">login to get access as Student</h1>
                <Box className="m-4">
                    <div className="m-2">
                        <TextField
                            id="outlined-search"
                            inputRef={emailRef}
                            label="Enter User name Or Email id"
                            type="search"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2">
                        <TextField
                            id="outlined-search"
                            inputRef={pwdRef}
                            label="Password"
                            type="search"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="text-center m-2">
                        <Button
                            variant="contained"
                            className="mx-2"
                            onClick={studentLogin}
                        >
                            Login
                        </Button>
                    </div>
                </Box>

                <p className="text-center">
                    Are you new user?{" "}
                    <NavLink to="/student-register" className="text-[#1177DF]">Create an Account</NavLink>
                </p>
            </div>
        </div>
    );
};
