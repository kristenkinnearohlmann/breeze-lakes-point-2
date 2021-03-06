import {
  Box,
  List,
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { MdOutlineLogout } from "react-icons/md";
import { signout } from "../lib/mutations";
import { useRouter } from "next/router";
import { adminRoles, navMenu, navMenuAdmin } from "../config";

const LeftNav = ({ user }: { user: any }) => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await signout("signout");
    router.push("/signin");
  };

  return (
    <Box
      height="calc(100vh - 90px)"
      width="150px"
      padding="20px 10px 0 0"
      color="white"
    >
      <Box marginTop="10px">
        <Box>
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="5px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="5px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        {adminRoles.includes(user?.role) ? (
          <Box marginTop="10px">
            <List borderTop="2px solid grey" marginTop="10px" spacing={2}>
              {navMenuAdmin.map((menu) => (
                <ListItem paddingX="5px" fontSize="16px" key={menu.name}>
                  <LinkBox>
                    <NextLink href={menu.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={menu.icon}
                          color="white"
                          marginRight="5px"
                        />
                        {menu.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </Box>
        ) : null}
        <Box marginTop="8px">
          <form onSubmit={handleSubmit}>
            <Button
              variant="link"
              color="white"
              fontWeight="normal"
              type="submit"
            >
              <Icon as={MdOutlineLogout} marginX="5px" />
              Sign Out
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftNav;
