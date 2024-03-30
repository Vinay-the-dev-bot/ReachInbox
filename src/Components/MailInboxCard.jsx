import { Box, Typography } from "@mui/material";
import menubarsendemail from "../assets/menubarsendemail.png";
function MailInboxCard({ mail }) {
  const mailssss = {
    id: 3,
    fromName: "Shaw Adley",
    fromEmail: "shaw@getmemeetings.com",
    toName: "",
    toEmail: "mitrajit2022@gmail.com",
    cc: null,
    bcc: null,
    threadId: 1,
    messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
    inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    subject:
      "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
    body: "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
    isRead: true,
    folder: "INBOX",
    uid: 594,
    sentAt: "2023-11-23T04:08:45.000Z",
    archivedAt: null,
    createdAt: "2023-11-23T07:38:46.000Z",
    updatedAt: "2023-11-23T07:38:46.000Z",
    deletedAt: null,
  };
  const date = new Date(mail.createdAt);
  const month = date
    .toLocaleString("default", { month: "long" })
    .slice(0, 3)
    .toLowerCase();
  const day = date.getDate();
  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid black",
          paddingY: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            paddingY: "7px",
            justifyContent: "space-between",
          }}
        >
          <Typography>{mail.fromEmail}</Typography>
          <Typography>{`${month} ${day}`}</Typography>
        </Box>
        <Typography sx={{ overflow: "hidden" }}>{mail.subject}</Typography>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              display: "flex",
              alignItems: "center",
              paddingX: "10px",
              height: "20px",
              padding: "3px 8px",
              gap: "3px",
              borderRadius: "17px",
              background: "#222426",
              color: "#FFFFFF",
            }}
          >
            <Box
              sx={{
                width: "10px",
                height: "10px",
                margin: "2.5px",
                borderRadius: "50%",
                bgcolor: "blue",
              }}
            ></Box>
            <Box
              sx={{
                width: "16px",
                height: "16px",
                opacity: 0.5,

                position: "absolute",
                borderRadius: "50%",
                bgcolor: "black",
              }}
            ></Box>
            <Typography>{mail.status}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "111.99px",
              height: "20px",
              padding: "3px 8px",
              gap: "3px",
              borderRadius: "17px",
              background: "#222426",
              color: "#FFFFFF",
            }}
          >
            <img
              style={{ width: "15px", height: "15px" }}
              src={menubarsendemail}
              alt="menubarsendemail"
            />
            <Typography
              sx={{
                fontSize: "10px",
              }}
            >
              Campaign Name
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MailInboxCard;
