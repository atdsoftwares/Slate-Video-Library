import {
  Box,
  VStack,
  HStack,
  Image,
  Heading,
  IconButton,
  AspectRatio,
} from "@chakra-ui/react";
import { FaThumbsUp, FaClock, FaPen } from "react-icons/fa";
import {
  useSingleVideoContext,
  useWatchLaterContext,
  useLikeContext,
} from "../../Context/IndexAllContext";
import { addToLikesFn } from "../../Services/LikesPageServices";
import { addToWatchLaterVideosFn } from "../../Services/WatchLaterServices";
import { useParams } from "../../Utils/CustomUtils";
import { ModalPlaylist, NoteTaking } from "../IndexAllComponents";

function SingleVideo() {
  const { videoData, setVideoId, toggleNotesApp } = useSingleVideoContext();
  const { setWatchLaterFn } = useWatchLaterContext();
  const { setLikesFn } = useLikeContext();
  const { _id } = useParams();

  setVideoId(_id);

  return (
    <Box p="4" maxW="800px" mx="auto">
      {/* Video Embed */}
      <AspectRatio ratio={16 / 9} mb="4">
        <iframe title="video" src={videoData.videoUrl} allowFullScreen></iframe>
      </AspectRatio>

      {/* Video Details */}
      <VStack align="start" spacing="4">
        <HStack spacing="4">
          <Image
            src={videoData.creator_pic}
            alt="creator"
            boxSize="50px"
            borderRadius="full"
          />
          <VStack align="start" spacing="0">
            <Heading size="md">{videoData.title}</Heading>
            <Heading size="sm" color="gray.500">
              {videoData.creator_name}
            </Heading>
          </VStack>
        </HStack>

        {/* Action Buttons */}
        <HStack spacing="4">
          <IconButton
            aria-label="Like video"
            icon={<FaThumbsUp />}
            onClick={() => addToLikesFn(videoData, setLikesFn)}
          />
          <IconButton
            aria-label="Watch Later"
            icon={<FaClock />}
            onClick={() => addToWatchLaterVideosFn(videoData, setWatchLaterFn)}
          />
          <ModalPlaylist />
          <IconButton
            aria-label="Take Notes"
            icon={<FaPen />}
            onClick={toggleNotesApp}
          />
        </HStack>
      </VStack>

      {/* Notes Section */}
      <NoteTaking />
    </Box>
  );
}

export default SingleVideo;
