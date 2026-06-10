import Navigation from './components/Navigation';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import TrustSignals from './components/TrustSignals';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <StatsBar />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <TrustSignals />
      <FinalCTA />
      <Footer />
    </div>
  );
}
