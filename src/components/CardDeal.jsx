import React from 'react'
import { card } from '../assets';
import styles, { layout } from '../style.js';
import Button from './Button.jsx';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>It is funny that when they laugh, I'm not laughing. They don't realize I don't forget anything. When the chips are down and the constructs no longer protect them, I will have the last laugh. 
        </p>
        <Button styles="mt-10" />
      </div>
        
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>

      </section>


  );
}

export default CardDeal
