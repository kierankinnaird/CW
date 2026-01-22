import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Header />

      <main className="container home">
        {/* Hero */}
        <section className="home__hero">
          <h1 className="hero__title">
            Services tailored by me, for you
          </h1>

          <p className="hero__text">
            Massage Therapy, Personal Training, and Pilates with an emphasis on recovery and freedom to move.
          </p>
        </section>

        {/* Introduction */}
        <section className="home__intro">
          <h2>I'm Caroline</h2>

          <p>
            I am a qualified Personal Trainer, Massage Therapist, and Pilates instructor with a focus on recovery, making sure clients feel healthier and pain free.
          </p>

          <p>
            With a calm, supportive approach and a strong focus on individual needs, I work one-to-one or within a group with each client, tailoring every session to how your body actually feels, not a generic programme.
          </p>

          <p>
            Whether you’re recovering from injury, dealing with long-term
            tension, or looking to move better and feel stronger, you’ll be
            working directly with me every step of the way.
          </p>
        </section>

        {/* CTA */}
        <section className="home__cta">
          <p>
            Have a question or want to discuss what might work best for you?
          </p>
          <a href="/contact" className="btn">
            Get in touch
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}