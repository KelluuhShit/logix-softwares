import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-green-400 p-8 font-sen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-gray-800 text-green-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded-md bg-gray-800 text-green-400"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea
              className="w-full p-2 rounded-md bg-gray-800 text-green-400"
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="w-full p-2 bg-green-600 hover:bg-green-800 rounded-md text-black font-bold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
