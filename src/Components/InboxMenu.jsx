import { Box, Input, Typography, Button } from "@mui/material";
import MailInboxCard from "./MailInboxCard";
import ReplayIcon from "@mui/icons-material/Replay";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
function InboxMenu() {
  const theme = useSelector((state) => state.darkMode);
  var mails = [
    {
      fromEmail: "Beata@gmail.com",
      status: "Interested",
      subject: "I've tried a lot and .",
      sentAt: "Mar 7",
      col: "#57E0A6",
      secCol: "#2D3833",
    },
    {
      fromEmail: "Sanya@gmail.com",
      status: "Closed",
      subject: "I've tried a lot and .",
      sentAt: "Mar 7",
      col: "#626fe6",
      secCol: "#323440",
    },
    {
      fromEmail: "William@gmail.com",
      subject: "Payment not going through",
      status: "Interested",
      sentAt: "Mar 7",
      col: "#57E0A6",
      secCol: "#2D3833",
    },
    {
      fromEmail: "johnson@gmail.com",
      status: "Meeting Booked",
      subject: "Could you tell me more about it",
      sentAt: "Mar 7",
      col: "#9c62e6",
      secCol: "#352f3c",
    },
    {
      fromEmail: "Sanya@gmail.com",
      status: "Meeting Completed",
      subject: "Hi, I am Interested",
      sentAt: "18:30",
      col: "#E6D162",
      secCol: "#444234",
    },
  ];
  return (
    <Box
      sx={{
        width: "258px",
        padding: "10px",
        bgcolor: theme ? "#000000" : "#FAFAFA",
        color: theme ? "#FAFAFA" : "#000000",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "27.24px",
            textAlign: "left",
            color: "#4285F4",
          }}
        >
          All Inbox(s)
          <KeyboardArrowDownIcon />
        </Typography>
        <Box
          className="flex justify-center items-center"
          sx={{
            width: "32px",
            height: "32px",
            borderRadius: "4px",
            bgcolor: theme ? "#25262B" : "#ffffff",
          }}
        >
          <ReplayIcon />
        </Box>
      </Box>
      <Box sx={{ marginY: "15px" }}>
        <strong>25/25</strong> Inbox selected
      </Box>
      <Box
        sx={{
          width: "238px",
          height: "28px",
          bgcolor: "#23272C",
          padding: "4px 6px",
          gap: "4px",
          borderRadius: "4px",
          border: "1px solid transparent",
        }}
      >
        Seerch
      </Box>
      <Box
        sx={{
          marginTop: "15px",
          display: "flex",
          paddingBottom: "15px",
          borderBottom: "1px solid #203137",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              width: "34px",
              height: "26px",
              padding: "3px 8px",
              gap: "8px",
              color: "#5C7CFA",
              borderRadius: "17px  ",
              background: "#222426",
            }}
          >
            26
          </Typography>
          <Typography>New Replies</Typography>
        </Box>
        <Typography>Newest</Typography>
        <KeyboardArrowDownIcon />
      </Box>

      <Box>
        {mails.map((mail) => (
          <MailInboxCard mail={mail} />
        ))}
      </Box>
    </Box>
  );
}

export default InboxMenu;
