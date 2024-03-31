import noMailIllustration from "../assets/noMailIllustration.png";
import { Typography } from "@mui/material";
function NoMail() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          paddingTop: "100px ",
          gap: "40px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src={noMailIllustration}
          sx={{
            width: "280.02px",
            // height: "229.4px",
          }}
          alt={"noMailIllustration"}
        />
        <Typography
          sx={{
            width: "533px",
            height: "37px",
            background: "#FFFFFF",
            gap: "0px",
            opacity: "0px",
            fontFamily: "DM Sans",
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
