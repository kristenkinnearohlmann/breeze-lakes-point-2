import { Box, Text } from "@chakra-ui/layout";
import HeadMeta from "../pages/partials/headMeta";

const Dashboard = ({ user }: { user: any }) => {
  return (
    <div>
      <HeadMeta subtitle="Dashboard" />
      <Box bg="white" border="1px solid #dfdfdf">
        <Box bg="grey" padding="20px">
          <Box>
            <Text>Welcome {user?.firstName}, you have arrived!</Text>
          </Box>
          <Text paddingY="20px">
            This is the main dashboard where items will appear depending on the
            user logging in.
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
