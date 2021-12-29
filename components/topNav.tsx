import { Box, Flex } from "@chakra-ui/layout";
import NextImage from "next/image";

const TopNav = () => {
  return (
    <Box>
      <Box width="80px" padding="10px">
        <NextImage src="/logo-small.png" height={97} width={80} />
      </Box>
    </Box>
  );
};

export default TopNav;
