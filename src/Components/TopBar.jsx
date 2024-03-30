import { Typography, Box } from "@mui/material";

function TopBar() {
  return (
    <>
      {/* <Box
        sx={{
          backgoundColor: "#343A40",
          display: "flex",
          color: "white",
          padding: "10px 20px",
          justifyContent: "space-between",
        }}
        bg={"#343A40"}
        className="text-white flex items-center px-10 justify-between w-full h-16 "
      >
        <Typography>OneBox</Typography>
        <Box>
          <Box></Box>
          <Box>
            <Typography>Tim's WorkSpace </Typography> 
          </Box>
        </Box>
      </Box> */}
      <Box
        sx={{
          backgroundColor: "#343A40",
          display: "flex",
          color: "white",
          padding: "10px 20px",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
        }}
      >
        <Typography>OneBox</Typography>
        <Box>
          <Box></Box>
          <Box>
            <Typography>Tim's WorkSpace</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TopBar;
