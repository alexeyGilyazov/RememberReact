import React from "react";

// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered" style={{ color: '#666' }}>Lorem ipsum dolor sit amet.</h1>
//             <h3 className="centered">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, possimus cupiditate?</h3>
//         </section>
//     )
// }

export default function IntroSection() {
  return React.createElement(
    "section",
    null,
    [
      React.createElement(
        "h1",
        { className: "centred", key: Date.now() },
        "Lorem ipsum dolor sit amet",
      ),
    ],
    [
      React.createElement(
        "h3",
        { className: "centred", style: { color: "#666" }, key: Date.now() },
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, possimus cupiditate",
      ),
    ],
  );
}
