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
        <Box height="calc(100vh - 90px)" width="150px" padding="10px">
          <LeftNav></LeftNav>
        </Box>
        <Box
          bg="grey"
          height="calc(100vh - 90px)"
          width="calc(100vw - 150px)"
          padding="10px"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              width: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "blue",
              borderRadius: "24px",
            },
          }}
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default AppLayout;
