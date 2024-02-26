import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";

export const Registration = (props) => {
    const Name = useRef();
    const Father_name = useRef();
    const Email_Id = useRef();
    const Mobile_No = useRef();
    const Branch = useRef();
    const Year = useRef();
    const Address = useRef();
    const Password = useRef();

    // const [value, setValue] = useState();

    const register = () => {
        console.log("Registration is being...");
        const NameValue = Name.current.value;
        const Father_nameValue = Father_name.current.value;
        const Email_IdValue = Email_Id.current.value;
        const Mobile_NoValue = Mobile_No.current.value;
        const BranchValue = Branch.current.value;
        const YearValue = Year.current.value;
        const AddressValue = Address.current.value;
        const PasswordValue = Password.current.value;

        // const DOB = value ? dayjs(value).format() : "";

        const studentData = {
            Name: NameValue,
            Father_name: Father_nameValue,
            // DateOfBirth: DOB,
            Email: Email_IdValue,
            Mobile: Mobile_NoValue,
            Branch: BranchValue,
            Year: YearValue,
            Address: AddressValue,
            Password: PasswordValue,
        };
        // props.fn(studentData);
        console.log("Student Data are ...", studentData);
    };

    return (
        <div className="bg-[#9FE2BF] p-4">
            <div className="w-2/3 m-auto bg-[#fff] p-4 rounded-lg">
                <h1 className="text-center text-2xl font-semibold p-4">
                    Student Registration Form
                </h1>
                <Box flexDirection="column" display="flex">
                    <div className="m-1">
                        <TextField
                            id="outlined-search"
                            inputRef={Name}
                            label="Name"
                            type="text"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Father's Name"
                            inputRef={Father_name}
                            type="text"
                            className="w-[100%]"
                        />
                    </div>

                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Date of Birth"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </LocalizationProvider> */}
                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Email Id"
                            inputRef={Email_Id}
                            type="search"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Mobile No."
                            inputRef={Mobile_No}
                            type="number"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Branch"
                            inputRef={Branch}
                            type="text"
                            className="w-[100%]"
                        />
                    </div>

                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Year"
                            inputRef={Year}
                            type="number"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Address"
                            inputRef={Address}
                            multiline
                            maxRows={4}
                            type="text"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Password"
                            inputRef={Password}
                            type="password"
                            className="w-[100%]"
                        />
                    </div>

                    <Button
                        onClick={register}
                        variant="contained"
                        color="success"
                    >
                        {" "}
                        Register{" "}
                    </Button>
                    <p className="text-center m-2 text-lg">
                        If you have already registered then GoTo{" "}
                        <NavLink to="/student-login" className="text-[#1177DF]">
                            {" "}
                            Login{" "}
                        </NavLink>{" "}
                    </p>
                </Box>
            </div>
        </div>
    );
};
