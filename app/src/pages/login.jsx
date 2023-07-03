import { useContext, useEffect, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../Authentication/AuthContext";

function Cards() {
  const { signIn, setError, error, currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    currentUser && navigate("/");
    setError(false);
  }, [email, password, setError, currentUser, navigate]);

  const handleFormSubmit = () => {
    signIn(email, password).then((e) => {
      navigate(e);
    });
  };

  return (
    <AuthProvider>
      <Card
        color="transparent"
        shadow={true}
        className="px-4 py-4 shadow-2xl bg-white"
      >
        <Typography variant="h4" color="blue-gray" className="text-center">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Welcome back
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={(e) => {
            e.preventDefault();
            return handleFormSubmit(e);
          }}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <Input
              type="password"
              size="lg"
              name="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
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
                Remember password
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" type="submit" fullWidth role="submit">
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              to={"/signup"}
            >
              Sign up
            </Link>
          </Typography>
          <Typography color="red" className="text-center font-normal">
            {error && error}
          </Typography>
        </form>
      </Card>
    </AuthProvider>
  );
}

export default function Login() {
  return (
    <main className="flex min-h-screen justify-center items-center bg-blue-gray-50">
      <Cards />
    </main>
  );
}
