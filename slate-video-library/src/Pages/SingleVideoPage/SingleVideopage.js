import React from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import {
  Footer,
  Header,
  Sidebar,
  SingleVideo,
} from "../../Components/IndexAllComponents";

function SingleVideopage() {
  const bgColor = useColorModeValue("gray.50", "gray.800");

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Header */}
      <Header />

      <Flex direction={{ base: "column", md: "row" }} minH="calc(100vh - 4rem)">
        {/* Sidebar */}
        <Box
          as="aside"
          width={{ base: "full", md: "15rem" }}
          bg={useColorModeValue("white", "gray.700")}
          p={4}
          boxShadow="md"
        >
          <Sidebar />
        </Box>

        {/* Single Video */}
        <Box
          as="main"
          flex="1"
          p={6}
          overflowY="auto"
          bg={useColorModeValue("gray.100", "gray.900")}
        >
          <SingleVideo />
        </Box>
      </Flex>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default SingleVideopage;
