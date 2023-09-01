import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [theme, setTheme] = useState(false)
  const toggle = () => {
    setTheme(theme => !theme)
  }
  return (
    <div className={`app ${theme ? 'dark': ''}`}>
      <Header toggle={toggle} theme={theme} />
      <Main />
    </div>
  );
}

export default App;
