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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
      adipisci repellat nobis est, recusandae quaerat cum ipsa asperiores soluta
      id sunt obcaecati. Possimus aliquam pariatur repellat nisi, consequuntur
      nesciunt accusantium. Accusantium perferendis quasi error. Repellendus qui
      et hic deleniti, nobis explicabo. Doloremque sequi minus tempore neque
      fugiat alias, consequatur itaque esse ipsa accusamus, eum cum repellat
      dicta ipsam? Quidem vero totam repellendus delectus nemo doloremque labore
      nostrum vel non neque sequi nam temporibus laudantium, et distinctio quia
      perferendis veniam corporis maiores blanditiis culpa. Et tempora labore
      nostrum saepe aspernatur? Quod modi eveniet saepe pariatur amet labore,
      commodi fuga cumque laborum deserunt officia fugiat nam iste doloremque,
      ut quidem obcaecati dolorem consequuntur architecto voluptatum est odit
      quisquam maxime in.
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
