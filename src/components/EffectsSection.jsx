import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectsSection() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState()

  function openModal() {
    setModal(!modal);
  }

  return (
    <section>
      <h3>Effects</h3>
      <Button onClick={openModal} text={modal ? "close modal" : "show modal"} />
      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ratione,
          fugiat hic inventore quas veniam unde vel dolorum id nemo a dolor
          incidunt voluptates reprehenderit cum nihil nisi perspiciatis dolores?
        </p>
        <Button onClick={() => setModal(false)} text="close modal" />
      </Modal>
    </section>
  );
}
