import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import { RiAdminLine, RiFileEditLine } from "react-icons/ri";
import { signout } from "../lib/mutations";
import { useRouter } from "next/router";

const navMenu = [
  {
    name: "Dashboard",
    icon: AiOutlineDashboard,
    route: "/",
  },
  {
    name: "Register",
    icon: RiFileEditLine,
    route: "/register",
  },
  {
    name: "Admin",
    icon: RiAdminLine,
    route: "/",
  },
];

const LeftNav = () => {
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
      <List spacing={2}>
        {navMenu.map((menu) => (
          <ListItem paddingX="5px" fontSize="16px" key={menu.name}>
            <LinkBox>
              <NextLink href={menu.route} passHref>
                <LinkOverlay>
                  <ListIcon as={menu.icon} color="white" marginRight="5px" />
                  {menu.name}
                </LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        ))}
      </List>
      <Box>
        <form onSubmit={handleSubmit}>
          <IconButton
            aria-label="Sign out"
            icon={<MdOutlineLogout />}
            bg="transparent"
            border="1px solid black"
          />
          <Button type="submit">Sign Out</Button>
        </form>
      </Box>
    </Box>
  );
};

export default LeftNav;
