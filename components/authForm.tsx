import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import NextImage from "next/image";

const AuthForm = ({ mode }: { mode: string }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
            <InputGroup size="md" marginTop="5px">
              <Input
                pr="4.5rem"
                placeholder="password"
                type={show ? "text" : "password"}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  bg="blue.500"
                  onClick={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button mt="5px" type="submit" bg="blue.500">
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
