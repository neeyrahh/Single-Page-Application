import React from "react";
import "./../styles/home.css";
import dish1 from "../assets/Exquisite_Sushi_Rolls.jpg";
import dish2 from "../assets/Handcrafted_Pasta.jpg";
import dish3 from "../assets/Decadent_Desserts.jpeg";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Luxury Awaits You</h1>
          <p>Discover the finest dining experience with us</p>
          <button className="cta-button">Explore Our Menus</button>
        </div>
      </div>

      {/* Our Specialties Section */}
      <section className="specialties">
        <h2>Signature Dishes</h2>
        <div className="specialty-list">
          <div className="specialty-item">
            <img src={dish1} alt="Dish 1" />
            <h3>Exquisite Sushi Rolls</h3>
            <p>A blend of flavors and textures, a true culinary masterpiece.</p>
          </div>
          <div className="specialty-item">
            <img src={dish2} alt="Dish 2" />
            <h3>Handcrafted Pasta</h3>
            <p>Fresh, hand-made pasta with a selection of delicious sauces.</p>
          </div>
          <div className="specialty-item">
            <img src={dish3} alt="Dish 3" />
            <h3>Decadent Desserts</h3>
            <p>Sweet indulgence with rich, chocolatey and fruity options.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Dine with Us?</h2>
        <p>
          At Gourmet Paradise, we combine exceptional cuisine with unparalleled
          service, making every visit an unforgettable experience.
        </p>
        <button className="cta-button">Book a Table</button>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Guests Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>
              "An exceptional dining experience. The flavors, the ambiance,
              everything was perfect!"
            </p>
            <span>- John D.</span>
          </div>
          <div className="testimonial-item">
            <p>
              "The best sushi I’ve had in the city. Highly recommend this
              place!"
            </p>
            <span>- Sarah W.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
