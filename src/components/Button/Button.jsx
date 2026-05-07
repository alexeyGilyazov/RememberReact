import classes from "./Button.module.css";

export default function Button({ text, isActive, ...props }) {
  return (
    <button
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      {text}
    </button>
  );
}
