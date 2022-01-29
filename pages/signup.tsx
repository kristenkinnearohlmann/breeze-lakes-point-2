import AuthForm from "../components/authForm";
import HeadMeta from "../pages/partials/headMeta";

const Signup = () => {
  return (
    <div>
      <HeadMeta subtitle="Sign Up" />
      <AuthForm mode="signup" />
    </div>
  );
};

Signup.authPage = true;

export default Signup;
