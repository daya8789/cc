import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export const Contact = () => {
    return (
        <div className="bg-[#EFF8F6] pb-4">
            <h1 className="text-center text-4xl font-semibold p-8">
                Placement <span className="text-[#FF0000]">Drives</span>
            </h1>
            <div className="bg-[#fff] w-1/2 m-auto p-4 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-semibold p-4">
                    Please Send Your Message!
                </h2>
                <Box>
                    <div className="m-2">
                        <TextField
                            id="outlined-search"
                            label="Enter your name"
                            type="search"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2">
                        <TextField
                            id="outlined-search"
                            label="Enter your email id"
                            type="search"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2">
                        <TextField
                            id="outlined-search"
                            label="Enter your mobile number"
                            type="number"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2">
                        <TextField
                            id="outlined-search"
                            label="Write your message here"
                            type="text"
                            multiline
                            maxRows={4}
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2 text-center">
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Send message
                        </Button>
                    </div>
                </Box>
            </div>
        </div>
    );
};
