import { Box, Text } from "@chakra-ui/layout";
import HeadMeta from "./partials/headMeta";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMe } from "../lib/hooks";
import { Formik } from "formik";

const Profile = () => {
  const { user } = useMe();
  console.log(user);

  const initialValues = {
    firstName: "",
    middleName: "",
    noMiddleName: false,
    lastName: "",
  };

  const userValues = {
    firstName: user?.firstName || "",
    middleName: user?.middleName || "",
    noMiddleName: user?.noMiddleName || false.valueOf,
    lastName: user?.lastName || "",
  };

  return (
    <div>
      <HeadMeta subtitle="Profile" />
      <Box>
        <Text borderBottom="2px solid #fff" fontSize="3xl" marginBottom="15px">
          Profile Information
        </Text>
        <Text>First name: {user?.firstName}</Text>
        {user?.noMiddleName ? null : (
          <Text>Middle name: {user?.middleName}</Text>
        )}
        <Text>Last name: {user?.lastName}</Text>
      </Box>
      <Box>
        <Text>Change your password:</Text>
        <Text>pwd</Text>
      </Box>
    </div>
  );
};

export default Profile;
