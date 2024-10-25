import React from 'react';

const Home = () => {
  return (
    <div 
      className="relative min-h-screen bg-fixed bg-cover bg-center" 
      style={{
        backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/001/987/860/non_2x/abstract-futuristic-particle-lines-mesh-on-blue-background-with-light-effect-technology-concept-free-vector.jpg)',
      }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content Section */}
      <div className="relative flex flex-col p-8 min-h-screen z-10 text-green-400 font-sen">
          <h1 className="text-5xl font-bold mb-4 mt-20">Welcome to Logix Softwares</h1>
          <p className="text-lg max-w-xl">
            At Logix Softwares, we deliver innovative technology solutions to help your business grow and succeed. Our team of experts ensures high-quality services in every project.
          </p>

          {/* Key Highlights */}
          <div className="mt-8">
            <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <span className="text-green-400 text-2xl mr-3">✓</span>
                <span>Innovative and Cutting-Edge Solutions</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 text-2xl mr-3">✓</span>
                <span>Tailored Software Development for Your Business</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 text-2xl mr-3">✓</span>
                <span>Reliable Customer Support 24/7</span>
              </li>
            </ul>
          </div>

          {/* Service Summary */}
          {/* <div className="mt-8">
            <h2 className="text-3xl font-semibold mb-4">Our Expertise</h2>
            <p className="max-w-xl">
              We specialize in a wide range of IT services, including custom software development, cloud solutions, mobile app development, and IT consulting. With a dedicated team of experts, we ensure seamless project execution and deliver scalable, efficient, and secure solutions for your business.
            </p>
          </div>

          
          <div className="mt-8">
            <h2 className="text-3xl font-semibold mb-4">What Our Clients Say</h2>
            <div className="space-y-4">
              <blockquote className="italic text-gray-400">
                "Logix Softwares exceeded our expectations with their innovative solutions and unmatched professionalism. They helped us streamline our operations and improve our efficiency."
                <footer className="text-green-400 mt-2">- Jane Doe, CEO of TechCorp</footer>
              </blockquote>
              <blockquote className="italic text-gray-400">
                "Their customer service is outstanding, and their technical expertise is top-notch. We couldn't be happier with the results."
                <footer className="text-green-400 mt-2">- John Smith, Founder of StartupX</footer>
              </blockquote>
            </div>
          </div> */}

          {/* CTA */}
          <div className="mt-8">
          <a href='#services'><button className="bg-green-400 text-black px-6 py-3 rounded-md text-lg font-bold hover:bg-green-500 transition">
              Go to Services
            </button></a>
          </div>
      </div>
    </div>
  );
};

export default Home;
