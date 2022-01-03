import fetcher from "./fetcher";

export const auth = (
  mode: "signin" | "signup",
  body: { username: string; password: string }
) => {
  return fetcher(`/${mode}`, body);
};
