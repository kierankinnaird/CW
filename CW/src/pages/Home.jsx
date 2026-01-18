import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Header />

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

      <Footer />
    </div>
  );
}