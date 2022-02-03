import { Box, Flex } from "@chakra-ui/layout";
import HeadMeta from "../pages/partials/headMeta";
import TopNav from "./topNav";
import LeftNav from "./leftNav";

const AppLayout = ({ children }: { children: any }) => {
  return (
    <div>
      <HeadMeta />
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
            borderRadius="lg"
            height="calc(100vh - 90px)"
            width="calc(100vw - 150px)"
            padding="10px"
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "10px",
              },
              "&::-webkit-scrollbar-track": {
                width: "15px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "darkgrey",
                borderRadius: "24px",
              },
            }}
          >
            <Box padding="10px 10px 0 10px">{children}</Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default AppLayout;
