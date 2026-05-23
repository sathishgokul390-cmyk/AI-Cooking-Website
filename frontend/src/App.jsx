import { useState } from "react";
import AnimatedTitle from "./components/AnimatedTitle";

function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      {!showHome ? (
        <AnimatedTitle onComplete={() => setShowHome(true)} />
      ) : (
        <div className="home-page">
          <h1>Welcome to AI Cooking Website 🍳</h1>
        </div>
      )}
    </>
  );
}

export default App;