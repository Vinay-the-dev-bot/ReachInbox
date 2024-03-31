import { Box, Typography } from "@mui/material";
import MailStatusSummary from "./MailStatusSummary";

function MailSummary() {
  const steps = [
    { status: "sent", date: "3rd,Feb" },
    { status: "opened", date: "5th,Feb" },
    { status: "opened", date: "5th,Feb" },
    { status: "sent", date: "7th,Feb" },
    { status: "opened", date: "8th,Feb" },
    { status: "opened", date: "9th,Feb" },
    { status: "opened", date: "11th,Feb" },
    { status: "opened", date: "12th,Feb" },
  ];
  return (
    <>
      <Box className="flex flex-col">
        <Box>
          <Box>Lead Details</Box>
          <Box>
            <Typography>Name</Typography>
            <Typography>Orlando</Typography>
          </Box>
          <Box>
            <Typography>Contact No</Typography>
            <Typography>+54-9062827869</Typography>
          </Box>
          <Box>
            <Typography>Email ID</Typography>
            <Typography>Orlando@gmail.com</Typography>
          </Box>
          <Box>
            <Typography>Linked In</Typography>
            <Typography>linkedin.com/in/timvadde/</Typography>
          </Box>
          <Box>
            <Typography>Company Name</Typography>
            <Typography>Reachinbox</Typography>
          </Box>
        </Box>
        <Box>
          <Box>Activities</Box>
          <Typography>Campaign Name</Typography>
          <Typography>8 Days | 9 Days in Sequence</Typography>
          {steps.map((step, index) => (
            <MailStatusSummary step={step} index={index} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default MailSummary;
