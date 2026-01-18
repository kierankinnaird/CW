export default function Home() {
  return (
    <div className="page">
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

      <main className="container hero">
        <h1 className="hero__title">Massage & Personal Training</h1>
        <p className="hero__text">
          Professional Massage Therapy, Personal Training, and Pilates.
        </p>

        <div className="hero__actions">
          <button className="btn">View Services</button>
          <button className="btn btn--ghost">Contact</button>
        </div>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} CW Massage & Personal Training</span>
          <span>
            Built by <a href="https://kinnaird.dev" target="_blank" rel="noreferrer">Kieran Kinnaird</a>
          </span>
        </div>
      </footer>
    </div>
  );
}