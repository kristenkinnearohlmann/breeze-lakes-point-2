import { Box, Text } from "@chakra-ui/layout";
import HeadMeta from "./partials/headMeta";
import { useMe } from "../lib/hooks";

const Admin = () => {
  const { user } = useMe();
  return (
    <div>
      <HeadMeta subtitle="Admin" />
      <Box>
        <Text borderBottom="2px solid #fff" fontSize="3xl" marginBottom="15px">
          Admin
        </Text>
        <Text>Admin stuff will go here.</Text>
      </Box>
    </div>
  );
};

export default Admin;
