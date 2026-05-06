import { ways } from "../data";
import WayToTeach from "./WayToTeach";

export default function TeachingSection() {
    return (
        <section>
            <ul>
                {ways.map((way) => <WayToTeach key={way.id} {...way} />)}
            </ul>
        </section>
    )
}