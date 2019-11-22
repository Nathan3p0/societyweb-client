import React from 'react';
import './TestimonialSection.css';
import customer from './images/customer_image.png';

const TestimonialSection = () => {
    return (
        <section className="testimonial__main">
            <div className="testimonial__main-statement">
                <img src={customer} alt="female customer" className="customer-image" />
                <p>"It's the perfect solution for our team. I don't always clap, but when I do, it's because of Society Web. We've seen amazing results already. Not able to tell you how happy I am with Society Web."
- Judy K.</p>
            </div>
        </section>
    );
}

export default TestimonialSection;