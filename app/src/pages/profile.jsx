import { Card, Input, Button, Typography } from "@material-tailwind/react";
import AuthProvider, { AuthContext } from "../Authentication/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cards() {
  const { auth, error, setError, update } = useContext(AuthContext);
  const navigate = useNavigate();
  const { fullName, email, dateOfBirth, address, postcode, id } = auth;
  const [message, setMessage] = useState(null);
  const handleSubmit = (form) => {
    setError(false);
    const formData = new FormData(form.target);
    formData.append("userId", id);
    console.log(auth);
    update(formData).then(() => {
      return setMessage("Profile updated successfully");
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
          Update Profile
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Enter your details to update.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={(e) => {
            e.preventDefault();
            return handleSubmit(e);
          }}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              name="fullname"
              defaultValue={fullName}
              onChange={() => setMessage(null)}
            />
            <Input
              size="lg"
              label="Email"
              name="email"
              defaultValue={email}
              onChange={() => setMessage(null)}
            />

            <Input
              size="lg"
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              defaultValue={dateOfBirth}
              onChange={() => setMessage(null)}
            />
            <Input
              size="lg"
              label="Address"
              name="address"
              defaultValue={address}
              onChange={() => setMessage(null)}
            />
            <Input
              size="lg"
              label="Postal Adress"
              name="postcode"
              defaultValue={postcode}
              onChange={() => setMessage(null)}
            />
            <Input type="password" size="lg" label="Password" name="password" />
          </div>
          <Button className="mt-6 bg-green-600" fullWidth type="submit">
            Update
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Nothing to change?{" "}
            <Button
              className="font-medium text-blue-500 transition-colors hover:text-blue-700 !px-0 !py-0"
              variant="text"
              onClick={() => navigate("/")}
            >
              Home
            </Button>
          </Typography>
        </form>
        <span className="text-center text-red-900">{error && error}</span>
        <span className="text-center text-green-900">{!error && message}</span>
      </Card>
    </AuthProvider>
  );
}

export default function Profile() {
  return (
    <main className="flex py-8 min-h-screen justify-center items-center bg-blue-gray-50">
      <Cards />
    </main>
  );
}
