import { Box, Flex, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import { Formik } from "formik";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import * as Yup from "yup";
import UserHeader from "../components/userHeader";
import { useMe } from "../lib/hooks";
// import { EventEmitter } from "stream";
// import { eventNames } from "process";
import { InputControl, SubmitButton } from "formik-chakra-ui";

const Registration = () => {
  const { user } = useMe();
  console.log(user);

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    preferredName: "",
  };

  console.log(initialValues);
  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    preferredName: Yup.string(),
  });

  const onSubmit = (values) => {
    event.preventDefault;
    console.log("In Submit");
    console.log(values);
  };

  return (
    <div>
      <UserHeader user={user}></UserHeader>
      <Box paddingBottom="15px">
        <Text>Complete or review your registration information.</Text>
      </Box>
      <Box>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, values, errors }) => (
            <Box as="form" onSubmit={handleSubmit as any}>
              <Flex>
                <InputControl
                  isRequired
                  id="firstName"
                  name="firstName"
                  label="First name"
                  marginRight="10px"
                />
                <InputControl
                  isRequired
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  marginRight="10px"
                />
                <InputControl
                  id="preferredName"
                  name="preferredName"
                  label="Preferred name"
                />
              </Flex>
              <SubmitButton>Submit</SubmitButton>
            </Box>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Registration;
