import React, { Suspense } from 'react';
import Hero from './components/Hero';
import Houses from './components/Houses';

function Explore() {
  return (
    <div>
      <Hero />
      {/* Wrap Houses (which contains Properties) in Suspense */}
      <Suspense fallback={<div className="text-center py-10">Loading houses...</div>}>
        <Houses />
      </Suspense>
    </div>
  );
}

export default Explore;
