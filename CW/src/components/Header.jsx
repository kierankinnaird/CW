import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">CW</div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="btn">Book</button>
      </div>
    </header>
  );
}