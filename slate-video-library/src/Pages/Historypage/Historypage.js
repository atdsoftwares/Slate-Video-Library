import { useEffect } from "../../Utils/CustomUtils";
import {
  useExplorePageContext,
  useHistoryContext,
} from "../../Context/IndexAllContext";

import {
  Footer,
  Header,
  Sidebar,
  SmallVideoCards,
} from "../../Components/IndexAllComponents";
import {
  getHistoryFn,
  removeAllHistoryFn,
  removeVideoFromHistoryFn,
} from "../../Services/HistoryPageServices";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

function Historypage() {
  const { getHistory, setHistoryFn } = useHistoryContext();
  const { finalData } = useExplorePageContext();

  useEffect(() => {
    getHistoryFn(setHistoryFn);
  }, [finalData]);

  // Move the `useColorModeValue` hook calls outside of conditional rendering
  const bg = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const buttonBg = useColorModeValue("gray.50", "gray.700");

  return (
    <Box>
      {/* Sticky Header */}
      <Header />

      <Flex direction={{ base: "column", md: "row" }} minH="100vh">
        {/* Sidebar */}
        <Sidebar />

        <Box flex="1" p={4} maxW="1200px" mx="auto">
          {/* Clear History Button */}
          <Button
            colorScheme="red"
            onClick={() => removeAllHistoryFn(setHistoryFn)}
            mb={4}
            isDisabled={getHistory.length === 0}
          >
            Clear History
          </Button>

          {/* Check if history is empty */}
          {getHistory.length === 0 ? (
            <Heading
              as="h3"
              size="lg"
              textAlign="center"
              mt={6}
              color={textColor}
            >
              Your history is empty. Watch something to see it here.
            </Heading>
          ) : (
            // Render history items
            <Flex direction="column" gap={4}>
              {getHistory.map((history) => (
                <Flex
                  key={history._id}
                  align="center"
                  justify="space-between"
                  p={4}
                  bg={bg}
                  borderRadius="md"
                  boxShadow="md"
                >
                  {/* Video Card */}
                  <SmallVideoCards props={history.videoUrl} />

                  {/* Delete Button */}
                  <IconButton
                    icon={<MdDelete />}
                    aria-label="Remove from history"
                    colorScheme="red"
                    onClick={() =>
                      removeVideoFromHistoryFn(history._id, setHistoryFn)
                    }
                  />
                </Flex>
              ))}
            </Flex>
          )}
        </Box>
      </Flex>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default Historypage;
