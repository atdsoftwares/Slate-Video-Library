import { NavLink as Link } from "react-router-dom";
import { Box, Flex, Text, Icon, useColorModeValue } from "@chakra-ui/react";
import {
  MdHome,
  MdExplore,
  MdQueue,
  MdThumbUp,
  MdWatchLater,
  MdHistory,
} from "react-icons/md";

function Sidebar() {
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  return (
    <Box
      as="aside"
      width="250px"
      p={4}
      bg={bgColor}
      color="black"
      height="100vh"
      position="fixed"
      left={0}
      top={0}
      marginTop={"60px"}
      boxShadow="md"
    >
      {/* Home Link */}
      <Link to="/" exact>
        <Flex
          align="center"
          p={2}
          mb={4}
          _hover={{ bg: "gray.800", borderRadius: "md" }}
        >
          <Icon as={MdHome} w={6} h={6} mr={3} />
          <Text>Home</Text>
        </Flex>
      </Link>

      {/* Explore Link */}
      <Link to="/explore">
        <Flex
          align="center"
          p={2}
          mb={4}
          _hover={{ bg: "gray.700", borderRadius: "md" }}
        >
          <Icon as={MdExplore} w={6} h={6} mr={3} />
          <Text>Explore</Text>
        </Flex>
      </Link>

      {/* Playlists Link */}
      <Link to="/playlists">
        <Flex
          align="center"
          p={2}
          mb={4}
          _hover={{ bg: "gray.700", borderRadius: "md" }}
        >
          <Icon as={MdQueue} w={6} h={6} mr={3} />
          <Text>Playlists</Text>
        </Flex>
      </Link>

      {/* Likes Link */}
      <Link to="/likes">
        <Flex
          align="center"
          p={2}
          mb={4}
          _hover={{ bg: "gray.700", borderRadius: "md" }}
        >
          <Icon as={MdThumbUp} w={6} h={6} mr={3} />
          <Text>Likes</Text>
        </Flex>
      </Link>

      {/* Watch Later Link */}
      <Link to="/watchlater">
        <Flex
          align="center"
          p={2}
          mb={4}
          _hover={{ bg: "gray.700", borderRadius: "md" }}
        >
          <Icon as={MdWatchLater} w={6} h={6} mr={3} />
          <Text>Watch Later</Text>
        </Flex>
      </Link>

      {/* History Link */}
      <Link to="/history">
        <Flex
          align="center"
          p={2}
          mb={4}
          _hover={{ bg: "gray.700", borderRadius: "md" }}
        >
          <Icon as={MdHistory} w={6} h={6} mr={3} />
          <Text>History</Text>
        </Flex>
      </Link>
    </Box>
  );
}

export default Sidebar;
