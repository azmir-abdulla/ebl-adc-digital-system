/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Role } from './types';

// Components (To be created)
import HomePage from './components/HomePage';
import AdcHeadPortal from './components/adc-head/AdcHeadPortal';
import AdcCentrePortal from './components/adc-centre/AdcCentrePortal';
import CustodianMobileApp from './components/custodian/CustodianMobileApp';

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
    
    :root {
      --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
      --font-mono: 'IBM Plex Mono', monospace;
      --font-serif: 'Libre Baskerville', serif;
    }

    body {
      font-family: var(--font-sans);
      margin: 0;
      padding: 0;
      color: #1e293b;
      background-color: #f8fafc;
    }

    .mono {
      font-family: var(--font-mono);
    }
    
    .serif-italic {
      font-family: var(--font-serif);
      font-style: italic;
    }

    /* Custom Scrollbar - High Density Thinner version */
    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.1);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0,0,0,0.15);
    }

    @keyframes scanLine {
      0%, 100% { top: 20%; opacity: 0.4; }
      50% { top: 75%; opacity: 1; }
    }

    .scan-line {
      position: absolute;
      width: 100%;
      height: 2px;
      background: #008244;
      box-shadow: 0 0 10px rgba(0, 130, 68, 0.5);
      animation: scanLine 2s ease-in-out infinite;
    }

    /* Table High Density Styling */
    table th {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
      font-weight: 700;
    }

    table td {
      font-size: 11px;
    }
  `}</style>
);

export default function App() {
  const [role, setRole] = useState<Role | null>(null);

  const handleBackToHome = () => {
    setRole(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <GlobalStyles />
      <AnimatePresence mode="wait">
        {!role && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HomePage onSelectRole={setRole} />
          </motion.div>
        )}

        {role === 'head' && (
          <motion.div
            key="head"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-screen overflow-hidden"
          >
            <AdcHeadPortal onBack={handleBackToHome} />
          </motion.div>
        )}

        {role === 'centre' && (
          <motion.div
            key="centre"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-screen overflow-hidden"
          >
            <AdcCentrePortal onBack={handleBackToHome} />
          </motion.div>
        )}

        {role === 'custodian' && (
          <motion.div
            key="custodian"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="min-h-screen flex items-center justify-center bg-slate-900 overflow-auto p-8"
          >
            <CustodianMobileApp onBack={handleBackToHome} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
