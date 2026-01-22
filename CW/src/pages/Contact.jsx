import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="page">
      <Header />

      <main className="container contact">
        <header className="contact__header">
          <h1 className="hero__title">Get in Touch</h1>
          <p className="hero__text">
            For bookings, enquiries, or advice, the best way to get in touch is directly.
          </p>
        </header>

        <section className="contact__options">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>WhatsApp</h3>
            <p>Quick responses for bookings and questions.</p>
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>Facebook</h3>
            <p>Message directly via Facebook.</p>
          </a>

          <div className="contact-card">
            <h3>Email</h3>
            <p>
              Prefer email?  
              <br />
              <strong>contact@yourdomain.co.uk</strong>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}