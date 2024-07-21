"use client"; // Ensure this is at the top of your file

import React, { useRef, useEffect } from 'react';
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
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const testimonials = container.querySelectorAll('.testimonial');
            testimonials.forEach((testimonial) => {
                const rect = testimonial.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    testimonial.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on component mount
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="testimonials-container text-white text-center p-8" ref={containerRef}>
            <h2>Testimonials</h2>
            <div className="testimonials flex flex-wrap justify-center gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-24 h-24 object-cover mx-auto" />
                        <p id={`quote-${index}`} className="quote typing-effect my-4">"{testimonial.quote}"</p>
                        <p className="name font-bold">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;






