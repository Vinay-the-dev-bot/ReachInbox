import { Box, Typography } from "@mui/material";

function MessageMail({ message }) {
  return (
    <Box
      sx={{
        width: "753px",
        // height: "236px",
        bgcolor: "#141517",
        padding: "20px",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        margin: "auto",
      }}
    >
      {/* background: #E1E0E0; */}
      {/* <p>{JSON.stringify(message)}</p> */}
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* background: #7F7F7F; */}
          <Typography>{message.subject}</Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#7F7F7F",
              lineHeight: "16.71px",
              textAlign: "left",
            }}
          >
            {message.time}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#AEAEAE",
            lineHeight: "16.71px",
            textAlign: "left",
          }}
        >
          {message.from}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#AEAEAE",
            lineHeight: "16.71px",
            textAlign: "left",
          }}
        >
          {message.to}
        </Typography>
      </Box>
      {/* font-family: Open Sans; font-size: 14px; font-weight: 400; line-height:
      19.07px; letter-spacing: -0.02em; text-align: left; */}
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 400,
          color: "#E1E0E0",
          lineHeight: "19.07px",
          textAlign: "left",
        }}
      >
        {message.intro}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          width: "500px",
          fontWeight: 400,
          color: "#E1E0E0",
          lineHeight: "19.07px",
          textAlign: "left",
        }}
      >
        {message.message}
      </Typography>
    </Box>
  );
}

export default MessageMail;
