import React from 'react'
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style.js';

// using flex-col-reverse for mobile devices because you want it to appear top to bottom since there isn't much space to scroll side to side vs. a computer with a larger screen

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"  />
        <div className="aboslute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" /> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          I will make every single one of them pay in this world. No one will escape. I won't spare a single one. With the way the previous generations squeeze the future generations, there will come a breaking point. The true ripple effect isn't from a single individual's rhetoric, but within the system.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple_store" className="w-[128px] h=[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  );
}

export default Billing
