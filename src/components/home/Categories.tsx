import React from 'react';
import { Code, BookOpen, Briefcase, Globe2, Lightbulb, LineChart } from 'lucide-react';

const categories = [
  { name: 'Programming', description: 'Learn coding and software development', icon: Code, count: 85 },
  { name: 'Languages', description: 'Master new languages and cultures', icon: Globe2, count: 45 },
  { name: 'Business', description: 'Develop business and management skills', icon: Briefcase, count: 65 },
  { name: 'Data Science', description: 'Explore data analysis and machine learning', icon: LineChart, count: 40 },
  { name: 'Personal Development', description: 'Enhance your soft skills', icon: Lightbulb, count: 55 },
  { name: 'Academics', description: 'Study traditional academic subjects', icon: BookOpen, count: 70 },
];

export const Categories = () => {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Categories
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500">
            Find the perfect course in your preferred category
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <div className="rounded-lg bg-blue-50 p-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {category.description}
                    </p>
                    <p className="mt-2 text-sm font-medium text-blue-600">
                      {category.count} courses
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};