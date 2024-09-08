import { Link } from "react-router-dom";
import {
  Box,
  Image,
  Heading,
  VStack,
  AspectRatio,
  HStack,
} from "@chakra-ui/react";
import {
  useHistoryContext,
  useSingleVideoContext,
} from "../../Context/IndexAllContext";
import { addToHistoryFn } from "../../Services/HistoryPageServices";

function Videocard({ video }) {
  const { _id, title, videoUrl, creator_pic } = video;
  const { setHistoryFn } = useHistoryContext();
  const { videoData } = useSingleVideoContext();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      maxW="sm"
      height={"25rem"}
      m={4}
      p={4}
      marginBottom={"1rem"}
      width={"100%"}
      bg={"gray.800"}
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      _hover={{ transform: "scale(1.1)", transition: "all 0.5s ease-in-out" }}
    >
      <AspectRatio ratio={16 / 9}>
        <iframe src={videoUrl} title={title} allowFullScreen />
      </AspectRatio>
      <Link to={`/explore/${_id}`}>
        <HStack
          p="4"
          spacing="4"
          onClick={() => addToHistoryFn(videoData, setHistoryFn)}
          alignItems="center"
          justifyContent="space-between"
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.5s ease-in-out",
          }}
          display={"flex"}
        >
          <Image
            boxSize="50px"
            borderRadius="full"
            src={creator_pic}
            alt="Creator"
          />
          <VStack align="start" spacing="1">
            <Heading size="sm" color={"white"}>
              {title}
            </Heading>
          </VStack>
        </HStack>
      </Link>
    </Box>
  );
}

export default Videocard;
