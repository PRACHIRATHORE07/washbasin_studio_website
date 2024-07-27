"use client"; // Ensure this is at the top of your file

import React from 'react';
import './Testimonial.css';
import { InfiniteMovingCards } from './InfiniteMovingCards';

const testimonialsData = [
    {
        name: "Rohan Mishra",
        quote: "I love the natural stone washbasin. It adds a touch of luxury and uniqueness to my bathroom😍😍.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Prabha Sharma",
        quote: "Marble is incredibly durable. My basin has withstood daily use without any major issues. Despite its delicate appearance, the marble washbasin is quite sturdy and has held up well over time✨",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Sam Wilson",
        quote: "I appreciate that the marble doesn't get damaged or stained from hot hair tools or hot water. it is also incredibly easy to clean. I would highly recommend to buy 👍🏻",
        image: "https://via.placeholder.com/150"
    }
];

const Testimonial = () => {
    const items = testimonialsData.map(testimonial => ({
        quote: testimonial.quote,
        name: testimonial.name,
        title: "Customer",
        image: testimonial.image
    }));

    return (
        <div className="testimonials-container text-white text-center p-8">
            <h2 className="text-10 font-bold mt-5 font-serif">Testimonials</h2> {/* Adjusted font size and font style */}
            <div className="flex justify-center mt-10"> {/* Adjust margin-top here for spacing */}
                <InfiniteMovingCards
                    items={items}
                    direction="left"
                    speed="normal"
                    pauseOnHover={true}
                />
            </div>
        </div>
    );
};

export default Testimonial;







