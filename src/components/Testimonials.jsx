import React from 'react'
import { feedback } from '../constants';
import styles from '../style.js';
import FeedbackCard from './FeedbackCard.jsx';

// exporting variables with arrays that have properties that hold data

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingy} ${styles.flexCenter} flex-col relative`}>

  <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z=[1]">
        <h1 className={styles.heading2}>What people are <br classBame="sm:block hidden"/> saying about us</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Imagine reducing everything to 0. Like returning everything to nothingness.</p>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full-feedback-container relative z-[1]">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>

      </div>
    </section>


  );
}

export default Testimonials
