import { Box, Flex, Text } from "@chakra-ui/layout";

const Dashboard = ({ user }: { user: any }) => {
  return (
    <Box bg="white" margin="20px" border="1px solid #dfdfdf">
      <Box bg="grey" padding="20px">
        <Box>
          <Text>Welcome {user?.firstName}!</Text>
        </Box>
        <Text>You have arrived!</Text>
        <Text paddingY="20px">
          This is the main dashboard where items will appear depending on the
          user logging in.
        </Text>
      </Box>
    </Box>
  );
};

export default Dashboard;
