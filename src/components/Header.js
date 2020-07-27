import React from 'react';

function Header(props) {
  function handleClick() {
    props.setTheme(prev => prev === "dark" ? "light" : "dark");
  }

  return (
    <header className="header">
      <h1>How fast do you type?</h1>
      <button
          className="btn theme-change-setting-btn"
          onClick={handleClick}
        >
          Change Theme
      </button>
    </header>
  );
}

export default Header;