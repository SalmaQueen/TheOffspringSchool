import styles from "../style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CardList from "./components/Card";
import  Analysis  from "./components/Analysis/Analysis";
import Footer from "./components/Footer";
import Faqs from "./components/FAQS/Faqs";
import Contact from "./components/Contact";
const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className={` bg-nav  ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={` ${styles.flexStart}`}>
      <div className={`  text-white ${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <About/>
      <br/>
      <div className="flex-wrap">
      <CardList /></div>
      <Analysis/>

      <Faqs/>
      <br/>
      <Contact/>
      <Footer/>

      </div>
    </div>
  </div>
);

export default App;
