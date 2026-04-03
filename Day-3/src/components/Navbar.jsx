import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">RYNO</div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Work</a>
        <a href="#">Contact</a>
      </div>

      <button className="nav-btn">Get Started</button>
    </nav>
  );
}