import { Box, Typography } from "@mui/material";

function MessageMail({ message }) {
  return (
    <Box
      sx={{
        width: "753px",
        // height: "236px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        margin: "auto",
      }}
    >
      {/* <p>{JSON.stringify(message)}</p> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>{message.subject}</Typography>
          <Typography>{message.time}</Typography>
        </Box>
        <Typography>{message.from}</Typography>
        <Typography>{message.to}</Typography>
      </Box>
      <Typography>{message.intro}</Typography>
      <Typography>{message.message}</Typography>
    </Box>
  );
}

export default MessageMail;
