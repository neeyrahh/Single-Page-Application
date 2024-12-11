// import React from "react";
// import "./../styles/home.css";
// import dish1 from "../assets/Exquisite_Sushi_Rolls.jpg";
// import dish2 from "../assets/Handcrafted_Pasta.jpg";
// import dish3 from "../assets/Decadent_Desserts.jpeg";

// function Home() {
//   return (
//     <div className="home" id="home">
//       {/* Hero Section */}
//       <div className="hero-banner">
//         <div className="hero-content">
//           <h1>Luxury Awaits You</h1>
//           <p>Discover the finest dining experience with us</p>
//           <button className="cta-button">Explore Our Menus</button>
//         </div>
//       </div>

//       {/* Our Specialties Section */}
//       <section className="specialties">
//         <h2>Signature Dishes</h2>
//         <div className="specialty-list">
//           <div className="specialty-item">
//             <img src={dish1} alt="Dish 1" />
//             <h3>Exquisite Sushi Rolls</h3>
//             <p>A blend of flavors and textures, a true culinary masterpiece.</p>
//           </div>
//           <div className="specialty-item">
//             <img src={dish2} alt="Dish 2" />
//             <h3>Handcrafted Pasta</h3>
//             <p>Fresh, hand-made pasta with a selection of delicious sauces.</p>
//           </div>
//           <div className="specialty-item">
//             <img src={dish3} alt="Dish 3" />
//             <h3>Decadent Desserts</h3>
//             <p>Sweet indulgence with rich, chocolatey and fruity options.</p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="why-choose-us">
//         <h2>Why Dine with Us?</h2>
//         <p>
//           At Gourmet Paradise, we combine exceptional cuisine with unparalleled
//           service, making every visit an unforgettable experience.
//         </p>
//         <button className="cta-button">Book a Table</button>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials">
//         <h2>What Our Guests Say</h2>
//         <div className="testimonial-list">
//           <div className="testimonial-item">
//             <p>
//               "An exceptional dining experience. The flavors, the ambiance,
//               everything was perfect!"
//             </p>
//             <span>- John D.</span>
//           </div>
//           <div className="testimonial-item">
//             <p>
//               "The best sushi I’ve had in the city. Highly recommend this
//               place!"
//             </p>
//             <span>- Sarah W.</span>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import "./../styles/home.css";
import dish1 from "../assets/Exquisite_Sushi_Rolls.jpg";
import dish2 from "../assets/Handcrafted_Pasta.jpg";
import dish3 from "../assets/Decadent_Desserts.jpeg";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us!");
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-banner" id="home">
        <div className="hero-content">
          <h1>Luxury Awaits You</h1>
          <p>Discover the finest dining experience with us</p>
          <button className="cta-button">Explore Our Menus</button>
        </div>
      </div>

      {/* Our Specialties Section */}
      <section className="specialties" id="specialties">
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

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-hero">
          <h1>Welcome to Gourmet Paradise</h1>
          <p>Where Culinary Art Meets Unforgettable Hospitality</p>
        </div>
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Since 2010, Gourmet Paradise has been redefining fine dining with a
            perfect blend of tradition and innovation. Located in the heart of
            the city, we’re dedicated to offering a luxurious dining experience
            with world-class cuisine crafted by top chefs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Reach out to us via email, phone, or use
          the form below.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Home;

