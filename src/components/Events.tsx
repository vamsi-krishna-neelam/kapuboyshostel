import React from 'react';
import { Calendar, Users, Music, BookOpen, Coffee, Camera, Gamepad2, Heart } from 'lucide-react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Pranapratishta Day of ganesh chaturthi',
      date: 'August 27th, 2025',
      time: '8:00 AM',
      description: 'Celebrate the first day of Ganesh Chaturthi with prayers and the installation of Lord Ganesha’s idol',
      icon: <Music className="w-6 h-6" />,
      video: 'PranapratishtaDay.mp4', // 4th is a video
      category: 'Cultural'
    },
    {
     
      id: 2,
      title: 'Ganesh Celebrations',
      date: 'August 31st , 2025 Friday',
      time: '6:00 PM',
      description: 'Celebrate Ganesh Chaturthi with fun activities and cultural events',
      icon: <Coffee className="w-6 h-6" />,
      video: 'ganeshCelebrations.mp4', // 4th is a video
      category: 'Social'
    },
    {
      id: 3,
      title: 'Study Group Sessions',
      date: 'Every Monday',
      time: '6:00 PM',
      description: 'Collaborative study sessions for different subjects',
      icon: <BookOpen className="w-6 h-6" />,
      image: 'studyhall.jpg', // image 2
      category: 'Academic'
    },
    {
      id: 4,
      title: 'Welcome Kapu Hostel Anniversary',
      date: 'November, 2024',
      time: '7:00 PM',
      description: 'Meet your fellow residents and kickstart new friendships',
      icon: <Users className="w-6 h-6" />,
      image: 'anniversity.JPG', // image 1
      category: 'Social'
    }
  ];

  const communityFeatures = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photography Club',
      description: 'Capture memories and explore the city together'
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Gaming Tournaments',
      description: 'Monthly gaming competitions with exciting prizes'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Book Club',
      description: 'Monthly book discussions and literary exchanges'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Wellness Programs',
      description: 'Yoga sessions, meditation, and mental health support'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Events &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            More than just accommodation - join a vibrant community of students. 
            Participate in exciting events and build lifelong connections.
          </p>
        </div>

        {/* Events Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Highlights of Events
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Event Media (Image or Video) */}
                <div className="relative h-48 overflow-hidden">
                  {event.video ? (
                    <video
                      src={event.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url('${event.image}')` }}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-xl flex items-center justify-center text-white">
                        {event.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {event.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Features */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Community Activities
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group text-center p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
