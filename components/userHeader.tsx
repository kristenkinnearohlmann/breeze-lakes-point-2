import { Box, Text, Divider } from "@chakra-ui/layout";

const UserHeader = ({ user }: { user: any }) => {
  return (
    <Box>
      <Text fontSize="3xl">
        {user?.firstName} {user?.lastName}
      </Text>
      <Text fontSize="medium">{user?.role}</Text>
      <Divider />
    </Box>
  );
};

export default UserHeader;
