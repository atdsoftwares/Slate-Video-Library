// import React from "react";
// import "./Footer.css";

// function Footer() {
//   return (
//     <div>
//       <footer className="footer-items">
//         <div className="h4">
//           Made with <code> ❤️ </code>by Prankur Pandey
//         </div>
//         <div className="social-media-links">
//           <div className="github">
//             <i className="fa fa-github" />
//           </div>
//           <div className="twitter">
//             <i className="fa fa-twitter" />
//           </div>
//           <div className="Linkedin">
//             <i className="fa fa-linkedin" />
//           </div>
//         </div>
//         <div className="h4">© 2021 Agri UI</div>
//       </footer>
//     </div>
//   );
// }

// export default Footer;

import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box
      bg={bgColor}
      color={textColor}
      py={10}
      position={"fixed"}
      bottom={0}
      left={0}
      right={0}
      height={"5rem"}
      zIndex={999}
    >
      <Container
        as={Stack}
        maxW="7xl"
        spacing={4}
        justify="center"
        align="center"
      >
        {/* Footer Links */}
        <Stack direction="row" spacing={6}>
          <Link href="/" _hover={{ textDecoration: "none", color: "teal.500" }}>
            Home
          </Link>
          <Link
            href="/explore"
            _hover={{ textDecoration: "none", color: "teal.500" }}
          >
            Explore
          </Link>
          <Link
            href="/playlists"
            _hover={{ textDecoration: "none", color: "teal.500" }}
          >
            Playlists
          </Link>
          <Link
            href="/about"
            _hover={{ textDecoration: "none", color: "teal.500" }}
          >
            About Us
          </Link>
        </Stack>

        {/* Social Icons */}
        <Stack direction="row" spacing={6}>
          <IconButton
            as="a"
            href="https://github.com/yourusername"
            aria-label="GitHub"
            icon={<FaGithub />}
            size="lg"
            variant="ghost"
            _hover={{ bg: "teal.500", color: "white" }}
          />
          <IconButton
            as="a"
            href="https://twitter.com/yourusername"
            aria-label="Twitter"
            icon={<FaTwitter />}
            size="lg"
            variant="ghost"
            _hover={{ bg: "teal.500", color: "white" }}
          />
          <IconButton
            as="a"
            href="https://linkedin.com/in/yourusername"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
            variant="ghost"
            _hover={{ bg: "teal.500", color: "white" }}
          />
        </Stack>

        {/* Footer Text */}
        <Text fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
