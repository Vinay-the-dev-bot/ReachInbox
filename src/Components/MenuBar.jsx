import { Box } from "@mui/material";
import logoM from "../assets/menubarLogo.png";
import logoDarkMode from "../assets/logoDarkMode.png";
import menubarHOME from "../assets/menubarHOME.png";
import menubarEmail from "../assets/menubarEmail.png";
import menubarEmailAcc from "../assets/menubarEmailAcc.png";
import menubarsendemail from "../assets/menubarsendemail.png";
import menubarMENU from "../assets/menubarMENU.png";
import menubarAllEmail from "../assets/menubarAllEmail.png";
import menubarBarChart from "../assets/menubarBarChart.png";
import { useDispatch, useSelector } from "react-redux";
function MenuBar() {
  const theme = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  return (
    <>
      {/* <Box
        bg={"#101113"}
        className="flex flex-col items-center justify-between "
        h={"100vh"}
        w={"56px"}
      >
        <Image w={"26px"} className="m-8 mt-6 " src={logoM} alt={"logoM"} />
        <Box className="flex items-center gap-4 flex-col">
          <Image w={"26px"} src={menubarHOME} alt={"menubarHOME"} />
          <Image w={"26px"} src={menubarEmail} alt={"menubarEmail"} />
          <Image w={"26px"} src={menubarEmailAcc} alt={"menubarEmailAcc"} />
          <Image w={"26px"} src={menubarsendemail} alt={"menubarsendemail"} />
          <Image w={"26px"} src={menubarMENU} alt={"menubarMENU"} />
          <Image w={"26px"} src={menubarAllEmail} alt={"menubarAllEmail"} />
          <Image w={"26px"} src={menubarBarChart} alt={"menubarBarChart"} />
        </Box>
        <Box className=" flex items-center justify-center  m-3  w-10 h-10  rounded-full bg-green-600">
          VI
        </Box>
      </Box> */}
      <Box
        sx={{
          // backgroundColor: theme ? "#101113" : "
          bgcolor: theme ? "#101113" : "#FAFAFA",
          display: "flex",
          position: "fixed",
          flexDirection: "column",
          borderRight: `1px solid ${theme ? "#343a40" : "#D8D8D8"}`,
          alignItems: "center",
          justifyContent: "space-between",
          height: "100vh",
          width: "56px",
        }}
      >
        <img
          onClick={() => dispatch({ type: "MAILS" })}
          src={theme ? logoM : logoDarkMode}
          alt="logoM"
          width="26px"
          className="m-8 mt-6"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <img src={menubarHOME} alt="menubarHOME" width="26px" height="18px" />
          <img src={menubarEmail} alt="menubarEmail" width="26px" />
          <img src={menubarEmailAcc} alt="menubarEmailAcc" width="26px" />
          <img src={menubarsendemail} alt="menubarsendemail" width="26px" />
          <img src={menubarMENU} alt="menubarMENU" width="26px" />
          <img src={menubarAllEmail} alt="menubarAllEmail" width="26px" />
          <img src={menubarBarChart} alt="menubarBarChart" width="26px" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "3px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "green",
            color: "white",
          }}
        >
          VI
        </Box>
      </Box>
    </>
  );
}

export default MenuBar;
