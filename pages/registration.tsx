import { Box, Flex, Text } from "@chakra-ui/layout";
import { Formik } from "formik";
import * as Yup from "yup";
import UserHeader from "../components/userHeader";
import { useMe } from "../lib/hooks";
import { InputControl, SubmitButton } from "formik-chakra-ui";

const Registration = () => {
  const { user } = useMe();

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
    userName: "",
    firstName: "",
    middleName: "",
    lastName: "",
    preferredName: "",
  };

  const userValues = {
    userName: user?.username || null,
    firstName: user?.firstName || null,
    middleName: null,
    lastName: user?.lastName || null,
    preferredName: null,
  };

  const getData = () => (user?.id ? userValues : initialValues);

  const validationSchema = Yup.object({
    userName: Yup.string().required(),
    firstName: Yup.string().required(),
    middleName: Yup.string().nullable(),
    lastName: Yup.string().required(),
    preferredName: Yup.string().nullable(),
  });

  const onSubmit = (values) => {
    event.preventDefault;
    console.log("Submitted values");
    console.log(values);
  };

  console.log(user);

  return (
    <div>
      <UserHeader user={user}></UserHeader>
      <Box paddingBottom="15px">
        <Text paddingBottom="1rem">
          Working for our event is a one-of-a-kind experience! Please complete
          or update these registration details prior to visiting our office.
        </Text>
        <Text paddingBottom="1rem">
          We will meet with you to review this information and look for open
          interviews that match your unique personal contribution.
        </Text>
      </Box>
      <Box>
        <Formik
          initialValues={getData()}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {({ handleSubmit, values, errors }) => (
            <Box as="form" onSubmit={handleSubmit as any}>
              <Box marginBottom="1rem">
                <Text
                  borderBottom="1px solid #fff"
                  fontSize="2xl"
                  marginBottom="1rem"
                  paddingBottom="10px"
                >
                  Login Information
                </Text>
                <Flex>
                  <InputControl
                    id="userName"
                    name="userName"
                    label="User name"
                  />
                </Flex>
              </Box>
              <Box marginBottom="1rem">
                <Text
                  borderBottom="1px solid #fff"
                  fontSize="2xl"
                  marginBottom="1rem"
                  paddingBottom="10px"
                >
                  Personal Information
                </Text>
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
              </Box>
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
