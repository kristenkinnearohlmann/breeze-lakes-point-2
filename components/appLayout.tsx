import { Box, Flex, Text } from "@chakra-ui/layout";
import TopNav from "./topNav";
import LeftNav from "./leftNav";

const AppLayout = ({ children }: { children: any }) => {
  return (
    <Box bg="gray.600" color="white">
      <Box height="90px" width="100vw">
        <TopNav></TopNav>
      </Box>
      <Flex>
        <Box height="calc(100vh - 90px)" width="200px" padding="10px">
          <LeftNav></LeftNav>
        </Box>
        <Box
          height="calc(100vh - 90px)"
          width="calc(100vw - 200px)"
          padding="10px"
          overflow="auto"
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default AppLayout;
