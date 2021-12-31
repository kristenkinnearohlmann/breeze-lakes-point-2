import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import NextImage from "next/image";

const AuthForm = () => {
  return (
    <Box height="100vh" width="100vw" bg="grey" color="white">
      <Flex
        justify="center"
        align="center"
        height="214px"
        borderBottom="white 1px solid"
        paddingX="10px"
      >
        <NextImage src="/logo.png" height={194} width={160} />
        <Text fontSize="3xl">Breeze Lakes Point</Text>
      </Flex>
    </Box>
  );
};

export default AuthForm;
