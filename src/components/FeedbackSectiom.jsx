import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateRef() {
  const input = useRef(null);
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handlerEnter(event) {
    if (event.key === "Enter") {
      setShow(true);
      setInputValue(input.current.value);
    }
  }

  return (
    <div>
      <h2>Input value: {show ? inputValue : ""}</h2>{" "}
      <input
        ref={input}
        type="text"
        onKeyDown={handlerEnter}
        className="control"
      />
    </div>
  );
}

export default function FeedbackSectiom() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });

  function handleNameChange(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }

  return (
    <section>
      <h3>FeedBack</h3>
      <form>
        <label htmlFor="name"></label>
        <input
          className="control"
          id="name"
          type="text"
          value={form.name}
          onChange={handleNameChange}
          style={{ border: form.reason ? "1px solid red" : null }}
        />

        <label htmlFor="reason">Reason to suggest</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({
              ...prev,
              reason: event.target.value,
            }))
          }
        >
          <option value="error">Error</option>
          <option value="help">Help</option>
          <option value="suggest">Suggest ideas</option>
        </select>

        <Button text="Send" disabled={form.hasError} />
      </form>
      <StateRef />
    </section>
  );
}
