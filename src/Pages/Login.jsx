import { Button, Box, Text } from "@chakra-ui/react";
import googleLogo from "../assets/googlelogo.png";
import reachInboxLogo from "../assets/reachInboxLogo.png";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Box
        h={"64px"}
        bg={"black"}
        border={"1px solid #25262B"}
        className="flex justify-center items-center"
      >
        <Image h={"24px"} src={reachInboxLogo} alt={"reachInboxLogo"} />
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
          <Text color={"#FFFFFF"} fontSize={"20px"}>
            Create a new account
          </Text>
          <Box
            w={"380px"}
            h={"48px"}
            border={"1px solid #707172"}
            borderRadius={"5px"}
            className="flex gap-2 justify-center items-center"
          >
            <Image src={googleLogo} />
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
          <Box className="flex gap-1" color={"#909296"}>
            <Text> Already have an account?</Text>
            <Text color={"#C1C2C5"}>
              <Link to="/">Sign In</Link>
            </Text>
          </Box>
        </Box>
        {/* background: #5C5F66; */}
      </Box>
      <Text bg={"#121212"} color={"#5C5F66"} className="text-center" h={"32px"}>
        © 2023 Reachinbox. All rights reserved.
      </Text>
    </>
  );
}
// background: linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%);

export default Login;
