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

export const useUser = (dataUserId) => {
  const { data, error } = useSWR(`/users/${dataUserId}`, fetcher);
  console.log("Single user retrieve", dataUserId);
  return {
    userData: data,
    isLoading: !data && !error,
    isError: error,
  };
};

// hooks: useMe calls /me route

// /me: is an api route that imports validateRoute from lib auth, passes args to it and returning result

// auth: a file in lib that defines the validateRoute function as a  closure and does the database read
