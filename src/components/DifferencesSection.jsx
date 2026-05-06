import { useState } from "react";
import Button from "./Button/Button"
import { difference } from "../data";


export default function DifferencesSection() {

    const [contentType, setContentType] = useState("click me please, dude");

    function handleClick(type) {
        setContentType(type);
        console.log(contentType);
    }
    return (
        <section>
            <h3>Lorem ipsum dolor sit.</h3>
            <Button isActive={contentType === 'way'} onClick={() => handleClick("way")} text="Button1" />
            <Button isActive={contentType === 'easy'} onClick={() => handleClick("easy")} text="Button2" />
            <Button isActive={contentType === 'programm'} onClick={() => handleClick("programm")} text="Button3" />
            <p>{contentType ? difference[contentType] : "click me dude"}</p>
        </section>
    )
}