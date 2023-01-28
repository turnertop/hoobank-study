// too much clutter in app.jsx if we import normally so by exporting all of them, we just
// have to import index.js in the components folder

import Navbar from './Navbar.jsx';
import Billing from './Billing.jsx';
import CardDeal from './CardDeal.jsx';
import Business from './Business.jsx';
import Clients from './Clients.jsx';
import CTA from './CTA.jsx';
import Stats from './Stats.jsx';
import Footer from './Footer.jsx';
import Testimonials from './Testimonials.jsx';
import Hero from './Hero.jsx';

export {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
};


