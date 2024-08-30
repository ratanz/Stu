'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Page1 from '@/components/Page1';
import Part2 from '@/components/Part2';
import Page3 from '@/components/Page3';
import Page4 from '@/components/Page4';
import Page5 from '@/components/Page5';
import Page6 from '@/components/Page6';
import Page7 from '@/components/Page7';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#000000]"> {/* Set minimum height to full viewport and background color */}
      {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}
      <div className={`${isLoading ? 'hidden' : 'block'} min-h-screen`}>
        <Navbar />
        <Page1 />
        <Part2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
