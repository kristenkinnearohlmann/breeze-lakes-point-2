import { Box, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import { Formik } from "formik";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import * as Yup from "yup";
import UserHeader from "../components/userHeader";
import { useMe } from "../lib/hooks";
import { EventEmitter } from "stream";
import { eventNames } from "process";
import { InputControl } from "formik-chakra-ui";

const Registration = () => {
  const { user } = useMe();
  console.log(user);

  const initialValues = {
    firstName: user.firstName,
  };

  console.log(initialValues);
  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
  });

  const onSubmit = (values) => {
    event.preventDefault;
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
            // <FormControl isRequired>
            //   <FormLabel htmlFor="first-name">First name</FormLabel>
            //   <Input
            //     id="first-name"
            //     name="first-name"
            //     placeholder="First name"
            //   ></Input>
            // </FormControl>
            <InputControl
              isRequired
              isDisabled
              id="firstName"
              name="firstName"
              label="First name"
            />
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Registration;
