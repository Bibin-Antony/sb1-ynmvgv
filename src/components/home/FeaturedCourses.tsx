import React from 'react';
import { Star } from 'lucide-react';
import type { Course } from '@/types';

const FEATURED_COURSES: Course[] = [
  {
    id: '1',
    title: 'Web Development Bootcamp',
    description: 'Learn full-stack web development from scratch',
    instructor: 'Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    duration: '12 weeks',
    level: 'beginner',
    category: 'Technology',
    rating: 4.8,
    enrolledCount: 1234
  },
  {
    id: '2',
    title: 'Business Leadership',
    description: 'Master the art of business leadership',
    instructor: 'Michael Chen',
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    duration: '8 weeks',
    level: 'intermediate',
    category: 'Business',
    rating: 4.9,
    enrolledCount: 856
  },
  {
    id: '3',
    title: 'Data Science Fundamentals',
    description: 'Introduction to data science and analytics',
    instructor: 'Emily Rodriguez',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    duration: '10 weeks',
    level: 'beginner',
    category: 'Technology',
    rating: 4.7,
    enrolledCount: 2156
  }
];

export const FeaturedCourses = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Courses</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Discover our most popular courses chosen by students worldwide
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_COURSES.map((course) => (
            <div key={course.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={course.thumbnail} alt={course.title} />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">{course.category}</p>
                  <div className="mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{course.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                      <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-sm text-gray-600">{course.enrolledCount.toLocaleString()} students</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{course.duration}</span>
                    <span className="text-sm font-medium text-gray-500">{course.level}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};