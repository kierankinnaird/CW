export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} CW Massage & Personal Training</span>
        <span>
          Built by{" "}
          <a href="https://kinnaird.dev" target="_blank" rel="noreferrer">
            Kieran Kinnaird
          </a>
        </span>
      </div>
    </footer>
  );
}