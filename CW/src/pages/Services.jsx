import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div className="page">
      <Header />

      <main className="container services">
        <header className="services__header">
          <h1 className="hero__title">Services</h1>
          <p className="hero__text">
            Focused on injury recovery, rehabilitation, and long-term physical wellbeing.
          </p>
        </header>

        <section className="services__grid">
          <ServiceCard
            title="Sports & Deep Tissue Massage"
            description="Targeted massage treatments designed to relieve pain, improve mobility, and support recovery."
            highlights={[
              "Injury rehabilitation",
              "Muscle tension relief",
              "Post-training recovery",
              "Improved range of motion",
            ]}
          />

          <ServiceCard
            title="Personal Training"
            description="One-to-one coaching tailored around your goals, ability, and physical limitations."
            highlights={[
              "Strength & conditioning",
              "Injury-aware programming",
              "Mobility & stability work",
              "Beginner-friendly support",
            ]}
          />

          <ServiceCard
            title="Pilates & Movement"
            description="Low-impact movement sessions focused on posture, core strength, and controlled mobility."
            highlights={[
              "Core stability",
              "Postural correction",
              "Joint-friendly exercise",
              "Rehabilitation support",
            ]}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}