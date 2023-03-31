import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const onDismiss = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button secondary onClick={onDismiss}>
        Close
      </Button>
    </div>
  );
  const modal = (
    <Modal onDismiss={onDismiss} actionBar={actionBar}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe incidunt
      maiores ab modi amet odio reprehenderit quisquam commodi earum vel.
    </Modal>
  );

  return (
    <div>
      <Button secondary outline onClick={handleClick}>
        Show Modal
      </Button>
      {showModal && modal}
    </div>
  );
};
export default ModalPage;
