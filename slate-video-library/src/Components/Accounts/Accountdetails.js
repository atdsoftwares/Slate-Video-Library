import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Button,
  IconButton,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "../../Utils/CustomUtils";
import {
  useLoginSignupContext,
  useNotesAppContext,
  usePlaylistContext,
  useWatchLaterContext,
} from "../../Context/IndexAllContext";
import { logoutHandler } from "../../Services/LoginSignUpPageServices";
import { DeleteIcon } from "@chakra-ui/icons";

function Accountdetails() {
  const { loginData } = useLoginSignupContext();
  const { addToPlaylists } = usePlaylistContext();
  const { getWatchLaterVideos } = useWatchLaterContext();
  const { email, name } = loginData;
  const { inputNotesData, deleteNotesFn } = useNotesAppContext();
  const navigate = useNavigate();

  function logOutUserFromApp() {
    window.location.reload();
    logoutHandler();
    navigate("/login");
  }

  return (
    <Box maxW="1000px" mx="auto" p={6}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Account Details
        </Heading>

        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Watchlater</Th>
                <Th>Playlists</Th>
                <Th>Notes</Th>
                <Th>Logout</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{name}</Td>
                <Td>{email}</Td>
                <Td>{getWatchLaterVideos?.length || 0}</Td>
                <Td>{addToPlaylists?.length || 0}</Td>
                <Td>{inputNotesData.length}</Td>
                <Td>
                  <Button colorScheme="red" onClick={logOutUserFromApp}>
                    Logout
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Heading as="h3" size="lg">
          Notes
        </Heading>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Notes ID</Th>
                <Th>Notes Title</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {inputNotesData.map((notes) => (
                <Tr key={notes._id}>
                  <Td>{notes._id}</Td>
                  <Td>{notes.inputNotesTextValue}</Td>
                  <Td>
                    <IconButton
                      aria-label="Delete Note"
                      icon={<DeleteIcon />}
                      onClick={() => deleteNotesFn(notes._id)}
                      colorScheme="red"
                      variant="outline"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Box>
  );
}

export default Accountdetails;
