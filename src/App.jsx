import Header from "./components/Header/Header";
// import DifferencesSection from "./components/DifferencesSection";
import TeachingSection from "./components/TeachingSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSectiom from "./components/FeedbackSectiom";
import EffectsSection from "./components/EffectsSection";
import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("effect");
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false);
  }, 1100000);

  return (
    <>
      {visible && <Header />}
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        {tab === "main" && (
          <>
            <TeachingSection />
          </>
        )}
        {tab === "feedback" && (
          <>
            <FeedbackSectiom />
          </>
        )}
        {tab === "effect" && (
          <>
            <EffectsSection />
          </>
        )}
      </main>
    </>
  );
}
