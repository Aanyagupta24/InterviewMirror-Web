function Navbar({ onHome, onHistory }) {
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

      <button className="nav-cta" onClick={() => window.scrollTo(0, 0)}>
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;