import React from "react";
import {
  Box,
  Input,
  Button,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";
import {
  useNotesAppContext,
  useSingleVideoContext,
} from "../../Context/IndexAllContext";

function NoteTaking() {
  const { notesTakingBoxState } = useSingleVideoContext();
  const {
    inputNotesTextValue,
    setinputNotesTextValue,
    saveNotesFn,
    inputNotesData,
    deleteNotesFn,
    editNotesFn,
    buttonState,
  } = useNotesAppContext();
  const toast = useToast();

  const handleNoteSave = (e) => {
    e.preventDefault();
    saveNotesFn();
    toast({
      title: "Note saved.",
      description: "Your note has been saved successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box
      display={notesTakingBoxState ? "block" : "none"}
      maxW="600px"
      mx="auto"
      p="4"
      bg="white"
      borderRadius="md"
      shadow="md"
    >
      {/* Note Input Form */}
      <form onSubmit={saveNotesFn}>
        <VStack spacing="4" mb="4">
          <Input
            placeholder="Take notes..."
            value={inputNotesTextValue}
            onChange={(e) => setinputNotesTextValue(e.target.value)}
            required
            focusBorderColor="teal.500"
          />
          <Button type="submit" colorScheme="teal" width="full">
            Save Note
          </Button>
        </VStack>
      </form>

      {/* Notes Table */}
      <Table variant="simple" colorScheme="teal" marginBottom={"2rem"}>
        <Thead>
          <Tr>
            <Th>Note</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody >
          {inputNotesData.map((note) => (
            <Tr key={note._id}>
              <Td>{note.inputNotesTextValue}</Td>
              <Td>
                <IconButton
                  icon={<FaTrash />}
                  aria-label="Delete Note"
                  onClick={() => deleteNotesFn(note._id)}
                  colorScheme="red"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* No Notes Message */}
      {inputNotesData.length === 0 && (
        <Text mt="4" color="gray.500" textAlign="center">
          No notes available. Start taking notes!
        </Text>
      )}
    </Box>
  );
}

export default NoteTaking;
