import { Box, Flex, Text } from "@chakra-ui/layout";

const Dashboard = ({ user }: { user: any }) => {
  const { firstName, lastName } = user;

  return (
    <Box bg="white" margin="20px" border="1px solid #dfdfdf">
      <Box bg="grey" padding="20px">
        <Box>
          <Text>
            {firstName} {lastName}
          </Text>
        </Box>
        <Text paddingY="20px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          euismod, justo eu eleifend rhoncus, erat tellus viverra sem, dictum
          volutpat ligula felis sed arcu. Maecenas malesuada faucibus velit.
          Mauris fringilla posuere aliquet. Donec vulputate, tellus nec
          ullamcorper egestas, turpis massa egestas ex, pulvinar fermentum sem
          lacus et mauris. In ornare orci non pellentesque facilisis. Nullam ac
          tincidunt neque. Maecenas quis eros lectus.
        </Text>
        <Text paddingY="20px">
          Nunc imperdiet justo at ipsum condimentum fermentum. Nam et ex lacus.
          Morbi eu elementum mi, at lacinia diam. Donec consectetur posuere
          nulla, ac porttitor nulla faucibus et. Phasellus eu posuere tellus.
          Aenean eleifend pharetra orci. Pellentesque gravida viverra odio,
          pulvinar laoreet erat gravida in. Pellentesque nec turpis leo.
          Suspendisse pulvinar pharetra est pulvinar cursus. In sit amet nisl
          vitae odio rhoncus mollis eu cursus enim.
        </Text>
      </Box>
    </Box>
  );
};

export default Dashboard;
