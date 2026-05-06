import Header from "./components/Header";
import DifferencesSection from "./components/DifferencesSection";
import TeachingSection from "./components/TeachingSection";
import { Fragment } from "react";

export default function App() {


  return (
    <Fragment>
      <Header />
      <main>
        <TeachingSection />
        <DifferencesSection />
        <p>react</p>
      </main>
    </Fragment>
  );
}
