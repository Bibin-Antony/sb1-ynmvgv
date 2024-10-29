import React from 'react';
import { Users, GraduationCap, Globe2, Award } from 'lucide-react';

const stats = [
  { name: 'Active Students', value: '50K+', icon: Users },
  { name: 'Total Courses', value: '300+', icon: GraduationCap },
  { name: 'Countries Reached', value: '150+', icon: Globe2 },
  { name: 'Success Rate', value: '95%', icon: Award },
];

export const Statistics = () => {
  return (
    <div className="bg-blue-600 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-base text-blue-100">{stat.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};