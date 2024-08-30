'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


interface AnimatedTextProps {
  words: string[];
  interval?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ words, interval = 1000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <div className=" overflow-hidden inline-block relative top-8 h-[1.1em] w-[5.1em] ">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWordIndex}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.7 }}
        >
          {words[currentWordIndex].split('').map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
       </div>
  );
};

const Page1: React.FC = () => {
  return (    
    <div className='page-part-1 w-full h-[32vw] p-16 pt-20 flex font-[Satoshi] '> 
      <div className="content flex flex-col h-full mt-24 text-[6vw] tracking-[-0.3vw] leading-[4.5vw] font-semibold">
        <h1 className='text-white'>Design studio</h1>
        <h1 className='text-white'>for timeless <AnimatedText words={['strategy', 'packaging', 'motion', 'naming', 'branding']} /></h1> 
      </div>
    </div>

  );
};

export default Page1;