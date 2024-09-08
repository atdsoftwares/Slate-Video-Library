import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Link as ChakraLink,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginSignupContext } from "../../Context/IndexAllContext";
import { loginHandler } from "../../Services/LoginSignUpPageServices";

function LoginInputs() {
  const { dispatch, email, password } = useLoginSignupContext();
  const navigate = useNavigate();
  const toast = useToast();

  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  // Handle login submission
  function submitLoginData(e) {
    e.preventDefault();
    loginHandler(email, password, dispatch);
    navigate("/explore");
  }

  // Validate the form fields
  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setError("");
      setIsDisabled(false);
    } else {
      setError("All fields must be filled.");
      setIsDisabled(true);
    }
  }, [email, password]);

  // Guest login details
  function setGuestLoginData(e) {
    e.preventDefault();
    const email = "6prankur@gmail.com";
    const password = "12345678";
    const name = "Guest";
    dispatch({ type: "EMAIL", payload: email });
    dispatch({ type: "PASSWORD", payload: password });
    dispatch({ type: "NAME", payload: name });
    toast({
      title: "Guest Login Activated",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={8}
      p={6}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
      bg={"gray.200"}
      
    >
      <Heading as="h3" size="lg" textAlign="center" mb={6}>
        Login Page
      </Heading>
      <form onSubmit={submitLoginData}>
        <VStack spacing={4}>
          {/* Email Input */}
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                dispatch({ type: "EMAIL", payload: e.target.value })
              }
            />
          </FormControl>

          {/* Password Input */}
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                dispatch({ type: "PASSWORD", payload: e.target.value })
              }
              minLength="6"
            />
          </FormControl>

          {/* Error Message */}
          {error && <Text color="red.500">{error}</Text>}

          {/* Submit Button */}
          <Button
            type="submit"
            colorScheme="teal"
            isFullWidth
            isDisabled={isDisabled}
          >
            Login
          </Button>

          {/* Guest Login Button */}
          <Button
            variant="outline"
            colorScheme="teal"
            isFullWidth
            onClick={setGuestLoginData}
          >
            Guest Login
          </Button>
        </VStack>
      </form>

      {/* Signup Link */}
      <Text textAlign="center" mt={4}>
        Not a member?{" "}
        <ChakraLink as={Link} to="/signup" color="teal.500">
          Signup
        </ChakraLink>{" "}
        here
      </Text>
    </Box>
  );
}

export default LoginInputs;
