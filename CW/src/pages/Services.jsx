import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className="page">
      <Header />
      <main className="container hero">
        <h1 className="hero__title">Services</h1>
        <p className="hero__text">Massage therapy, personal training, and Pilates.</p>
      </main>
      <Footer />
    </div>
  );
}