import { Box, Text } from "@chakra-ui/layout";
import UserHeader from "../components/userHeader";
import { useMe } from "../lib/hooks";

const Registration = () => {
  const { user } = useMe();

  return (
    <div>
      <UserHeader user={user}></UserHeader>
      <Box>
        <Text>Register here to participate.</Text>
      </Box>
    </div>
  );
};

export default Registration;
