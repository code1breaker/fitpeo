import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <main className="flex">
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Home setShowMenu={setShowMenu} />
    </main>
  );
}

export default App;
