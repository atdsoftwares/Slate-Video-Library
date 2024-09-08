import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import {
  Footer,
  Header,
  Hero,
  Sidebar,
} from "../../Components/IndexAllComponents";

function Homepage() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {/* Header */}
      <Header />

      <Flex
        flex="1"
        as="main"
        direction={{ base: "column", md: "row" }}
        bg="gray.50"
      >
        {/* Sidebar */}
        <Box
          as="aside"
          width={{ base: "full", md: "15rem" }}
          bg="white"
          p={4}
          boxShadow="md"
          display={{ base: "none", md: "block" }}
        >
          <Sidebar />
        </Box>

        {/* Hero Section */}
        <Box
          flex="1"
          p={6}
          bg="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="md"
        >
          <Hero />
        </Box>
      </Flex>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default Homepage;
