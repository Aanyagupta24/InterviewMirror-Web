function Navbar({ onHome, onHistory, onLogout }) {
  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={onHome}>
        <div className="logo-mark">IM</div>
        <span>Interview<span>Mirror</span></span>
      </div>

      <div className="nav-links">
        <button onClick={onHome}>Home</button>
        <button onClick={onHistory}>History</button>
      </div>

      <div className="nav-actions">
        <button
          className="nav-cta"
          onClick={() => window.scrollTo(0, 0)}
        >
          Get Started
        </button>

        <button
          className="logout-btn"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
