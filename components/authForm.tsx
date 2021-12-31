import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import NextImage from "next/image";

const AuthForm = () => {
  return (
    <Box height="100vh" width="100vw" bg="grey" color="white">
      <Flex
        justify="center"
        align="center"
        height="215px"
        borderBottom="white 1px solid"
        paddingX="10px"
      >
        <NextImage src="/logo.png" height={194} width={160} />
        <Text fontSize="3xl">Breeze Lakes Point</Text>
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 215px)">
        <Box padding="50px" bg="gray.600" borderRadius="6px">
          <form>
            <Input mt="5px" placeholder="email or username" type="text" />
            <Input mt="5px" placeholder="password" type="password" />
            <Button mt="5px" type="submit" bg="blue.500">
              phSubmit
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
