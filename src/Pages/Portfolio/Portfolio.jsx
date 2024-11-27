import { Fragment } from "react";
import HeadNav from "../../Components/HeadNav/HeadNav";
import Herosection from "../../Components/Herosection/Herosection";
import AboutMe from "../../Components/Aboutme/Aboutme";
import Resume from "../../Components/Resume/Resume";
import ConatctMe from "../../Components/Contactme/Contactme";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonial/Testimonial";
const Portfolio = () => {
  return (
    <Fragment>
      <HeadNav />
      <Herosection />
      <AboutMe />
      <Resume />
      <Testimonial />
      <ConatctMe />
      <Footer />
    </Fragment>
  );
};
export default Portfolio;
