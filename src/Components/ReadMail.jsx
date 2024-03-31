import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MessageMail from "./MessageMail";
import expand from "../assets/expandButton.png";
import replyIcon from "../assets/reply.png";
import arrow_dropDown from "../assets/arrow_dropDown.png";
import MailEditor from "./MailEditor";
import { useState } from "react";
import DeleteMail from "./DeleteMail";
import { useSelector } from "react-redux";
function ReadMail() {
  const [reply, setReply] = useState(false);
  const [deletemail, setDeleteMail] = useState(false);
  const [readAll, setReadAll] = useState(false);

  const theme = useSelector((state) => state.darkMode);
  const message = {
    subject: "New Product Launch",
    time: "20 june 2022 : 9:16AM",
    to: "to : lennon.j@mail.com",
    // from : jeanne@icloud.com cc : lennon.j@mail.com
    from: "from : jeanne@icloud.com cc : lennon.j@mail.com",
    cc: "to : lennon.j@mail.com",
    intro: "Hi {FIRST_NAME} ",
    message:
      "I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.",
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
            bgcolor: theme ? "#000000" : "#FAFAFA",
            color: theme ? "#FAFAFA" : "#000000",
          }}
        >
          <Box
            sx={{
              width: "422px",
              height: "46px",
            }}
          >
            <Typography>Orlando</Typography>
            <Typography sx={{ color: theme ? "#666666" : "#000000" }}>
              Orlando@gmail.com
            </Typography>
          </Box>

          <Box
            className="flex gap-2   items-center"
            sx={{
              padding: "6px 8px",
              borderRadius: "4px",
              bgcolor: theme ? "#1f1f1f" : "#000000",
            }}
          >
            <Box
              sx={{
                width: "10px",
                height: "10px",
                margin: "3px",
                borderRadius: "50%",
                bgcolor: "#444234 ",
              }}
            ></Box>
            <Box
              sx={{
                width: "16px",
                height: "16px",
                opacity: 0.5,
                position: "absolute",
                borderRadius: "50%",
                bgcolor: "#e6d162",
              }}
            ></Box>
            <Typography sx={{ width: "180px" }}>Meeting Completed</Typography>
            <KeyboardArrowDownIcon />
          </Box>
          <Box
            className="flex gap-2   items-center"
            sx={{
              padding: "6px 8px",
              borderRadius: "4px",
              bgcolor: theme ? "#1f1f1f" : "#000000",
            }}
          >
            <Typography>Move</Typography>
            <KeyboardArrowDownIcon />
          </Box>
          {/* <KeyboardArrowDownIcon /> */}
          <Box
            className="flex justify-center items-center"
            sx={{
              width: "36px",
              height: "36px",
              borderRadius: "4px",
              bgcolor: theme ? "#1f1f1f" : "#000000",
            }}
          >
            <MoreHorizIcon />
          </Box>
          {/* <Box>Three Dots</Box> */}
        </Box>
        {!readAll ? (
          <>
            <Typography>TODAY</Typography>
            <MessageMail message={message} />
            <Box className="flex gap-2 " onClick={() => setReadAll(true)}>
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
        {/* <Button onClick={() => setDeleteMail(true)}>DELETE</Button> */}

        {reply && <MailEditor setReply={setReply} />}
        {deletemail && <DeleteMail setDeleteMail={setDeleteMail} />}
      </Box>
    </>
  );
}

export default ReadMail;
