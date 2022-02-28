import useSWR from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const useRegData = (dataUserId) => {
  const { data, error } = useSWR(`/regdata?userId=${dataUserId}`, fetcher);
  console.log("userRegData dataUserId", dataUserId);
  console.log("useRegData Data", data);
  return {
    response: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const useUser = (dataUserId) => {
  const { data, error } = useSWR(`/users/${dataUserId}`, fetcher);
  console.log("Single user retrieve", dataUserId);
  return {
    userData: data,
    isLoading: !data && !error,
    isError: error,
  };
};
