import React, { useState } from 'react';

import Header from './components/Header';
import Game from './components/Game';

function App() {
  const [theme, setTheme] = useState("dark");

  if (theme === "dark") {
    document.documentElement.style.setProperty("--main-color", "lightseagreen");
    document.documentElement.style.setProperty("--secondary-color", "#000000");
  } else {
    document.documentElement.style.setProperty("--main-color", "#000000");
    document.documentElement.style.setProperty("--secondary-color", "#FFFFFF");
  }

  return (
    <div className="wrapper">
      <Header setTheme={setTheme} />
      <Game />
    </div>
  );
}

export default App;