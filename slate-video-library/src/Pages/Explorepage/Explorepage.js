// import {
//   Chips,
//   Footer,
//   Header,
//   Sidebar,
//   Spinner,
//   Videocard,
// } from "../../Components/IndexAllComponents";
// import { useExplorePageContext } from "../../Context/IndexAllContext";
// import "./Explorepage.css";
// function Explorepage() {
//   const { finalData, isLoading } = useExplorePageContext();

//   return (
//     <div>
//       <Header />
//       <div className="explorepage-data">
//         <Sidebar />
//         <Chips />
//         <div className="explorepage-videos-style">
//           {isLoading ? (
//             <Spinner />
//           ) : (
//             finalData.map((video) => {
//               return <Videocard key={video._id} video={video} />;
//             })
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Explorepage;

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Spinner as ChakraSpinner,
} from "@chakra-ui/react";
import {
  Chips,
  Footer,
  Header,
  Sidebar,
  Videocard,
} from "../../Components/IndexAllComponents";
import { useExplorePageContext } from "../../Context/IndexAllContext";

function Explorepage() {
  const { finalData, isLoading } = useExplorePageContext();

  return (
    <Flex direction="column" minH="100vh">
      {/* Header */}
      <Header />

      {/* Main content area */}
      <Grid templateColumns="250px 1fr" gap={4} p={4} flex="1">
        {/* Sidebar aligned to the left */}
        <GridItem>
          <Sidebar />
        </GridItem>

        {/* Main explore content */}
        <GridItem>
          {/* Filter chips */}
          <Chips />

          {/* Video cards */}
          <Box mt={4}>
            {isLoading ? (
              <ChakraSpinner size="xl" />
            ) : (
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)", // Single column on smaller screens
                  sm: "repeat(2, 1fr)", // Two columns on medium screens
                  md: "repeat(3, 1fr)", // Three columns on larger screens
                }}
                gap={6}
              >
                {finalData.map((video) => (
                  <Videocard key={video._id} video={video} />
                ))}
              </Grid>
            )}
          </Box>
        </GridItem>
      </Grid>

      {/* Footer */}
      <Footer />
    </Flex>
  );
}

export default Explorepage;
