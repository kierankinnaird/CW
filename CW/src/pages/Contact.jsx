import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="page">
      <Header />
      <main className="container hero">
        <h1 className="hero__title">Contact</h1>
        <p className="hero__text">Get in touch for bookings or enquiries.</p>
      </main>
      <Footer />
    </div>
  );
}