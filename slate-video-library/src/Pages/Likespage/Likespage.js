import React, { useEffect } from "react";
import {
  Footer,
  Header,
  Sidebar,
  SmallVideoCards,
} from "../../Components/IndexAllComponents";
import { useLikeContext } from "../../Context/IndexAllContext";
import {
  getLikedVideosFn,
  removeLikedVideosFn,
} from "../../Services/LikesPageServices";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

function Likespage() {
  const { getLikedVideos, setLikesFn } = useLikeContext();

  useEffect(() => {
    getLikedVideosFn(setLikesFn);
  }, []);

  // Color mode adjustments for light/dark themes
  const bg = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box>
      {/* Sticky Header */}
      <Header />

      <Flex direction={{ base: "column", md: "row" }} minH="100vh">
        {/* Sidebar */}
        <Sidebar />

        <Box flex="1" p={4} maxW="1200px" mx="auto">
          {/* Check if there are liked videos */}
          {getLikedVideos.length === 0 ? (
            <Heading
              as="h3"
              size="lg"
              textAlign="center"
              mt={6}
              color={textColor}
            >
              You haven’t liked any videos yet.
            </Heading>
          ) : (
            // Render liked videos
            <Flex direction="column" gap={4}>
              {getLikedVideos.map((like) => (
                <Flex
                  key={like._id}
                  align="center"
                  justify="space-between"
                  p={4}
                  bg={bg}
                  borderRadius="md"
                  boxShadow="md"
                >
                  {/* Video Card */}
                  <SmallVideoCards props={like.videoUrl} />

                  {/* Delete Button */}
                  <IconButton
                    icon={<MdDelete />}
                    aria-label="Remove from liked videos"
                    colorScheme="red"
                    onClick={() => removeLikedVideosFn(like._id, setLikesFn)}
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

export default Likespage;
