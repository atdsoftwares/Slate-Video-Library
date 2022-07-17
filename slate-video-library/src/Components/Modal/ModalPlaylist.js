import { useState, Modal } from "../../Utils/CustomUtils";
import { PlaylistModal } from "../../Components/IndexAllComponents";
import "./ModalPlaylist.css";
function ModalPlaylist() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div onClick={toggleModal} className="">
        <span class="material-icons singlevideomi">playlist_add</span>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="modal"
      >
        <div className="modal-form">
          <PlaylistModal />
        </div>
        <button onClick={toggleModal} className="btn btn-close">
          X
        </button>
      </Modal>
    </div>
  );
}

export default ModalPlaylist;
