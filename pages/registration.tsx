import { Box, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import UserHeader from "../components/userHeader";
import { useMe } from "../lib/hooks";

const Registration = () => {
  const { user } = useMe();
  console.log(user);
  return (
    <div>
      <UserHeader user={user}></UserHeader>
      <Box paddingBottom="15px">
        <Text>Complete or review your registration information.</Text>
      </Box>
      <Box>
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
