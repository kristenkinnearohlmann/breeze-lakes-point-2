import { Box, Flex, Text } from "@chakra-ui/layout";
// import { Input } from "@chakra-ui/react";
import { Formik } from "formik";
// import { FormControl, FormLabel } from "@chakra-ui/form-control";
import * as Yup from "yup";
import UserHeader from "../components/userHeader";
import { useMe } from "../lib/hooks";
// import { EventEmitter } from "stream";
// import { eventNames } from "process";
import { InputControl, SubmitButton } from "formik-chakra-ui";

const Registration = () => {
  const { user } = useMe();
  console.log(user);

  const stateAbbrevs = [
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const initialValues = {
    firstName: user.firstName || "",
    middleName: "",
    lastName: user.lastName || "",
    preferredName: "",
  };

  console.log(initialValues);
  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    middleName: Yup.string(),
    lastName: Yup.string().required(),
    preferredName: Yup.string(),
  });

  const onSubmit = (values) => {
    event.preventDefault;
    console.log("Submitted values");
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
                  id="middleName"
                  name="middleName"
                  label="Middle name"
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
              <Box paddingTop="10px">
                <SubmitButton>Submit</SubmitButton>
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Registration;
