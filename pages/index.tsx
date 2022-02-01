import { Box, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Dashboard from "../components/dashboard";
import { useMe } from "../lib/hooks";

const Home: NextPage = () => {
  const { user } = useMe();

  return (
    <div>
      <Box>
        <Text fontSize="3xl">
          {user?.firstName} {user?.lastName}
        </Text>
        <Text fontSize="medium">{user?.role}</Text>
      </Box>
      <Dashboard user={user}></Dashboard>
    </div>
  );
};

export default Home;
