import React, { useState } from 'react';
import { Bed, Users, Coffee, Shield } from 'lucide-react';

interface Room {
  id: number;
  type: 'studyhall' | 'mesh' | 'Accomdation' | 'washroom';
  image: string;
}

const Rooms: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'studyhall' | 'mesh' | 'washroom'>('all');

  const rooms: Room[] = [
    {
      id: 1,
      type: 'studyhall',
      image: 'studyhall.jpg',
    },
    {
      id: 2,
      type: 'mesh',
      image: 'mesh2.png',
    },
    {
      id: 3,
      type: 'washroom',
      image: 'hostl1.JPG',
    },
    {
      id: 4,
      type: 'studyhall',
      image: 'hostel2.png',
    },
    {
      id: 5,
      type: 'mesh',
      image: 'mesh1.JPG',
    },
    {
      id: 6,
      type: 'washroom',
      image: 'elevation.jpg',
    },
    {
      id: 7,
      type: 'Accomdation',
      image: 'accomdations1.png',
    },
    {
      id: 7,
      type: 'Accomdation',
      image: 'accomdations2.png',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Rooms', icon: <Bed className="w-4 h-4" /> },
    { id: 'studyhall', label: 'Study Hall', icon: <Users className="w-4 h-4" /> },
    { id: 'mesh', label: 'Mesh', icon: <Coffee className="w-4 h-4" /> },
    { id: 'Accomdation', label: 'Accomdation', icon: <Shield className="w-4 h-4" /> },
    { id: 'washroom', label: 'Wash Rooms', icon: <Shield className="w-4 h-4" /> },
  ];

  const filteredRooms = activeFilter === 'all' 
    ? rooms 
    : rooms.filter(room => room.type === activeFilter);

  return (
    <section id="rooms" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your Perfect{' '}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Space
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our Study Halls, Mesh, and Wash Rooms – designed for comfort, productivity, and community living.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-400 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Rooms Grid (Images Only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div 
              key={room.id}
              className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div 
                className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundImage: `url('${room.image}')` }}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              All rooms include free WiFi, security, and 24/7 support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
