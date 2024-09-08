import React from "react";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import {
  Accountdetails,
  Footer,
  Header,
  Sidebar,
} from "../../Components/IndexAllComponents";

function Accountpage() {
  // Adjust sidebar width based on screen size
  const sidebarWidth = useBreakpointValue({ base: "full", md: "250px" });

  return (
    <Box>
      <Header />

      <Flex
        direction={{ base: "column", md: "row" }}
        minHeight="calc(100vh - 60px)" // Adjust based on header/footer height
      >
        <Sidebar width={sidebarWidth} />

        <Box flex="1" p={4}>
          <Accountdetails />
        </Box>
      </Flex>

      <Footer />
    </Box>
  );
}

export default Accountpage;
