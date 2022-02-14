import { Box, Text } from "@chakra-ui/layout";
import HeadMeta from "./partials/headMeta";
import { useMe } from "../lib/hooks";

const Profile = () => {
  const { user } = useMe();

  return (
    <div>
      <HeadMeta subtitle="Profile" />
      <Box>
        <Text>Profile</Text>
        <Text>First name: {user?.firstName}</Text>
        <Text>Last name: {user?.lastName}</Text>
        <Text>Role: {user?.role}</Text>
      </Box>
    </div>
  );
};

export default Profile;
