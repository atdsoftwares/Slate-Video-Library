import { React, toast, axios } from "../Utils/CustomUtils";

export const logoutHandler = () => {
  localStorage.clear();
  toast.success("Logout success!.");
};

export const signUpHandler = async (name, email, password) => {
  try {
    const response = await axios.post(`/api/auth/signup`, {
      name: name,
      email: email,
      password: password,
    });
    // saving the encodedToken in the localStorage
    localStorage.setItem(`token`, response.data.encodedToken);
    toast.success("Signup success!.");
  } catch (error) {
    console.log(error);
  }
};

export const loginHandler = async (email, password, dispatch) => {
  try {
    const response = await axios.post(`/api/auth/login`, {
      email: email,
      password: password,
    });
    dispatch({ type: "LOGINDATA", payload: response.data.foundUser });
    localStorage.setItem(`token`, response.data.encodedToken);
    toast.success(`Welcome!`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
