import { Box, Typography, Button } from "@mui/material";

function DeleteMail({ setDeleteMail }) {
  return (
    <>
      <Box
        className="flex flex-col justify-around items-center"
        sx={{
          width: "443px",
          height: "249px",
          padding: "32px 24px",
          gap: "16px",

          borderRadius: "8px ",
          border: "1px solid",
          background: "linear-gradient(180deg, #141517 0%, #232528 100%)",
          borderImageSource:
            "linear-gradient(180deg, #484E53 0%, #2F3338 100%)",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "32.68px",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          Are you sure?
        </Typography>

        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "20.15px",
            textAlign: "left",
            color: "#E8E8E8",
          }}
        >
          Your selected email will be deleted.
        </Typography>
        <Box className="flex gap-8">
          <Button
            sx={{
              border: "none",
              width: "119px",
              height: "48px",
              bgcolor: "yellow",
              color: "white",
            }}
            variant="outlined"
            onClick={() => setDeleteMail(false)}
          >
            Cancel
          </Button>
          <Button
            //   background: linear-gradient(91.73deg, #FA5252 -2.99%, #A91919 95.8%);
            sx={{
              border: "none",
              width: "152px",
              height: "48px",
              bgcolor: "white",
              background:
                "linear-gradient(91.73deg, #FA5252 -2.99%, #A91919 95.8%)",
              color: "white",
            }}
            variant="contained"
          >
            Delete
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default DeleteMail;
