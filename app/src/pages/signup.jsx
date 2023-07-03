import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../Authentication/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Cards() {
  const { signUp, error, setError } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (form) => {
    setError(false);
    const formData = new FormData(form.target);
    signUp(formData).then((e) => navigate(e));
  };

  return (
    <AuthProvider>
      <Card
        color="transparent"
        shadow={true}
        className="px-4 py-4 shadow-2xl bg-white"
      >
        <Typography variant="h4" color="blue-gray" className="text-center">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Enter your details to register.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={(e) => {
            e.preventDefault();
            return handleSubmit(e);
          }}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" name="fullname" required />
            <Input size="lg" label="Email" name="email" required />
            <Input
              size="lg"
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              required
            />
            <Input size="lg" label="Address" name="address" required />
            <Input size="lg" label="Postal Adress" name="postcode" required />
            <Input
              type="password"
              size="lg"
              label="Password"
              name="password"
              required
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a href="#" className="font-medium text-blue-500">
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            required
          />
          <Button className="mt-6" fullWidth type="submit">
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              to={"/login"}
            >
              Login
            </Link>
          </Typography>
        </form>
        <span className="text-center text-red-900">{error && error}</span>
      </Card>
    </AuthProvider>
  );
}

export default function Signup() {
  return (
    <main className="flex py-8 min-h-screen justify-center items-center bg-blue-gray-50">
      <Cards />
    </main>
  );
}
