import { Box, Typography, Button } from "@mui/material";
import dropDown from "../assets/arrow_drop_down.png";
import flash_on from "../assets/flash_on.png";
import remove_red_eye from "../assets/remove_red_eye.png";
import link from "../assets/link.png";
import imageAttachment from "../assets/imageAttachment.png";
import emoji from "../assets/emoji.png";
import person_remove from "../assets/person_remove.png";
import unfold_more from "../assets/unfold_more.png";
imageAttachment;
function MailEditor({ setReply }) {
  return (
    <>
      {/* <Box className="flex flex-col">MailEditor</Box> */}
      <Box
        sx={{
          position: "fixed",
          top: "100px",
          width: "752px",
          height: "534px",
          color: "white",
          gap: "0px",
          border: "1px solid black",
          //   background: "#141517",
          borderImageSource:
            "linear-gradient(180deg, #4A5055 0%, #2A2F32 100%)",
        }}
      >
        {/* <Box sx={ {width: Fixed (752px)px;
height: Fixed (38px)px;
padding: 20px 32px 20px 32px;
gap: 10px;
border-radius: 8px 8px 0px 0px;
border: 1px 0px 0px 0px;
opacity: 0px;
 background: #23272C;
 border: 1px solid #41464B}}  >Reply</Box> */}
        <Box
          className="flex justify-between items-center"
          sx={{
            width: "752px",
            height: "38px",
            padding: "20px 32px",
            gap: "10px",
            borderRadius: "8px 8px 0px 0px",
            borderBottom: "1px solid #41464B",
            background: "#23272C",
          }}
        >
          <Typography> Reply</Typography>
          <Typography onClick={() => setReply(false)}>X</Typography>
        </Box>

        <Box
          className="flex   items-center"
          sx={{
            width: "752px",
            height: "38px",
            padding: "20px 32px",
            gap: "10px",

            borderBottom: "1px solid #41464B",
            background: "#23272C",
          }}
        >
          <Typography>To : </Typography>
          <Typography>jeanne@icloud.com</Typography>
        </Box>
        <Box
          className="flex   items-center"
          sx={{
            width: "752px",
            height: "38px",
            padding: "20px 32px",
            gap: "10px",

            borderBottom: "1px solid #41464B",
            background: "#23272C",
          }}
        >
          <Typography>From : </Typography>
          <Typography>peter@reachinbox.com</Typography>
        </Box>
        <Box
          className="flex   items-center"
          sx={{
            width: "752px",
            height: "38px",
            padding: "20px 32px",
            gap: "10px",

            borderBottom: "1px solid #41464B",
            background: "#23272C",
          }}
        >
          <Typography>Subject : </Typography>
          <Typography>Warmup Welcome</Typography>
        </Box>
        <Box
          className="flex "
          sx={{
            width: "752px",
            height: "325px",
            padding: "20px 32px",
            gap: "10px",

            borderBottom: "1px solid #41464B",
            background: "#23272C",
          }}
        >
          Hi Jeanne,
        </Box>
        <Box
          className="flex gap-8 items-center"
          sx={{
            width: "752px",
            height: "38px",
            padding: "30px 32px",
            gap: "10px",
            borderRadius: "0px 0px 8px 8px",
            borderBottom: "1px solid #41464B",
            background: "#23272C",
          }}
        >
          <Button
            sx={{
              width: "114px",
              height: "40px",
              gap: "16px",
            }}
            style={{
              background:
                "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
              color: "white",
            }}
            onClick={() => setReply(false)}
            variant="contained"
          >
            <Typography>Send</Typography>
            <img src={dropDown} alt="dropDown" />
          </Button>
          <Box className="flex w-24 items-center">
            <img
              style={{
                width: "24px",
                height: "24px",
              }}
              src={flash_on}
              alt="flash_on"
            />
            <Typography>Variables</Typography>
          </Box>
          <Box className="flex gap-4 items-center ">
            <img
              style={{
                width: "24px",
                height: "24px",
              }}
              src={remove_red_eye}
              alt="remove_red_eye"
            />
            <Typography>Preview Email</Typography>
          </Box>
          <Box
            className="relative flex gap-4"
            sx={{
              borderRadius: "0px 0px 8px 8px",
            }}
          >
            <Typography>A:</Typography>
            <Box>
              <img src={link} alt="link" />
            </Box>
            <Box>
              <img src={imageAttachment} alt="imageAttachment" />
            </Box>
            <Box>
              <img src={emoji} alt="emoji" />
            </Box>
            <Box>
              <img src={person_remove} alt="person_remove" />
            </Box>
            <Box
              sx={{
                borderRadius: "0px 0px 8px 8px",
              }}
            >
              <img src={unfold_more} alt="unfold_more" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MailEditor;
