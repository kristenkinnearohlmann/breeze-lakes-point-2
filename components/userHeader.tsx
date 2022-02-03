import { Box, Text, Divider } from "@chakra-ui/layout";

const UserHeader = ({ user }: { user: any }) => {
  return (
    <Box padding="0 0 15px 0">
      <Text fontSize="3xl">
        {user?.firstName} {user?.lastName}
      </Text>
      <Text fontSize="large">{user?.role}</Text>
      <Divider />
    </Box>
  );
};

export default UserHeader;
