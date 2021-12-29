import { Box, Flex } from "@chakra-ui/layout";
import TopNav from "./topNav";
import LeftNav from "./leftNav";

const AppLayout = ({ children }: { children: any }) => {
  return (
    <Box>
      <Box height="100px" width="100vw" bg="green">
        <TopNav></TopNav>
      </Box>
      <Flex>
        <Box height="calc(100vh - 100px)" width="100px" bg="purple">
          <LeftNav></LeftNav>
        </Box>
        <Box height="calc(100vh - 100px)" width="calc(100vw - 100px)" bg="blue">
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default AppLayout;
