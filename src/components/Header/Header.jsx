import { useState, useEffect } from "react";
import logo from "/logo.svg";
const name = "logotip";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: rgb(239, 239, 239);
  padding: 0 20px;
`;

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()));
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HeaderContainer>
      <img src={logo} alt={name || "res"} />
      <span>Time is {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
