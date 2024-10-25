import React from 'react';
import PackageCard from '../components/PackageCard';

const Services = () => {
  const services = [
    { 
      title: 'Starter Package', 
      items: [
        { name: 'Single Page Website', price: 'KES 15,000', description: 'Technologies: HTML, CSS' },
        { name: 'Small Business Website (up to 5 pages)', price: 'KES 30,000', description: 'Technologies: HTML, CSS, JavaScript' },
        { name: 'Personal Blog Setup', price: 'KES 20,000', description: 'Technologies: WordPress, HTML, CSS' }
      ]
    },
    { 
      title: 'Standard Package', 
      items: [
        { name: 'Corporate Website (up to 10 pages)', price: 'KES 50,000', description: 'Technologies: HTML, CSS, JavaScript, WordPress' },
        { name: 'E-commerce Website', price: 'KES 70,000', description: 'Technologies: WooCommerce (WordPress), HTML, CSS, JavaScript' },
        { name: 'Portfolio Website', price: 'KES 40,000', description: 'Technologies: HTML, CSS, JavaScript' }
      ]
    },
    { 
      title: 'Advanced Package', 
      items: [
        { name: 'Custom Design & Development', price: 'KES 80,000', description: 'Technologies: HTML, CSS, JavaScript, PHP, MySQL' },
        { name: 'Large Business Website (10+ pages)', price: 'KES 100,000', description: 'Technologies: HTML, CSS, JavaScript, PHP, MySQL' },
        { name: 'Membership/Subscription Website', price: 'KES 90,000', description: 'Technologies: WordPress, Membership Plugins, HTML, CSS, JavaScript' }
      ]
    },
    { 
      title: 'Additional Services', 
      items: [
        { name: 'Website Maintenance', price: 'KES 5,000 per month', description: 'Technologies: WordPress, HTML, CSS' },
        { name: 'Content Updates', price: 'KES 3,000 per update', description: 'Technologies: HTML, CSS, WordPress' },
        { name: 'SEO Optimization', price: 'KES 10,000', description: 'Technologies: SEO Tools (e.g., Yoast SEO for WordPress)' },
        { name: 'Custom Graphics Design', price: 'KES 5,000', description: 'Technologies: Adobe Photoshop, Illustrator' },
        { name: 'Website Hosting Setup', price: 'KES 5,000', description: 'Technologies: cPanel, Hosting Platforms (e.g., Hostinger, Bluehost)' },
        { name: 'Domain Registration', price: 'KES 2,000', description: 'Technologies: Domain Registrars (e.g., GoDaddy, Namecheap, Hostinger)' },
        { name: 'Responsive Design Upgrade', price: 'KES 10,000', description: 'Technologies: CSS, Bootstrap' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-sen">
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-5xl font-bold mb-10 text-center">Our Services & Pricing</h2>
        <div className="space-y-16">
          {/* Display packages in a row with wrapping */}
          <div className="flex flex-wrap justify-around align-center space-x-4">
            {services.slice(0, 3).map((servicePackage, index) => ( // Only display the first three packages
              <div key={index} className="flex-1 min-w-[250px] max-w-[300px] mb-4"> {/* Set a min and max width for responsive behavior */}
                <PackageCard title={servicePackage.title} items={servicePackage.items} />
              </div>
            ))}
          </div>
          {/* Additional Services Section */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-center">{services[3].title}</h3>
            <div className="space-y-4">
              {services[3].items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="border border-green-400 rounded-lg p-4 text-center"
                >
                  <h4 className="text-lg font-semibold text-green-400 mb-2">{item.name}</h4>
                  <p className="text-green-600 font-medium mb-1">{item.price}</p>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
