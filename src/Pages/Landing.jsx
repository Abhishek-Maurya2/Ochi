import React from 'react'

function Landing() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Landing />
      <Marque />
      <About />
      <Eyes />
    </div>
  );
}

export default Landing