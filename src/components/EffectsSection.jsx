import { useEffect, useState, useCallback } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "./hooks/useInput";

export default function EffectsSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effects</h3>
      <Button
        onClick={() => setLoading(true)}
        text={modal ? "close modal" : "show modal"}
      />
      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ratione,
          fugiat hic inventore quas veniam unde vel dolorum id nemo a dolor
          incidunt voluptates reprehenderit cum nihil nisi perspiciatis dolores?
        </p>
        <Button onClick={() => setModal(false)} text="close modal" />
      </Modal>

      {loading && <p>Loading ...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase()),
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
