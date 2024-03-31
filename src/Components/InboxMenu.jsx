import { Box, Input, Typography, Button } from "@mui/material";
import MailInboxCard from "./MailInboxCard";
function InboxMenu() {
  var mails = [
    {
      id: 3,
      fromName: "Shaw Adley",
      fromEmail: "sanya@gmail.com",
      toName: "",
      toEmail: "mitrajit2022@gmail.com",
      cc: null,
      status: "interested",
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
    },
    {
      id: 4,
      status: "closed",
      fromName: "Shaw Adley",
      fromEmail: "Biata@gmail.com",
      toName: "",
      toEmail: "mitrajit2022@gmail.com",
      cc: null,
      bcc: null,
      threadId: 2,
      messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
      inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      subject: "Test mail",
      body: "<p>Test mail</p>",
      isRead: true,
      folder: "INBOX",
      uid: 594,
      sentAt: "2023-11-23T04:08:45.000Z",
      archivedAt: null,
      createdAt: "2023-11-23T07:38:46.000Z",
      updatedAt: "2023-11-23T07:38:46.000Z",
      deletedAt: null,
    },
  ];
  return (
    <Box
      sx={{
        width: "258px",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>All Inbox(s)</Typography>
        <Box>RETRY</Box>
      </Box>
      <Box>
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
        {/* <Icon>{SearchIcon}akjdnadsd</Icon> */}
        {/*     <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
          Search
        </Button> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          borderBottom: "1px solid black",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography>26</Typography>
          <Typography>New Replies</Typography>
        </Box>
        <Typography>Newest</Typography>
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
