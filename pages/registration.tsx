import { Box, Flex, Text } from "@chakra-ui/layout";
import { Formik } from "formik";
import * as Yup from "yup";
import UserHeader from "../components/userHeader";
import { useMe, useUser } from "../lib/hooks";
import { InputControl, SubmitButton, SelectControl } from "formik-chakra-ui";
import { Checkbox } from "@chakra-ui/react";

const Registration = ({ selectedUserId }: { selectedUserId: string }) => {
  const { user } = useMe();
  const dataUserId = selectedUserId || user?.id;
  const { userData } = useUser(dataUserId);
  console.log("New useUser", userData);

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
    firstName: "",
    middleName: "",
    noMiddleName: false,
    lastName: "",
    preferredName: "",
    pronoun: 0,
    age: 0,
  };

  const userValues = {
    firstName: user?.firstName || "",
    middleName: user?.middleName || "",
    noMiddleName: user?.noMiddleName || false.valueOf,
    lastName: user?.lastName || "",
    preferredName: "",
    pronoun: user?.pronoun || 0,
    age: user?.age || 0,
  };

  const getData = () => (user?.id ? userValues : initialValues);

  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    middleName: Yup.string().nullable(),
    lastName: Yup.string().required(),
    preferredName: Yup.string().nullable(),
    pronoun: Yup.number(),
    age: Yup.number(),
  });

  const onSubmit = (values) => {
    event.preventDefault;
    console.log("Submitted values");
    console.log(values);
  };

  return (
    <div>
      <UserHeader user={user}></UserHeader>
      <Box marginBottom="15px">
        {user?.role === "User" ? (
          <div>
            <Text marginBottom="1rem">
              Working for our event is a one-of-a-kind experience! Please
              complete or update these registration details prior to visiting
              our office.
            </Text>
            <Text marginBottom="1rem">
              We will meet with you to review this information and look for open
              interviews that match your unique personal contribution.
            </Text>
          </div>
        ) : (
          <Text>Review and update information for a user.</Text>
        )}
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
                  Personal Information
                </Text>
                <Flex marginBottom="10px">
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
                    isDisabled={user?.noMiddleName}
                  />
                  {user?.noMiddleName ? (
                    <Checkbox margin="5px" isChecked={user?.noMiddleName}>
                      No middle name
                    </Checkbox>
                  ) : null}
                  <InputControl
                    isRequired
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    marginRight="10px"
                  />
                </Flex>
                <Flex>
                  <InputControl
                    id="preferredName"
                    name="preferredName"
                    label="Preferred name (the name you would like to use in conversation)"
                  />
                  <SelectControl
                    name="pronoun"
                    id="pronoun"
                    label="Pronoun"
                    marginLeft="10px"
                  >
                    <option style={{ backgroundColor: "gray" }} value="0">
                      &nbsp;
                    </option>
                    <option style={{ backgroundColor: "gray" }} value="1">
                      she/her
                    </option>
                    <option style={{ backgroundColor: "gray" }} value="2">
                      he/him
                    </option>
                    <option style={{ backgroundColor: "gray" }} value="3">
                      they/them
                    </option>
                  </SelectControl>
                </Flex>
                <Flex>
                  <SelectControl name="age" id="age" label="Age">
                    <option style={{ backgroundColor: "gray" }} value="0">
                      &nbsp;
                    </option>
                    <option style={{ backgroundColor: "gray" }} value="1">
                      Under 16
                    </option>
                    <option style={{ backgroundColor: "gray" }} value="2">
                      16+
                    </option>
                    <option style={{ backgroundColor: "gray" }} value="3">
                      18+
                    </option>
                    <option style={{ backgroundColor: "gray" }} value="4">
                      21+
                    </option>
                  </SelectControl>
                </Flex>
              </Box>
              <Box marginBottom="1rem">
                <Text
                  borderBottom="1px solid #fff"
                  fontSize="2xl"
                  marginBottom="1rem"
                  paddingBottom="10px"
                >
                  Remaining Form Fields
                </Text>
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
