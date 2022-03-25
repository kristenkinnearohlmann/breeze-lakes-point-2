import {
  Box,
  Flex,
  Text,
  Input,
  Checkbox,
  Button,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { auth } from "../lib/mutations";
import { useState } from "react";
import NextImage from "next/image";

const AuthForm = ({ mode }: { mode: any }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [noMiddleName, setNoMiddleName] = useState(false);
  const [checkedNoMiddleName, setCheckedNoMiddleName] = useState(false);
  const [checkNoMiddleNameDisabled, setCheckNoMiddleNameDisabled] =
    useState(false);
  const [middleNameDisabled, setMiddleNameDisabled] = useState(false);
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [checkedNoEmail, setCheckedNoEmail] = useState(false);
  const [checkNoEmailDisabled, setCheckNoEmailDisabled] = useState(false);
  const [emailDisabled, setEmailDisabled] = useState(false);
  const router = useRouter();

  const handleClick = () => setShow(!show);

  const handleNoEmail = (e) => {
    setCheckedNoEmail(e.target.checked);
    setEmailDisabled(e.target.checked);
  };

  const handleNoMiddleName = (e) => {
    setCheckedNoMiddleName(e.target.checked);
    setMiddleNameDisabled(e.target.checked);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (mode === "signin") {
      const user = await auth(mode, { username, password });
    } else {
      console.log("Middle name", middleName);
      const user = await auth(mode, {
        username,
        password,
        email,
        firstName,
        lastName,
        middleName,
      });
    }
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
            <InputGroup>
              <Input
                mt="5px"
                placeholder={mode === "signup" ? "email" : "email or username"}
                type="text"
                onChange={(e) => {
                  setUserName(e.target.value);
                  setEmail(e.target.value);
                  setCheckNoEmailDisabled(true);
                }}
                disabled={emailDisabled}
              />
              {mode === "signup" ? (
                <Checkbox
                  ml="2px"
                  onChange={(e) => handleNoEmail(e)}
                  isDisabled={checkNoEmailDisabled}
                >
                  No email address
                </Checkbox>
              ) : null}
            </InputGroup>
            {mode === "signup" ? (
              checkedNoEmail ? (
                <Input
                  mt="5px"
                  placeholder="username"
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
              ) : null
            ) : null}
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
            {mode === "signup" ? (
              <InputGroup>
                <Input
                  mt="5px"
                  mr="2px"
                  placeholder="first name"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  mt="5px"
                  mr="2px"
                  placeholder="middle name"
                  type="text"
                  // onChange={(e) => setMiddleName(e.target.value)}
                  onChange={(e) => {
                    setMiddleName(e.target.value);
                    setCheckNoMiddleNameDisabled(true);
                  }}
                  disabled={middleNameDisabled}
                />
                {/* TODO: add noMiddleName chkbox */}
                <Checkbox
                  ml="2px"
                  onChange={(e) => handleNoMiddleName(e)}
                  isDisabled={checkNoMiddleNameDisabled}
                >
                  No email address
                </Checkbox>
                <Input
                  mt="5px"
                  ml="2px"
                  placeholder="last name"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </InputGroup>
            ) : null}

            <Button mt="5px" type="submit" bg="blue.500" isLoading={isLoading}>
              {mode === "signin" ? "Sign In" : "Sign Up"}
            </Button>
            {mode === "signin" ? (
              <Text marginTop="5px" fontSize="sm">
                Don't have an account?{" "}
                <Link href="/signup" fontWeight="bold">
                  Sign up
                </Link>{" "}
                to register.
              </Text>
            ) : (
              <Text marginTop="5px" fontSize="sm">
                Have an account?{" "}
                <Link href="/signin" fontWeight="bold">
                  Sign in
                </Link>{" "}
                to manage your profile and registration.
              </Text>
            )}
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
