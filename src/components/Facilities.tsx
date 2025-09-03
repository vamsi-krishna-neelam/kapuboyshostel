import React from 'react';
import { 
  Wifi, 
  BookOpen, 
  Shield, 
  Car, 
  Utensils,
  Zap,
  Clock,
  Headphones,
  Stethoscope
} from 'lucide-react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'High-Speed WiFi',
      description: 'Blazing fast internet throughout the hostel for seamless online learning.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Study Rooms',
      description: 'Quiet, well-lit spaces designed specifically for focused academic work.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security System',
      description: 'CCTV monitoring, secure access cards, and 24/7 security personnel.',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Parking Space',
      description: 'Secure parking for bikes, scooters, and cars with covered spaces.',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Common Kitchen',
      description: 'Fully equipped shared kitchens for those who love to cook.',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Mess / Healthy Food',
      description: 'Nutritious and hygienic meals served daily with multiple menu options.',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Medical Assistance',
      description: 'Immediate medical support available along with first aid and doctor on call.',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power Backup',
      description:  "Enjoy uninterrupted power with reliable Solar Energy systems.",
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for any issues or emergencies.',
      color: 'from-lime-400 to-lime-600'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Study Pods',
      description: 'Private study pods with sound isolation for exam preparation.',
      color: 'from-violet-400 to-violet-600'
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            World-Class{' '}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Facilities
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need for a comfortable, productive, and enjoyable stay. 
            Our facilities are designed to support your academic journey and personal well-being.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl 
                         hover:shadow-2xl 
                         transition-all duration-300 transform hover:-translate-y-2 
                         cursor-pointer overflow-hidden 
                         focus:outline-none active:outline-none"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${facility.color} rounded-2xl mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {facility.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-transform duration-300 group-hover:translate-x-1">
                {facility.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-transform duration-300 group-hover:translate-x-1">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-blue-900/20 dark:to-yellow-900/20 rounded-3xl border border-blue-200 dark:border-blue-800">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Experience Comfortable Living
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                All facilities included in your stay - no hidden charges!
              </p>
            </div>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-shrink-0 bg-gradient-to-r from-blue-400 to-yellow-400 hover:from-blue-500 hover:to-yellow-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Schedule a Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
