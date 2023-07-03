import { createContext, useEffect, useState } from "react";
import useLocalStorage from "./use-local-storage";
import { phpServer } from "../components/_props";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useLocalStorage("user", null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [auth, setAuth] = useLocalStorage(null);

  const signIn = async (email, password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("login", true);

    const request = await fetch(phpServer, {
      method: "POST",
      body: formData,
    });

    const response = await request.json();
    console.log(response);

    // if error
    if (request.status !== 200) {
      return setError(response["error"]);
    }

    // if success
    setCurrentUser(response["fullName"]);
    setAuth(response);
    return "/";
  };

  const signUp = async (formData) => {
    formData.append("signup", true);
    const request = await fetch(phpServer, {
      method: "POST",
      body: formData,
    });

    const response = await request.json();
    console.log(response);

    // if error
    if (request.status !== 200) {
      return setError(response["error"]);
    }

    // if success
    setCurrentUser(response["fullName"]);
    console.log(response);
    setAuth(response);
    return "/";
  };

  const update = async (formData) => {
    formData.append("update", true);
    const request = await fetch(phpServer, {
      method: "POST",
      body: formData,
    });

    const response = await request.json();
    console.log(response);

    // if error
    if (request.status !== 200) {
      return setError(response["error"]);
    }

    // if success
    setCurrentUser(response["fullName"]);
    setAuth(response);
    return;
  };

  const signOut = () => {
    setCurrentUser(false);
    setAuth(null);
    localStorage.clear();
    return;
  };

  useEffect(() => {
    setCurrentUser(currentUser);
    setLoading(false);

    return;
  }, [auth, currentUser, setCurrentUser]);

  const value = {
    currentUser,
    loading,
    error,
    auth,
    setError,
    setAuth,
    signIn,
    setCurrentUser,
    signUp,
    signOut,
    update,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
