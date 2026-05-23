// import { useState } from "react";
// import AnimatedTitle from "./components/AnimatedTitle";

// function App() {
//   const [showHome, setShowHome] = useState(false);

//   return (
//     <>
//       {!showHome ? (
//         <AnimatedTitle onComplete={() => setShowHome(true)} />
//       ) : (
//         <div className="home-page">
//           <h1>Welcome to AI Cooking Website 🍳</h1>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import AnimatedTitle from "./assets/animations/AnimatedTitle";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* {loading ? <AnimatedTitle /> : <AppRoutes />} */}
      
      <AppRoutes />
    </>
  );
}
