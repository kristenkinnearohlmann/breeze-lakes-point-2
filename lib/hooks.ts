import useSWR from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);
  console.log("In useMe", data);
  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const useRegData = () => {
  const { data, error } = useSWR("/regdata", fetcher);
  console.log("In useRegData", data);
  return {
    response: data,
    isLoading: !data && !error,
    isError: error,
  };
};
