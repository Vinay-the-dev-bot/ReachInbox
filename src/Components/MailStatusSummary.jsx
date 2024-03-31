import { Box, Typography } from "@mui/material";
import mail from "../assets/email.png";
function MailStatusSummary({ step, index }) {
  return (
    <>
      <Box
        className="flex gap-4 items-center "
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Box
          className="flex items-center justify-center rounded-full w-8 h-8  "
          sx={{ bgcolor: "red" }}
        >
          <img src={mail} alt="mail" />
        </Box>

        <Box>
          <Typography>Step {index + 1} : Email</Typography>
          <Box className="flex items-center">
            <Box>{step.status}</Box>
            <Typography>{step.date}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MailStatusSummary;
