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
import NextLink from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";

const navMenu = [
  {
    name: "Dashboard",
    icon: AiOutlineDashboard,
    route: "/",
  },
  {
    name: "Admin",
    icon: RiAdminLine,
    route: "/",
  },
];

const LeftNav = () => {
  return (
    <Box height="calc(100vh - 90px)" width="200px" padding="10px" color="white">
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
    </Box>
  );
};

export default LeftNav;
