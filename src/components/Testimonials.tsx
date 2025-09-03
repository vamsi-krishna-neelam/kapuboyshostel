import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  course: string;
  university: string;
  rating: number;
  text: string;
  // image: string;
  duration: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Venkatesh Narapasetty',
      course: 'B.pharmacy',
      university: 'Hindu Pharmacy',
      rating: 5,
      text: "Guntur Kapu Boys Hostel has been my home for the past 2 years. The facilities are top-notch, especially the study rooms which helped me maintain my grades. The community here is amazing - I've made lifelong friends!",
      // image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      duration: '2 years'
    },
    {
      id: 2,
      name: 'Durga Prasad busa',
      course: 'Engineering',
      university: 'CIET',
      rating: 5,
      text: "The best decision I made was choosing Kapu Boys Hostel. From the security to the cleanliness, everything is perfect. The staff is incredibly helpful and the WiFi is super fast - perfect for online classes.",
      // image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      duration: '2 years'
    },
    {
      id: 3,
      name: 'Braham ',
      course: 'Engineering',
      university: 'CIET',
      rating: 5,
      text: "As an  B.Tech student, I needed a place that balanced comfort with productivity. Haven Hostel exceeded my expectations with its premium facilities and vibrant community atmosphere.",
      // image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      duration: '2 year'
    },
    {
      id: 4,
      name: 'Koteswarao polisetty',
      course: 'Medical',
      university: 'AIIMS Delhi',
      rating: 4,
      text: "The study environment here is exceptional. Being a medical student, I needed quiet spaces for long study sessions, and the dedicated study rooms are perfect. Great value for money!",
      // image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      duration: '6 months'
    },
    {
      id: 5,
      name: 'Ananya Singh',
      course: 'Design',
      university: 'NIFT Mumbai',
      rating: 5,
      text: "The creative environment and the community at Haven Hostel have been instrumental in my growth. The recreational facilities help me unwind after intensive design sessions.",
      // image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      duration: '8 months'
    },
    {
      id: 6,
      name: 'Vikram Malhotra',
      course: 'Law',
      university: 'National Law School',
      rating: 5,
      text: "Haven Hostel provides the perfect balance of privacy and community. The legal library access and quiet study zones have been crucial for my law studies. Highly recommended!",
      // image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      duration: '3 years'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our residents have to say about 
            their experience living at Guntur Kapu Boys Hostel.
          </p>
        </div>

        Testimonials Slider
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-full flex items-center justify-center">
                        <Quote className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-6 h-6 ${
                            i < testimonial.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300 dark:text-gray-600'
                          }`} 
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Student Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <div 
                        className="w-16 h-16 bg-cover bg-center rounded-full border-4 border-white dark:border-gray-700 shadow-lg"
                        style={{ backgroundImage: `url('${testimonial.image}')` }}
                      />
                      <div className="text-center sm:text-left">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.course} • {testimonial.university}
                        </p>
                        <p className="text-xs text-blue-400 font-medium">
                          Resident for {testimonial.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-400 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">4.9</div>
            <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">200+</div>
            <div className="text-gray-600 dark:text-gray-400">Happy Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">99%</div>
            <div className="text-gray-600 dark:text-gray-400">Recommend Us</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;