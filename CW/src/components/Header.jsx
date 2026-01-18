export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">CW</div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Booking</a>
          <a href="#">Contact</a>
        </nav>

        <button className="btn">Book</button>
      </div>
    </header>
  );
}