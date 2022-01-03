import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { auth } from "../lib/mutations";
import { useState } from "react";
import NextImage from "next/image";

const AuthForm = ({ mode }: { mode: any }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleClick = () => setShow(!show);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const user = await auth(mode, { username, password });
    setIsLoading(false);
    router.push("/");
  };

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
          <form onSubmit={handleSubmit}>
            <Input
              mt="5px"
              placeholder="email or username"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
            <InputGroup size="md" marginTop="5px">
              <Input
                pr="4.5rem"
                placeholder="password"
                type={show ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
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
            <Button mt="5px" type="submit" bg="blue.500" isLoading={isLoading}>
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
