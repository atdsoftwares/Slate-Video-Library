// import { useEffect } from "../../Utils/CustomUtils";
// import { useWatchLaterContext } from "../../Context/IndexAllContext";
// import "./Watchlaterpage.css";
// import {
//   Footer,
//   Header,
//   Sidebar,
//   SmallVideoCards,
// } from "../../Components/IndexAllComponents";
// import {
//   getWatchLaterVideosFn,
//   removeWatchLaterVideosFn,
// } from "../../Services/WatchLaterServices";
// function Watchlaterpage() {
//   const { getWatchLaterVideos, setWatchLaterFn } = useWatchLaterContext();

//   useEffect(() => {
//     getWatchLaterVideosFn(setWatchLaterFn);
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div
//         className="likes-page-sidebar"
//         style={{ display: "flex", marginLeft: "15rem" }}
//       >
//         <Sidebar />
//         <div className="watchlater-container">
//           {getWatchLaterVideos.length <= 0 ? (
//             <h3 className="watchlaterpage-title">
//               THERE ARE NO WATCHLATER VIDEOS{" "}
//             </h3>
//           ) : (
//             getWatchLaterVideos.map((watch_later) => (
//               <div className="watchlaterdata">
//                 <SmallVideoCards props={watch_later.videoUrl} />
//                 <span
//                   className="material-icons watchlatermi"
//                   onClick={(_id) =>
//                     removeWatchLaterVideosFn(watch_later._id, setWatchLaterFn)
//                   }
//                 >
//                   delete
//                 </span>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Watchlaterpage;

import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import {
  Footer,
  Header,
  Sidebar,
  SmallVideoCards,
} from "../../Components/IndexAllComponents";
import { useWatchLaterContext } from "../../Context/IndexAllContext";
import {
  getWatchLaterVideosFn,
  removeWatchLaterVideosFn,
} from "../../Services/WatchLaterServices";
import { MdDelete } from "react-icons/md";

function WatchLaterPage() {
  const { getWatchLaterVideos, setWatchLaterFn } = useWatchLaterContext();

  useEffect(() => {
    getWatchLaterVideosFn(setWatchLaterFn);
  }, [setWatchLaterFn]);

  // UseColorModeValue hooks
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const contentBgColor = useColorModeValue("white", "gray.700");
  const sidebarBgColor = useColorModeValue("white", "gray.700");

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Header */}
      <Header />

      <Flex
        direction={{ base: "column", md: "row" }}
        minH="calc(100vh - 4rem)"
        display="flex"
        flexDir="column"
        marginLeft={"8rem"}
      >
        {/* Sidebar */}
        <Box
          as="aside"
          width={{ base: "full", md: "15rem" }}
          bg={sidebarBgColor}
          p={4}
          boxShadow="md"
        >
          <Sidebar />
        </Box>

        {/* Watch Later Content */}
        <Flex
          as="main"
          flex="1"
          direction="column"
          p={6}
          overflowY="auto"
          bg={contentBgColor}
        >
          <Heading mb={6}>Watch Later</Heading>

          {getWatchLaterVideos.length === 0 ? (
            <Text fontSize="lg" textAlign="center" mt={8}>
              You have no videos in your Watch Later list. Add some videos to
              view them here.
            </Text>
          ) : (
            <Stack spacing={4}>
              {getWatchLaterVideos.map((video) => (
                <Flex
                  key={video._id}
                  align="center"
                  justify="space-between"
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                  bg={contentBgColor}
                >
                  <SmallVideoCards props={video.videoUrl} />
                  <Box>
                    <Text fontSize="sm" mb={2}>
                      {video.title}
                    </Text>
                    <Flex justify="flex-end">
                      <IconButton
                        icon={<MdDelete />}
                        aria-label="Remove from Watch Later"
                        colorScheme="red"
                        onClick={() =>
                          removeWatchLaterVideosFn(video._id, setWatchLaterFn)
                        }
                      />
                    </Flex>
                  </Box>
                </Flex>
              ))}
            </Stack>
          )}
        </Flex>
      </Flex>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default WatchLaterPage;
