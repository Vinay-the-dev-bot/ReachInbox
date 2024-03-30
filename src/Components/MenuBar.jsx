import { Box, Image } from "@chakra-ui/react";
import logoM from "../assets/menubarLogo.png";
import menubarHOME from "../assets/menubarHOME.png";
import menubarEmail from "../assets/menubarEmail.png";
import menubarEmailAcc from "../assets/menubarEmailAcc.png";
import menubarsendemail from "../assets/menubarsendemail.png";
import menubarMENU from "../assets/menubarMENU.png";
import menubarAllEmail from "../assets/menubarAllEmail.png";
import menubarBarChart from "../assets/menubarBarChart.png";
function MenuBar() {
  return (
    <>
      <Box
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
      </Box>
    </>
  );
}

export default MenuBar;
