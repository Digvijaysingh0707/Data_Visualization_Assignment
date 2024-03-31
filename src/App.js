import { useState } from "react";
import FlavanoidManagement from "./components/FlavanoidManagement";
import GammaManagement from "./components/GammaManagement";

const App = () => {
  const [route, setRoute] = useState(window.location.pathname);

  const handleNavigation = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    setRoute(pathname);
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => handleNavigation("/flavonoids")}>Flavonoids</li>
          <li onClick={() => handleNavigation("/gamma")}>Gamma</li>
        </ul>
      </nav>
      {route === "/flavonoids" && <FlavanoidManagement />}
      {route === "/gamma" && <GammaManagement />}
    </div>
  );
};

export default App;
