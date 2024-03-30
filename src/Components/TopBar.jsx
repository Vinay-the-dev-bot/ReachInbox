import { Box, Text } from "@chakra-ui/react";

function TopBar() {
  return (
    <>
      <Box
        bg={"#343A40"}
        className="text-white flex items-center px-10 justify-between w-full h-16 "
      >
        <Text>OneBox</Text>
        <Box>
          <Box></Box>
          <Box>
            <Text>Tim's WorkSpace</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TopBar;
