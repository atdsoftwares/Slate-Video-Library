import { Link, useEffect } from "../../Utils/CustomUtils";
import { usePlaylistContext } from "../../Context/IndexAllContext";
import "./Playlistspage.css";
import { Footer, Header, Sidebar } from "../../Components/IndexAllComponents";
import {
  getPlaylistsFn,
  removePlaylistFn,
} from "../../Services/PlaylistPageServices";

function Playlistspage() {
  const { addToPlaylists, setPlaylistFn } = usePlaylistContext();

  useEffect(() => {
    getPlaylistsFn(setPlaylistFn);
  }, []);

  return (
    <div>
      <Header />
      <div
        className="likes-page-sidebar"
        style={{ display: "flex", marginLeft: "15rem" }}
      >
        <Sidebar />
        <div className="playlist-container">
          {addToPlaylists.length <= 0 ? (
            <h3 className="historypage-title">
              {" "}
              THERE ARE NO PLAYLIST TO DISPLAY{" "}
            </h3>
          ) : (
            addToPlaylists &&
            addToPlaylists.map((playlistData) => (
              <div>
                <div className="playlistdata">
                  <span className="material-icons playlisticon">
                    playlist_play
                  </span>
                  <Link to={`/playlists/${playlistData._id}`}>
                    <div className="playlistpage">
                      Playlist {playlistData.playlistName}
                    </div>
                  </Link>
                </div>
                <span
                  className="material-icons playlistmi"
                  onClick={() =>
                    removePlaylistFn(playlistData._id, setPlaylistFn)
                  }
                >
                  delete
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Playlistspage;

// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { usePlaylistContext } from "../../Context/IndexAllContext";
// import { Footer, Header, Sidebar } from "../../Components/IndexAllComponents";
// import {
//   getPlaylistsFn,
//   removePlaylistFn,
// } from "../../Services/PlaylistPageServices";
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Icon,
//   Button,
//   VStack,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { MdDelete, MdPlaylistPlay } from "react-icons/md";

// function Playlistspage() {
//   const { addToPlaylists, setPlaylistFn } = usePlaylistContext();

//   useEffect(() => {
//     getPlaylistsFn(setPlaylistFn);
//   }, []);

//   // Define colors based on color mode
//   const bgColor = useColorModeValue("gray.50", "gray.800");
//   const playlistBgColor = useColorModeValue("white", "gray.700");
//   const textColor = useColorModeValue("gray.800", "white");

//   return (
//     <Box minH="100vh" bg={bgColor}>
//       {/* Header */}
//       <Header />

//       <Flex direction={{ base: "column", md: "row" }} minH="calc(100vh - 4rem)">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Playlist Container */}
//         <Box flex="1" p={6}>
//           {addToPlaylists.length <= 0 ? (
//             <VStack spacing={6} align="center" mt={12}>
//               <Heading as="h3" size="lg" color="teal.500">
//                 There are no playlists to display
//               </Heading>
//             </VStack>
//           ) : (
//             <VStack spacing={6} mt={6} w="100%">
//               {addToPlaylists.map((playlistData) => (
//                 <Flex
//                   key={playlistData._id}
//                   align="center"
//                   justify="space-between"
//                   w="100%"
//                   p={4}
//                   bg={playlistBgColor}
//                   borderRadius="md"
//                   boxShadow="md"
//                 >
//                   <Link to={`/playlists/${playlistData._id}`}>
//                     <Flex align="center">
//                       <Icon as={MdPlaylistPlay} w={8} h={8} color="teal.500" />
//                       <Text
//                         ml={4}
//                         fontSize="lg"
//                         fontWeight="bold"
//                         color={textColor}
//                       >
//                         {playlistData.playlistName}
//                       </Text>
//                     </Flex>
//                   </Link>
//                   <Button
//                     leftIcon={<MdDelete />}
//                     colorScheme="red"
//                     onClick={() =>
//                       removePlaylistFn(playlistData._id, setPlaylistFn)
//                     }
//                   >
//                     Delete
//                   </Button>
//                 </Flex>
//               ))}
//             </VStack>
//           )}
//         </Box>
//       </Flex>

//       {/* Footer */}
//       <Footer />
//     </Box>
//   );
// }

// export default Playlistspage;
