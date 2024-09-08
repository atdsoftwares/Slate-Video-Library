import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLoginSignupContext } from "../../Context/IndexAllContext";
import { signUpHandler } from "../../Services/LoginSignUpPageServices";

function Signupinputs() {
  const { dispatch, name, email, password } = useLoginSignupContext();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const toast = useToast();

  useEffect(() => {
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      setError("");
      setIsDisabled(false);
    } else {
      setError("All fields must be filled.");
      setIsDisabled(true);
    }
  }, [name, email, password]);

  function submitSignUpData(e) {
    e.preventDefault();
    signUpHandler(name, email, password);
    navigate("/login");
    toast({
      title: "Signup successful.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <Flex
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
      marginTop={"5rem"}
      marginLeft={"27rem"}
    >
      <Box
        p={8}
        maxWidth="400px"
        borderWidth={1}
        borderRadius={8}
        // boxShadow="lg"
        bg={"gray.200"}
        width="100%"
      >
        <Heading mb={6} textAlign="center" fontSize="2xl">
          Signup Page
        </Heading>
        <form onSubmit={submitSignUpData}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  dispatch({ type: "NAME", payload: e.target.value })
                }
              />
            </FormControl>
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
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  dispatch({ type: "PASSWORD", payload: e.target.value })
                }
                autoComplete="on"
                minLength={6}
              />
            </FormControl>
            <Text color="red.500">{error}</Text>
            <Button
              colorScheme="teal"
              width="full"
              type="submit"
              isDisabled={isDisabled}
            >
              Signup
            </Button>
          </VStack>
        </form>
        <Text mt={4} textAlign="center">
          Already a member?{" "}
          <ChakraLink as={Link} to="/login" color="teal.500">
            Login here
          </ChakraLink>
        </Text>
      </Box>
    </Flex>
  );
}

export default Signupinputs;
