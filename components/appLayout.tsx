import { Box, Flex, Text } from "@chakra-ui/layout";
import HeadMeta from "../pages/partials/headMeta";
import TopNav from "./topNav";
import LeftNav from "./leftNav";
import Dashboard from "./dashboard";
import { useMe } from "../lib/hooks";

const AppLayout = ({ children }: { children: any }) => {
  const { user } = useMe();

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
            <Box>
              <Text fontSize="3xl">
                {user?.firstName} {user?.lastName}
              </Text>
              <Text fontSize="medium">{user?.role}</Text>
            </Box>
            <Dashboard user={user}></Dashboard>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default AppLayout;
