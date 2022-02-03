import { Box, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import UserHeader from "../components/userHeader";
import { useMe } from "../lib/hooks";

const Registration = () => {
  const { user } = useMe();

  return (
    <div>
      <UserHeader user={user}></UserHeader>
      <Box>
        <Text>Register here to participate.</Text>
        <form>
          <FormControl isRequired>
            <FormLabel htmlFor="first-name">First name</FormLabel>
            <Input
              id="first-name"
              name="first-name"
              placeholder="First name"
            ></Input>
          </FormControl>
        </form>
      </Box>
    </div>
  );
};

export default Registration;
