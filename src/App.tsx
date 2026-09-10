/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sections from './components/Sections';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-offwhite text-forest font-sans selection:bg-electric/20 selection:text-forest">
      <Header />
      
      <main>
        <Hero />
        <Sections />
      </main>

      <ContactFooter />
    </div>
  );
}
