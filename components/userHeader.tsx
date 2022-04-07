import { Box, Text, Divider, Flex } from "@chakra-ui/layout";

const UserHeader = ({ user }: { user: any }) => {
  return (
    <Box padding="0 0 15px 0">
      <Flex align="center">
        <Text fontSize="3xl" marginRight="15px">
          {user?.firstName} {user?.lastName}
        </Text>
        <Text
          bgColor="gray.500"
          borderRadius="10px"
          border="1px solid white"
          fontSize="large"
          paddingX="10px"
          paddingY="2px"
        >
          {user?.role.toLowerCase()}
        </Text>
      </Flex>
      <Divider />
    </Box>
  );
};

export default UserHeader;
