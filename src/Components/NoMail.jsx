import { useSelector } from "react-redux";
import noMailIllustration from "../assets/noMailIllustration.png";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
function NoMail() {
  const theme = useSelector((state) => state.darkMode);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          paddingTop: "100px ",
          height: "100vh",
          gap: "40px",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: theme ? "#000000" : "#FFFFFF",
        }}
      >
        <img
          src={noMailIllustration}
          sx={{
            width: "280.02px",
          }}
          alt={"noMailIllustration"}
        />
        <Typography
          sx={{
            width: "533px",
            height: "37px",
            gap: "0px",
            color: theme ? "white" : "black",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "36.53px",
            textAlign: "center",
          }}
        >
          It’s the beginning of a legendary sales pipeline
        </Typography>
        <Typography
          sx={{
            width: "289px",
            textAlign: "center",
            color: theme ? "white" : "black",
            height: "54px",
          }}
        >
          When you have inbound E-mails you’ll see them here
        </Typography>
      </Box>
    </>
  );
}

export default NoMail;
