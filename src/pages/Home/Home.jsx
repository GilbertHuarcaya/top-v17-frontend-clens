import { useEffect } from 'react';
import HeroSection from '../../components/HeroSection';
import HowItWorks from '../../components/HowItWorks';
import ServicesHome from '../../components/ServicesHome';
import BtnSolicita from '../../components/BtnSolicita';
import ReviewsHome from '../../components/ReviewsHome';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <ServicesHome />
      <ReviewsHome />
      <BtnSolicita />
    </>
  );
};
export default App;
