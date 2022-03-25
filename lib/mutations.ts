import fetcher from "./fetcher";

export const auth = (
  mode: "signin" | "signup",
  body: {
    username: string;
    password: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
  }
) => {
  return fetcher(`/${mode}`, body);
};

export const signout = (mode: "signout") => {
  return fetcher(`/${mode}`);
};
