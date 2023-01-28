import React from 'react';
import styles from './style.js';



// modern way of defining an application instead of export default function App() {return()}
// lol tutorial wants me to use snippets tf!!! im the fucking brains i dont want that shit coding for me
// initial div 
// bg-primary sets background colour to primary color in tailwind.config.cjs
// w-full sets width of element to 100%
// overflow-hidden - nothing spills out of the toy box!
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Navbar
        </div>
      </div>


    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero
      </div>
    </div>
    
     <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Stats 
        Business
        Billing
        CardDeal
        Testimonials
        Clients
        CTA
        Footer
      </div>
    </div>


</div>


  );
}

export default App;
