// import { useState, Modal } from "../../../Utils/CustomUtils";
// import { PlaylistModal } from "../../IndexAllComponents";
// import "./ModalPlaylist.css";
// function ModalPlaylist() {
//   const [isOpen, setIsOpen] = useState(false);
//   function toggleModal() {
//     setIsOpen(!isOpen);
//   }
//   return (
//     <div>
//       <div onClick={toggleModal} className="">
//         <span class="material-icons singlevideomi">playlist_add</span>
//       </div>
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={toggleModal}
//         contentLabel="My dialog"
//         className="modal"
//       >
//         <div className="modal-form">
//           <PlaylistModal />
//         </div>
//         <button onClick={toggleModal} className="btn btn-close">
//           X
//         </button>
//       </Modal>
//     </div>
//   );
// }

// export default ModalPlaylist;
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { PlaylistModal } from "../../IndexAllComponents";

function ModalPlaylist() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {/* Button to open the modal */}
      <IconButton
        icon={<AddIcon />}
        aria-label="Add to Playlist"
        onClick={onOpen}
        variant="outline"
        colorScheme="teal"
        fontSize="lg"
      />

      {/* Modal component from Chakra UI */}
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Playlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PlaylistModal />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ModalPlaylist;
