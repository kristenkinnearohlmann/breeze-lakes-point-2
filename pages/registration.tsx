import { Box, Flex, Text } from "@chakra-ui/layout";
import { Formik } from "formik";
import * as Yup from "yup";
import UserHeader from "../components/userHeader";
import { useMe, useUser } from "../lib/hooks";
import { InputControl, SubmitButton, SelectControl } from "formik-chakra-ui";
import { Checkbox } from "@chakra-ui/react";
import { stateAbbreviations } from "../assets/stateAbbreviations";

const Registration = ({ selectedUserId }: { selectedUserId: string }) => {
  const { user } = useMe();
  const dataUserId = selectedUserId || user?.id;
  const { userData } = useUser(dataUserId);
  const colorScheme = {
    dropdownBgColor: "gray",
  };

  const initialValues = {
    firstName: "",
    middleName: "",
    noMiddleName: false,
    lastName: "",
    preferredName: "",
    pronoun: 0,
    age: 0,
    ethnicity: "",
    phone1: "",
    phone2: "",
  };

  const userValues = {
    firstName: user?.firstName || "",
    middleName: user?.middleName || "",
    noMiddleName: user?.noMiddleName || false.valueOf,
    lastName: user?.lastName || "",
    preferredName: user?.preferredName || "",
    pronoun: user?.pronoun || "",
    age: user?.age || "",
    ethnicity: user?.ethnicity || "",
    phone1: user?.phone1 || "",
    phone2: user?.phone2 || "",
  };

  const getData = () => (user?.id ? userValues : initialValues);

  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    middleName: Yup.string().nullable(),
    lastName: Yup.string().required(),
    preferredName: Yup.string().nullable(),
    pronoun: Yup.string(),
    age: Yup.string(),
    ethnicity: Yup.string(),
    phone1: Yup.string().required(),
    phone2: Yup.string().nullable(),
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
                  <Flex flexFlow="column nowrap" fontWeight="500" width="50rem">
                    <label htmlFor="preferredName">
                      Preferred name
                      <br />
                      (the name you would like to use in conversation)
                    </label>
                    <InputControl
                      id="preferredName"
                      name="preferredName"
                      width="50rem"
                    />
                  </Flex>
                  <SelectControl
                    name="pronoun"
                    id="pronoun"
                    label="Pronoun"
                    marginLeft="10px"
                    width="10rem"
                  >
                    <option style={{ backgroundColor: "gray" }} value="">
                      &nbsp;
                    </option>
                    <option style={{ backgroundColor: "gray" }} value="SheHer">
                      she/her
                    </option>
                    <option style={{ backgroundColor: "gray" }} value="HeHim">
                      he/him
                    </option>
                    <option
                      style={{ backgroundColor: "gray" }}
                      value="TheyThem"
                    >
                      they/them
                    </option>
                  </SelectControl>
                  <SelectControl
                    name="age"
                    id="age"
                    label="Age"
                    marginLeft="10px"
                    width="8rem"
                  >
                    <option style={{ backgroundColor: "gray" }} value="">
                      &nbsp;
                    </option>
                    <option
                      style={{ backgroundColor: "gray" }}
                      value="UnderSixteen"
                    >
                      Under 16
                    </option>
                    <option
                      style={{ backgroundColor: "gray" }}
                      value="SixteenPlus"
                    >
                      16+
                    </option>
                    <option
                      style={{ backgroundColor: "gray" }}
                      value="EighteenPlus"
                    >
                      18+
                    </option>
                    <option
                      style={{ backgroundColor: "gray" }}
                      value="TwentyonePlus"
                    >
                      21+
                    </option>
                  </SelectControl>
                  <SelectControl
                    name="ethnicity"
                    id="ethnicity"
                    label="Ethnicity"
                    marginLeft="10px"
                    width="12rem"
                  >
                    <option style={{ backgroundColor: "gray" }} value="Asian">
                      Asian
                    </option>
                    <option style={{ backgroundColor: "gray" }} value="Black">
                      Black
                    </option>
                    <option
                      style={{ backgroundColor: "gray" }}
                      value="HispanicLatino"
                    >
                      Hispanic or Latino
                    </option>
                    <option
                      style={{ backgroundColor: "gray" }}
                      value="NativeIndigenous"
                    >
                      Native or Indigenous
                    </option>
                    <option style={{ backgroundColor: "gray" }} value="White">
                      White
                    </option>
                    <option
                      style={{ backgroundColor: "gray" }}
                      value="NotSpecified"
                    >
                      Not specified
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
                  Contact Information
                </Text>
                <Flex>
                  <InputControl
                    isRequired
                    id="phone1"
                    name="phone1"
                    label="Best Contact Phone Number"
                    inputMode="tel"
                  />
                  <InputControl
                    isRequired
                    id="phone2"
                    name="phone2"
                    label="Alternate Contact Phone Number"
                    inputMode="tel"
                    marginLeft="10px"
                  />
                </Flex>
                <Flex>
                  <InputControl
                    id="email"
                    name="email"
                    label="Email"
                    inputMode="email"
                  />
                </Flex>
                <Flex>
                  {/* TODO: Use Position Stack forward geocoding for address? */}
                  <SelectControl
                    name="state"
                    id="state"
                    label="State"
                    width="15rem"
                  >
                    <option
                      style={{ backgroundColor: colorScheme.dropdownBgColor }}
                      value=""
                    >
                      &nbsp;
                    </option>
                    {stateAbbreviations.map((abbrev) => (
                      <option
                        style={{ backgroundColor: colorScheme.dropdownBgColor }}
                        value={abbrev}
                      >
                        {abbrev}
                      </option>
                    ))}
                  </SelectControl>
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
