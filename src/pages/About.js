import React from "react";
import "./../styles/about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-hero">
        <h1>Welcome to Gourmet Paradise</h1>
        <p>Where Culinary Art Meets Unforgettable Hospitality</p>
      </div>
      <section className="about-content">
        <h2>Our Story</h2>
        <p>
          Since 2010, Gourmet Paradise has been redefining fine dining with a
          perfect blend of tradition and innovation. Located in the heart of the
          city, we’re dedicated to offering a luxurious dining experience with
          world-class cuisine crafted by top chefs.
        </p>
      </section>
      <section className="about-highlight">
        <div className="highlight-box">
          <h3>10+ Years</h3>
          <p>Serving Excellence</p>
        </div>
        <div className="highlight-box">
          <h3>5-Star</h3>
          <p>Rated by Our Guests</p>
        </div>
        <div className="highlight-box">
          <h3>50+ Dishes</h3>
          <p>On Our Menu</p>
        </div>
      </section>
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To create memorable moments by delivering exceptional dining
          experiences through exceptional food, impeccable service, and a
          welcoming ambiance.
        </p>
      </section>
    </div>
  );
};

export default About;
