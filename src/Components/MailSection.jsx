import noMailIllustration from "../assets/noMailIllustration.png";
import { Box } from "@mui/material";
import NoMail from "./NoMail";
import InboxMenu from "./InboxMenu";
import MailSummary from "./MailSummary";
import ReadMail from "./ReadMail";
function MailSection() {
  return (
    <>
      {true ? (
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <InboxMenu />
          <ReadMail />
          <MailSummary />
        </Box>
      ) : (
        <NoMail />
      )}
    </>
  );
}

export default MailSection;
