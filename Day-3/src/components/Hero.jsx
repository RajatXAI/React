import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>
          Build Your <span>Digital</span> Presence
        </h1>

        <p>
          We create modern, high-quality experiences that elevate your brand.
        </p>

        <button className="hero-btn">Explore Now</button>
      </div>
    </section>
  );
}