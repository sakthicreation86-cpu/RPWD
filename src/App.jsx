import Chapters from './components/Chapters';
import DisabilityTypes from './components/DisabilityTypes';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PwaPrompt from './components/PwaPrompt';
import Hero from './components/Hero';
import CardNav from './components/Navbar';
import OverviewCards from './components/OverviewCards';
import StatsRow from './components/StatsRow';

export default function App() {
  return (
    <>
      <div className="relative">
        <CardNav />
        <Hero />
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <main className="w-full max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <StatsRow />
          <OverviewCards />
          <Chapters />
          <DisabilityTypes />
          <FAQ />
          <Contact />
        </main>
      </div>

      <Footer />
      <PwaPrompt />
    </>
  );
}
