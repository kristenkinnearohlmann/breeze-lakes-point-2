import { Box, Text } from "@chakra-ui/layout";
import HeadMeta from "./partials/headMeta";
import * as Yup from "yup";
import { useMe } from "../lib/hooks";
import { Formik } from "formik";
import { InputControl } from "formik-chakra-ui";
import { Checkbox, InputGroup } from "@chakra-ui/react";

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

  const getData = () => (user?.id ? userValues : initialValues);

  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    middleName: Yup.string().nullable(),
    lastName: Yup.string().required(),
  });

  const onSubmit = (values) => {
    event.preventDefault;
    console.log("Profile values");
    console.log(values);
  };

  return (
    <div>
      <HeadMeta subtitle="Profile" />
      <Box>
        <Text borderBottom="2px solid #fff" fontSize="3xl" marginBottom="15px">
          Profile Information
        </Text>
        <Box>
          <Formik
            initialValues={getData()}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize={true}
          >
            {({ handleSubmit, values, errors }) => (
              <Box as="form" onSubmit={handleSubmit as any}>
                <Box>
                  <InputControl
                    isRequired
                    id="firstName"
                    name="firstName"
                    label="First name"
                    marginRight="10px"
                  />
                  <InputGroup>
                    <InputControl
                      id="middleName"
                      name="middleName"
                      label="Middle name"
                      marginRight="10px"
                      isDisabled={user?.noMiddleName}
                    />
                    <Checkbox ml="2px" defaultChecked={user?.noMiddleName}>
                      No middle name
                    </Checkbox>
                  </InputGroup>
                  <InputControl
                    isRequired
                    id="lasstName"
                    name="lasstName"
                    label="Last name"
                    marginRight="10px"
                  />
                </Box>
              </Box>
            )}
          </Formik>
        </Box>
      </Box>
      <Box>
        <Text>Change your password:</Text>
        <Text>pwd</Text>
      </Box>
    </div>
  );
};

export default Profile;
