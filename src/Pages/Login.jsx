import { Box, Button, Typography } from "@mui/material";
import googleLogo from "../assets/googlelogo.png";
import reachInboxLogo from "../assets/reachInboxLogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const theme = useSelector((state) => state.darkMode);

  const dispatch = useDispatch();
  return (
    <>
      {/* <Box
        border={"1px solid #25262B"}
        className="flex justify-center items-center"
        sx={{ height: "64px", backgroundColor: "black", display: "flex" }}
      >
        <img h={"24px"} src={reachInboxLogo} alt={"reachInboxLogo"} />
      </Box>
      <Box padding={"200px"} bg={"black"}>
        <Box
          margin={"auto"}
          width={"460px"}
          bg={"#111214"}
          color={"#C1C2C5"}
          className="flex flex-col items-center justify-around"
          borderRadius={"17px"}
          border={"1px solid #343A40"}
          h={"312px"}
        >
          <Typography color={"#FFFFFF"} fontSize={"20px"}>
            Create a new account
          </Typography>
          <Box
            w={"380px"}
            h={"48px"}
            border={"1px solid #707172"}
            borderRadius={"5px"}
            className="flex gap-2 justify-center items-center"
          >
            <img src={googleLogo} />
            Sign Up with Google
          </Box>
          <Button
            width={"195px"}
            height={"48px"}
            bg={
              "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)"
            }
            color={"white"}
          >
            Create an Account
          </Button>

          <Button variant="contained">Create an Account</Button>
          <Box className="flex gap-1" color={"#909296"}>
            <Typography> Already have an account?</Typography>
            <Typography color={"#C1C2C5"}>
              <Link to="/">Sign In</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        bg={"#121212"}
        color={"#5C5F66"}
        className="text-center"
        h={"32px"}
      >
        © 2023 Reachinbox. All rights reserved.
      </Typography> */}
      <Box
        sx={{
          border: "1px solid #25262B",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "64px",
          bgcolor: theme ? "black" : "white",
        }}
      >
        <img src={reachInboxLogo} alt={"reachInboxLogo"} height={"24px"} />
      </Box>
      <Box
        sx={{
          padding: "200px",
          bgcolor: theme ? "black" : "white",
        }}
      >
        <Box
          sx={{
            margin: "auto",
            width: "460px",
            // bgcolor: "#111214",
            color: "#C1C2C5",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: "17px",
            border: "1px solid #343A40",
            height: "312px",
          }}
        >
          <Typography color={"#FFFFFF"} fontSize={"20px"}>
            Create a new account
          </Typography>
          <Box
            sx={{
              width: "380px",
              height: "48px",
              border: "1px solid #707172",
              borderRadius: "5px",
              display: "flex",
              gap: "2",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={googleLogo} alt="Google Logo" />
            <Link
              onClick={() => {
                localStorage.setItem("isLoggedIn", true);
                dispatch({ type: "LOGIN", payload: true });
              }}
              to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5174/"
            >
              Sign Up with Google
            </Link>
          </Box>
          {/* <Button variant="contained">Create an Account</Button> */}
          <Button
            style={{
              background:
                "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
              color: "white",
            }}
            variant="contained"
          >
            Create an Account
          </Button>

          <Box sx={{ display: "flex", gap: "1", color: "#909296" }}>
            <Typography>Already have an account?</Typography>
            <Typography color={"#C1C2C5"}>
              <Link to="/">Sign In</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          bgcolor: theme ? "#5C5F66" : "white",
          textAlign: "center",
          height: "32px",
        }}
      >
        © 2023 Reachinbox. All rights reserved.
      </Typography>
    </>
  );
}
// background: linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%);

export default Login;
