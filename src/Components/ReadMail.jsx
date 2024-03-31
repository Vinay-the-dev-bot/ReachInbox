import { Box, Typography } from "@mui/material";
import MessageMail from "./MessageMail";
import expand from "../assets/expandButton.png";
function ReadMail() {
  const message = {
    subject: "New Product Launch",
    time: "20 june 2022 : 9:16AM",
    // from : jeanne@icloud.com cc : lennon.j@mail.com
    from: "from : jeanne@icloud.com cc : lennon.j@mail.com",
    cc: "to : lennon.j@mail.com",
    intro: "Hi soajddcfsojdnjf",
    message:
      "Hi {FIRST_NAME} I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.",
  };
  return (
    <>
      <Box>
        <Box
          sx={{
            width: "799px",
            height: "70px",
            top: "69px",
            left: "363px",
            padding: "0px 8px 0px 17px",
            gap: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "7px 7px 0px 0px",
            border: "0px solid transparent",
            borderBottom: "1px solid #101113",
          }}
        >
          <Box
            sx={{
              width: "422px",
              height: "46px",
            }}
          >
            <Typography>Orlando</Typography>
            <Typography>Orlando@gmail.com</Typography>
          </Box>
          <Box>Meeting Completed DRPDWN</Box>
          <Box>Move DRPDWN</Box>
          <Box>Three Dots</Box>
        </Box>
        {false ? (
          <>
            <Typography>TODAY</Typography>
            <MessageMail message={message} />
            <Box className="flex gap-2">
              <img src={expand} alt="expand" />
              <Typography>View all 4 replies</Typography>
            </Box>
          </>
        ) : (
          <>
            <Typography>21 Feb</Typography>
            <MessageMail message={message} />
            <Typography>Yesterday</Typography>
            <MessageMail message={message} />
            <Typography>TODAY</Typography>
            <MessageMail message={message} />
          </>
        )}
      </Box>
    </>
  );
}

export default ReadMail;
