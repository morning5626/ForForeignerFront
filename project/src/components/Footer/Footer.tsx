import React from 'react';
import { Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5a9a9] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold flex items-center">
                <span className="text-white">For</span>
                <span className="text-white">F</span>
                <Globe className="w-5 h-5 text-white mx-1" />
                <span className="text-white">reigner</span>
              </span>
            </div>
            <p className="text-white/90">
              Helping foreign residents and visitors navigate life in Korea with 
              language learning, cultural resources, and community support.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-white/20 text-sm text-white/70">
          <p>Copyright © 2025-2030 ForForeigner. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;