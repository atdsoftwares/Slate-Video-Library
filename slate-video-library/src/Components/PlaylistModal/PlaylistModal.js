import {
  Box,
  Heading,
  VStack,
  Input,
  IconButton,
  Checkbox,
  Text,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import {
  usePlaylistContext,
  useSingleVideoContext,
} from "../../Context/IndexAllContext";
import {
  addVideosIntoPlaylistFn,
  makePlaylistFn,
} from "../../Services/PlaylistPageServices";

function PlaylistModal() {
  const { dispatch, videoData, inputState } = useSingleVideoContext();
  const { addToPlaylists, setPlaylistFn } = usePlaylistContext();
  const toast = useToast();

  const handleCreatePlaylist = () => {
    if (inputState.trim()) {
      makePlaylistFn(setPlaylistFn, inputState);
      toast({
        title: "Playlist created.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Enter a valid playlist name.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} bg="white" borderRadius="lg" shadow="md" maxW="400px" mx="auto">
      <Heading size="md" mb={4} textAlign="center">
        Create a Playlist
      </Heading>

      <VStack spacing={4} align="stretch">
        {/* Input for creating a playlist */}
        <Box display="flex" alignItems="center">
          <Input
            placeholder="Enter playlist name"
            value={inputState}
            onChange={(e) =>
              dispatch({ type: "INPUTSTATE", payload: e.target.value })
            }
            variant="outline"
          />
          <IconButton
            aria-label="Add playlist"
            icon={<AddIcon />}
            onClick={handleCreatePlaylist}
            ml={2}
            colorScheme="blue"
          />
        </Box>

        <Divider />

        {/* Display created playlists with checkboxes */}
        <VStack align="stretch">
          {addToPlaylists.length > 0 ? (
            addToPlaylists.map((playlist) => (
              <Box
                key={playlist._id}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={2}
                bg="gray.100"
                borderRadius="md"
              >
                <Checkbox
                  onChange={() =>
                    addVideosIntoPlaylistFn(
                      playlist._id,
                      videoData,
                      setPlaylistFn
                    )
                  }
                >
                  {playlist.playlistName}
                </Checkbox>
              </Box>
            ))
          ) : (
            <Text textAlign="center" color="gray.500">
              No playlists available
            </Text>
          )}
        </VStack>
      </VStack>
    </Box>
  );
}

export default PlaylistModal;
