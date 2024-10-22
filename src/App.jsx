import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/nav';
import Consultation from './components/consultation';
import Salads from './components/salads';
import Plans from './components/plans';
import Reviews from './components/reviews';
import Calculator from './components/calculator';
import FAQ from './components/FAQ';
import Footer from './components/footer';
import Contact from './components/contact';
import NavSmall from './mobile-version/NavSmall';

function App() {
  const [showContact, setShowContact] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 420);

  const handleContactClick = () => {
    setShowContact(true);
    window.history.pushState(null, '', 'contact');
  };

  const handlePopState = () => {
    setShowContact(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 420);
  };

  useEffect(() => {
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="change-bg-for-all-components">
      {!showContact ? (
        <>
          {isMobile ? (
            <NavSmall onContactClick={handleContactClick} />
          ) : (
            <Navbar onContactClick={handleContactClick} />
          )}
          <Consultation onContactClick={handleContactClick} />
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
