import React from 'react';
import { GraduationCap, Search, Globe, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <GraduationCap className="h-9 w-9 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">EduGlobal</span>
            </div>
            
            <div className="hidden lg:ml-12 lg:flex lg:space-x-8">
              <div className="group relative">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                  <span>Courses</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 hidden w-48 rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                  <a href="#" className="block rounded-md px-4 py-2 text-gray-700 hover:bg-blue-50">Programming</a>
                  <a href="#" className="block rounded-md px-4 py-2 text-gray-700 hover:bg-blue-50">Business</a>
                  <a href="#" className="block rounded-md px-4 py-2 text-gray-700 hover:bg-blue-50">Data Science</a>
                  <a href="#" className="block rounded-md px-4 py-2 text-gray-700 hover:bg-blue-50">Languages</a>
                </div>
              </div>
              <a href="#" className="text-gray-600 hover:text-gray-900">Enterprise</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-64 rounded-full border-gray-200 pl-10 pr-4 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-2 border-l border-gray-200 pl-6">
              <Globe className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-600">EN</span>
            </div>
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full rounded-lg border-gray-200 pl-10 pr-4 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Courses</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Enterprise</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">About</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Contact</a>
            <div className="mt-4 space-y-2">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};