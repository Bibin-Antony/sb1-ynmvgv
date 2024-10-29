import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The global perspective and quality of education here is unmatched. I've learned so much and advanced my career significantly.",
    author: "Maria Rodriguez",
    role: "Software Engineer",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    content: "The flexibility to learn at my own pace while getting world-class education has been incredible. Highly recommend!",
    author: "Alex Chen",
    role: "Data Scientist",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    content: "The community support and networking opportunities have been invaluable. I've connected with professionals worldwide.",
    author: "Sarah Johnson",
    role: "Product Manager",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500">
            Join thousands of satisfied students from around the world
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="mt-4 text-lg text-gray-600">"{testimonial.content}"</p>
              <div className="mt-6 flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    {testimonial.author}
                  </p>
                  <div className="text-base text-gray-500">
                    {testimonial.role} • {testimonial.country}
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