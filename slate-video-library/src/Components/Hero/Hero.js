// import { Link, React } from "react-router-dom";
// import "./Hero.css";
// function Hero() {
//   return (
//     <div>
//       <div className="hero">
//         <span className="hero-text">
//           <span className="hero-heading">Watch </span>
//           <span className="hero-para"> Videos and take notes </span>
//           <span className="hero-para2">
//             Gamify your learning.
//             <Link to="explore">
//               <button className="btn btn-success">Explore </button>
//             </Link>
//           </span>
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import learningIllustration from "../../assets/undraw_online_learning_re_qw08.svg";
function Hero() {
  // Using Chakra's color mode for light/dark theme adaptability
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const btnColorScheme = useColorModeValue("teal", "cyan");

  return (
    <Box
      as="section"
      bg={bgColor}
      py={16}
      px={6}
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="80vh"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="7xl"
        mx="auto"
      >
        {/* Left Content: Text and Call to Action */}
        <Stack spacing={6} maxW="lg" textAlign={{ base: "center", md: "left" }}>
          <Heading as="h1" size="2xl" color={textColor} fontWeight="extrabold">
            Discover, Learn, and Grow
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Dive into a world of interactive learning with videos designed to
            help you take notes, master new skills, and gamify your progress.
          </Text>
          <Text fontSize="lg" color="gray.500">
            Explore new content, build your knowledge, and create your own
            learning path!
          </Text>
          <Link to="/explore">
            <Button
              colorScheme={btnColorScheme}
              size="lg"
              variant="solid"
              alignSelf={{ base: "center", md: "start" }}
            >
              Explore Now
            </Button>
          </Link>
        </Stack>

        {/* Right Content: Hero Image */}
        <Box
          maxW="lg"
          mt={{ base: 8, md: 0 }}
          display="flex"
          justifyContent="center"
        >
          <Image
            src={learningIllustration}
            alt="Learning illustration"
            boxSize={{ base: "200px", md: "400px" }}
            objectFit="cover"
            borderRadius="lg"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Hero;
