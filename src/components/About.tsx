import React from 'react';
import { Users, Heart, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Vibrant Community',
      description: 'Connect with like-minded students from around the world in a welcoming environment.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Comfort First',
      description: 'Thoughtfully designed spaces that prioritize your comfort and well-being.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'High-standard facilities and services that exceed your expectations.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance to ensure your stay is always smooth and secure.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                  our Guntur Kapu Boys Hostel
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                At Kapu Hostel, we believe that where you live shapes how you learn, grow, and thrive. 
                Our modern facilities are designed to create the perfect balance between academic focus 
                and social connection, providing you with everything you need to succeed.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                From comfortable study spaces to vibrant common areas, every corner of our hostel 
                is crafted with students in mind. Join our community and discover what it means 
                to truly feel at home while pursuing your dreams.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-blue-50 hover:to-yellow-50 dark:hover:from-blue-900/20 dark:hover:to-yellow-900/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
