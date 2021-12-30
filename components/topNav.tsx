import { Box, Flex, Text } from "@chakra-ui/layout";
import NextImage from "next/image";

const TopNav = () => {
  return (
    <Box padding="10px 15px" marginBottom="10px">
      <Flex align="center">
        <Box width="80px" marginRight="10px">
          <NextImage src="/logo-small.png" height={97} width={80} />
        </Box>
        <Box>
          <Text>Breeze Lakes Point</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TopNav;
