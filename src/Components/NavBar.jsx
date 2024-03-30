import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Box
        margin={"50px auto"}
        display={"flex"}
        justifyContent={"space-around"}
      >
        <Link to="/">HOME</Link>
      </Box>
    </>
  );
}

export default NavBar;
// npm uninstall @chakra-ui/react @emotion/react @emotion/styled framer-motion
