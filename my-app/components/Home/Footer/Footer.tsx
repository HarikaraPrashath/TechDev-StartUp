import React from 'react';
import { BiGlobe } from 'react-icons/bi';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-16 pl-20">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Solution Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Solution</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Enterprise</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">By Workflow</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">By Team</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">News & Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Our Customers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Leadership</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Careers</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Webinars & Events</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Podcasts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">E-books & Guides</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-600">
              <div>
                <p className="text-sm">Mobile Number</p>
                <p className="text-base font-medium text-gray-900">+012 345 6788</p>
              </div>
              <div>
                <p className="text-sm">Email</p>
                <p className="text-base font-medium text-gray-900">example@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-6 mr-15 border-gray-300">
          <p className="text-gray-600 text-sm text-center sm:text-left mb-4 sm:mb-0">
            © 2024 Webdev. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Follow us:</span>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              <FaFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              <BsTwitterX className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              <BiGlobe className="w-5 h-5" />
              <span className="sr-only">Website</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
