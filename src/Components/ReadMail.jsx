import { Box, Button, Typography } from "@mui/material";
import MessageMail from "./MessageMail";
import expand from "../assets/expandButton.png";
import replyIcon from "../assets/reply.png";
import MailEditor from "./MailEditor";
import { useState } from "react";
function ReadMail() {
  const [reply, setReply] = useState(false);
  const [deletemail, setDeleteMail] = useState(false);
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
  // function handleKeyDown(event) {
  //   if (event.key === "r") {
  //     setReply(!reply);
  //     console.log("r key pressed");
  //   } else if (event.key === "d") {
  //     console.log("d key pressed");
  //   }
  // }

  function handleKeyDown(event) {
    if (event.key === "r") {
      setReply(!reply);
    } else if (event.key === "d") {
      console.log("aslkdnfskjd");
      setDeleteMail(!deletemail);
    }
  }

  window.addEventListener("keydown", handleKeyDown);

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
        <p>{JSON.stringify(deletemail)}</p>
        <p>{JSON.stringify(reply)}</p>
        {/* <Button variant="contained">
          <img src={reply} alt="reply" />
          Reply
        </Button> */}
        <Button
          style={{
            background:
              "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
            color: "white",
          }}
          onClick={() => setReply(true)}
          variant="contained"
        >
          <img src={replyIcon} alt="replyIcon" />
          Reply
        </Button>
        {reply && <MailEditor setReply={setReply} />}
      </Box>
    </>
  );
}

export default ReadMail;
