import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: "40px" }}>
      <Button
        isActive={active === "main"}
        onClick={() => onChange("main")}
        text="Main"
      />
      <Button
        isActive={active === "feedback"}
        onClick={() => onChange("feedback")}
        text="FeedBack"
      />
      <Button
        isActive={active === "effect"}
        onClick={() => onChange("effect")}
        text="effect"
      />
    </section>
  );
}
