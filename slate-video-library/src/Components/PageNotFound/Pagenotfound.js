import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  Button,
  Heading,
  VStack,
  Container,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Pagenotfound() {
  const [counter, setCounter] = useState(12);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 15000);

    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, [counter, navigate]);

  return (
    <Box textAlign="center" py="6" px="4" bg="gray.50" minH="100vh">
      <Header />
      <Container centerContent>
        <VStack spacing={6}>
          <Heading as="h1" size="2xl" color="teal.500">
            Page Not Found
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Oops! The page you're looking for does not exist.
          </Text>
          <Text fontSize="lg" color="gray.500">
            You will be redirected to the homepage in {counter} seconds.
          </Text>
          <Image
            src="https://svgshare.com/i/hXD.svg"
            alt="404"
            maxW="400px"
            mt="8"
          />
          <Button colorScheme="teal" onClick={() => navigate("/")}>
            Go to Homepage
          </Button>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
}

export default Pagenotfound;
