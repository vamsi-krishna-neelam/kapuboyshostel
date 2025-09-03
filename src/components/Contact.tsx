import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  Star,
  Navigation
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '', subject: 'general' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['Balisetty. Vijay Kumar (Manager) -> +91 98765 43210 ', '+91 86867 41799','+91 70329 01607'],
      action: 'Call Now'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['gunturkapuboyshostel@gmail.com'],
      action: 'Send Email'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['Near Next Zen International School', 'Gorantla','Guntur District, Guntur 522034'],
      action: 'Get Directions'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hostel Hours',
      details: ['24/7 Available',],
      action: 'Visit Us'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in{' '}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to make Guntur Kapu Boys Hostel your new home? We're here to answer all your questions 
            and help you with the booking process. Reach out to us anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We're always available to help you. Choose the most convenient way to reach us.
              </p>
            </div>

            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-yellow-50 dark:hover:from-blue-900/20 dark:hover:to-yellow-900/20 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    {item.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                    <button className="text-blue-400 hover:text-blue-500 text-sm font-medium mt-2 transition-colors duration-200">
                      {item.action} →
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 bg-blue-400 hover:bg-blue-500 text-white py-3 px-6 rounded-xl transition-colors duration-300">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted && (
                <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 p-4 rounded-xl mb-6">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="booking">Room Booking</option>
                      <option value="facilities">Facilities Question</option>
                      <option value="support">Support Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                    placeholder="Tell us about your requirements, questions, or any specific needs you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-400 to-yellow-400 hover:from-blue-500 hover:to-yellow-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

      {/* Map Section */}
<div className="mt-20">
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
    Find Us Here
  </h3>
  <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
    <div className="relative h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
      <div className="text-center">
        <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Interactive Map
        </h4>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Guntur Kapu Boys Hostel, Gorantla, Guntur District, Andhra Pradesh
        </p>

        {/* Google Maps Directions Button */}
        <a
          href="https://maps.app.goo.gl/DsaNLUQhXP8c5QM66"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-green-400 hover:bg-blue-500 text-white px-60 py-3 rounded-xl transition-colors duration-300 mx-auto"
        >
          <Navigation className="w-5 h-5" />
          <span>Get Directions</span>
        </a>
      </div>
    </div>
  </div>
</div>


        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What's included in the room rent?",
                answer: "Room rent includes WiFi, electricity, water, security, housekeeping, and access to all common facilities."
              },
              {
                question: "Is there a security deposit?",
                answer: "Yes, we require a refundable security deposit of ₹5,000 for all room types, which is returned upon checkout."
              },
              {
                question: "Can I visit before booking?",
                answer: "Absolutely! We encourage campus visits. Contact us to schedule a tour and see our facilities firsthand."
              },
              {
                question: "What are the meal options?",
                answer: "We have an in-house cafeteria with affordable meals, plus common kitchens where you can cook your own food."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;