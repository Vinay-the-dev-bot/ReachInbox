import { Box } from "@mui/material";
import MailSection from "../Components/MailSection";
import MenuBar from "../Components/MenuBar";
import TopBar from "../Components/TopBar";

function HOME() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <MenuBar />
        <Box
          sx={{
            display: "flex",
            position: "relative",
            left: "56px",
            flexDirection: "column",
            width: "95.5%",
          }}
        >
          <TopBar />
          <MailSection />
        </Box>
      </Box>
    </>
  );
}

export default HOME;
