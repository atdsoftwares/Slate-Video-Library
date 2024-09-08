import {
  Footer,
  Header,
  Sidebar,
  SmallVideoCards,
} from "../../Components/IndexAllComponents";
import { usePlaylistContext } from "../../Context/IndexAllContext";
import {
  deleteVideosInsidePlaylistFn,
  getVideosFromPlaylistsFn,
} from "../../Services/PlaylistPageServices";
import { useEffect, useParams, useState } from "../../Utils/CustomUtils";

function PlaylistViewpage() {
  const { getVideosFromPlaylists, setPlaylistFn } = usePlaylistContext();
  const playlistId = useParams();
  useEffect(() => {
    getVideosFromPlaylistsFn(playlistId, setPlaylistFn);
  }, []);

  return (
    <div>
      <Header />
      <div
        className="likes-page-sidebar"
        style={{ display: "flex", marginLeft: "5rem" }}
      >
        <Sidebar />

        <div className="watchlater-container">
          {getVideosFromPlaylists.length <= 0 ? (
            <h3 className="watchlaterpage-title">
              THERE ARE NO VIDEOS IN PLAYLIST
            </h3>
          ) : (
            getVideosFromPlaylists.map((playlistData) => (
              <div className="watchlaterdata">
                <SmallVideoCards props={playlistData.videoUrl} />
                <span
                  className="material-icons watchlatermi"
                  onClick={() =>
                    deleteVideosInsidePlaylistFn(
                      playlistId,
                      playlistData._id,
                      setPlaylistFn
                    )
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

export default PlaylistViewpage;
// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   useColorModeValue,
//   VStack,
// } from "@chakra-ui/react";
// import { MdDelete } from "react-icons/md";
// import {
//   Footer,
//   Header,
//   Sidebar,
//   SmallVideoCards,
// } from "../../Components/IndexAllComponents";
// import { usePlaylistContext } from "../../Context/IndexAllContext";
// import {
//   deleteVideosInsidePlaylistFn,
//   getVideosFromPlaylistsFn,
// } from "../../Services/PlaylistPageServices";

// function PlaylistViewpage() {
//   const { getVideosFromPlaylists, setPlaylistFn } = usePlaylistContext();
//   const { playlistId } = useParams(); // Destructure playlistId directly
//   const bgColor = useColorModeValue("gray.50", "gray.800");
//   const videoBgColor = useColorModeValue("white", "gray.700");
//   const textColor = useColorModeValue("gray.800", "white");

//   useEffect(() => {
//     getVideosFromPlaylistsFn(playlistId, setPlaylistFn);
//   }, [playlistId, setPlaylistFn]);

//   return (
//     <Box minH="100vh" bg={bgColor}>
//       {/* Header */}
//       <Header />

//       <Flex direction={{ base: "column", md: "row" }} minH="calc(100vh - 4rem)">
//         {/* Sidebar */}
//         <Sidebar />

//         <Box flex="1" p={6}>
//           {getVideosFromPlaylists.length <= 0 ? (
//             <VStack spacing={6} align="center" mt={12}>
//               <Text fontSize="xl" fontWeight="bold" color={textColor}>
//                 There are no videos in this playlist
//               </Text>
//             </VStack>
//           ) : (
//             <VStack spacing={6} mt={6} w="100%">
//               {getVideosFromPlaylists.map((playlistData) => (
//                 <Flex
//                   key={playlistData._id}
//                   align="center"
//                   justify="space-between"
//                   p={4}
//                   bg={videoBgColor}
//                   borderRadius="md"
//                   boxShadow="md"
//                 >
//                   <SmallVideoCards props={playlistData.videoUrl} />
//                   <IconButton
//                     aria-label="Delete video"
//                     icon={<MdDelete />}
//                     colorScheme="red"
//                     variant="outline"
//                     onClick={() =>
//                       deleteVideosInsidePlaylistFn(
//                         playlistId,
//                         playlistData._id,
//                         setPlaylistFn
//                       )
//                     }
//                   />
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

// export default PlaylistViewpage;
