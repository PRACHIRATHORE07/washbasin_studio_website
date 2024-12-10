import React from 'react';
import './Testimonial.css';

const testimonialsData = [
    {
        name: "John Doe",
        quote: "This is an amazing service! Highly recommend to everyone.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Jane Smith",
        quote: "Absolutely fantastic! The team was great to work with.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Sam Wilson",
        quote: "I couldn't be happier with the results!",
        image: "https://via.placeholder.com/150"
    }
];

const Testimonial = () => {
    return (
        <div className="testimonials-container text-white">
            <h2>Testimonials</h2>
            <div className="testimonials">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <p className="quote">"{testimonial.quote}"</p>
                        <p className="name">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
