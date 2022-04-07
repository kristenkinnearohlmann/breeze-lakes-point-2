import { Box, Text, Divider, Flex } from "@chakra-ui/layout";

const UserHeader = ({ user }: { user: any }) => {
  return (
    <Box padding="0 0 15px 0">
      <Flex align="center">
        <Text fontSize="3xl" marginRight="15px">
          {user?.firstName} {user?.lastName}
        </Text>
        <Text fontSize="large">{user?.role.toLowerCase()}</Text>
      </Flex>
      <Divider />
    </Box>
  );
};

export default UserHeader;
