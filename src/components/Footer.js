import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-green-400 p-4 font-sen">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Logix Softwares. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy" className="hover:text-green-600 mx-2">Privacy Policy</a>
          <a href="/terms" className="hover:text-green-600 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
