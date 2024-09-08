import { Link } from "react-router-dom";
import { useExplorePageContext } from "../../Context/IndexAllContext";
import {
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  IconButton,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { MdLogin, MdAccountCircle } from "react-icons/md";

function Header() {
  const { dispatch } = useExplorePageContext();
  const token = localStorage.getItem("token");

  // Theme-based color adjustment
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const inputBgColor = useColorModeValue("white", "gray.700");

  return (
    <Box
      bg={bgColor}
      px={4}
      py={3}
      boxShadow="md"
      position="sticky" // Sticky header
      top={0} // Stick to top of the viewport
      zIndex={1000} // Ensures it stays above other content
      width="100%" // Full width to cover the top
    >
      <Flex alignItems="center">
        {/* Logo */}
        <Link to="/">
          <Flex alignItems="center">
            <img
              src={require("../../assets/playlist.png")}
              alt="logo"
              style={{ marginRight: "8px", height: "40px", width: "40px" }}
            />
            <Text fontSize="2xl" fontWeight="bold" color="teal.500">
              Slate-Videos
            </Text>
          </Flex>
        </Link>

        <Spacer />

        {/* Search Bar */}
        <InputGroup maxW="600px" mx={4}>
          <Input
            placeholder="Search item"
            bg={inputBgColor}
            borderRadius="md"
            onChange={(e) =>
              dispatch({ type: "SEARCHBAR", payload: e.target.value })
            }
            _focus={{ borderColor: "teal.400" }}
          />
          <InputRightElement>
            <IconButton
              icon={<FaSearch />}
              aria-label="Search"
              colorScheme="teal"
              variant="solid"
            />
          </InputRightElement>
        </InputGroup>

        <Spacer />

        {/* Login/Account Button */}
        <div>
          {!token ? (
            <Link to="/login">
              <Button colorScheme="teal" leftIcon={<MdLogin />}>
                Login
              </Button>
            </Link>
          ) : (
            <Link to="/accounts">
              <Button colorScheme="teal" leftIcon={<MdAccountCircle />}>
                Account
              </Button>
            </Link>
          )}
        </div>
      </Flex>
    </Box>
  );
}

export default Header;
