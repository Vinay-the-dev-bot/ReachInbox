import MailSection from "../Components/MailSection";
import MenuBar from "../Components/MenuBar";
import TopBar from "../Components/TopBar";
import { Box } from "@chakra-ui/react";

function HOME() {
  return (
    <>
      <Box className="flex  ">
        <MenuBar />
        <Box className=" flex w-full flex-col">
          <TopBar />
          <MailSection />
        </Box>
      </Box>
    </>
  );
}

export default HOME;
