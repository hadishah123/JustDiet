import './App.css';
import { useEffect, useState } from 'react';
import Navbar from "./components/nav";
import Consultation from "./components/consultation";
import Salads from "./components/salads";
import Plans from "./components/plans";
import Reviews from "./components/reviews";
import Calculator from "./components/calculator";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
    window.history.pushState(null, "", "contact");
  };

  const handlePopState = () => {
    setShowContact(false);
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="change-bg-for-all-components">
      {!showContact ? (
        <>
          <Navbar onContactClick={handleContactClick} />
          <Consultation onContactClick={handleContactClick}/>
          <Salads />
          <Plans />
          <Reviews />
          <Calculator />
          <FAQ />
          <Footer onContactClick={handleContactClick} />
        </>
      ) : (
        <Contact />
      )}
    </div>
  );
}

export default App;