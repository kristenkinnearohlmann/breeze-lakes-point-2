import AuthForm from "../components/authForm";
import HeadMeta from "./partials/headMeta";
// TODO: Resolve authentication issues
const Signin = () => {
  return (
    <div>
      <HeadMeta subtitle="Sign In" />
      <AuthForm mode="signin" />
    </div>
  );
};

Signin.authPage = true;

export default Signin;
