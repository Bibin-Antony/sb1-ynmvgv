import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { FeaturedCourses } from './components/home/FeaturedCourses';
import { Statistics } from './components/home/Statistics';
import { Testimonials } from './components/home/Testimonials';
import { Categories } from './components/home/Categories';
import { CallToAction } from './components/home/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Statistics />
        <FeaturedCourses />
        <Categories />
        <Testimonials />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}

export default App;