import { Box, Flex } from "@chakra-ui/layout";
import NextImage from "next/image";

const TopNav = () => {
  return (
    <Box padding="10px 15px">
      <Box width="80px">
        <NextImage src="/logo-small.png" height={97} width={80} />
      </Box>
    </Box>
  );
};

export default TopNav;
