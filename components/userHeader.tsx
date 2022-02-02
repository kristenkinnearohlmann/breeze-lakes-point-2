import { Box, Text } from "@chakra-ui/layout";

const UserHeader = ({ user }: { user: any }) => {
  return (
    <Box>
      <Text fontSize="3xl">
        {user?.firstName} {user?.lastName}
      </Text>
      <Text fontSize="medium">{user?.role}</Text>
    </Box>
  );
};

export default UserHeader;
