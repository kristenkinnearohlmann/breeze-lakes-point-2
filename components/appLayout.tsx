import { Box } from "@chakra-ui/layout";
import TopNav from "./topNav";
import LeftNav from "./leftNav";

const AppLayout = ({ children }: { children: any }) => {
  return (
    <Box>
      <Box height="100px" width="100vw" bg="green">
        <TopNav></TopNav>
      </Box>
      <Box height="calc(100vh - 100px)" width="100px" bg="purple">
        <LeftNav></LeftNav>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default AppLayout;
