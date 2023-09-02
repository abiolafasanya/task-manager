const Header = ({ theme, toggle }: {theme: boolean, toggle: () => void }) => {
  return (
    <header className="header">
      <h3>Task Manager</h3>
      <button onClick={toggle} className="btn-header">{theme ? "Light Mode": "Dark Mode"}</button>
    </header>
  );
};

export default Header;
