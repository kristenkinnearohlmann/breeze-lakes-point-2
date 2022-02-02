import { Box, Text } from "@chakra-ui/layout";
import UserHeader from "../components/userHeader";
import { useMe } from "../lib/hooks";

const Register = () => {
  const { user } = useMe();

  return (
    <div>
      {/* {" "}
      <Box>
        <Text fontSize="3xl">
          {user?.firstName} {user?.lastName}
        </Text>
        <Text fontSize="medium">{user?.role}</Text>
      </Box> */}
      <UserHeader user={user}></UserHeader>
      <Box>Register here</Box>
    </div>
  );
};

export default Register;
