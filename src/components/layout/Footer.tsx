import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand and Social */}
          <div className="space-y-6">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-2xl font-bold text-white">EduGlobal</span>
            </div>
            <p className="text-gray-400">
              Empowering learners worldwide with quality education and professional development opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Instructors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Enterprise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Cookie Settings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Accessibility</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="mt-4 text-gray-400">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="mt-4">
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l-lg border-gray-700 bg-gray-800 px-4 py-2 text-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="rounded-r-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 pb-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} EduGlobal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};