import React, { useState } from 'react';
import { Check, Star, ArrowRight, Calendar, CreditCard, Shield } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  type: 'monthly';
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
  roomType: string;
}

const Pricing: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'1month' | '2months' | '3months'>('1month');
  const [selectedPlan, setSelectedPlan] = useState<string>('double');

  const plans: PricingPlan[] = [
    {
      id: 'dorm',
      name: 'One Month',
      type: 'monthly',
      price: 2500,
      originalPrice: 6500,
      description: 'Perfect for budget-conscious students who love community living',
      features: [
        '4-6 bed dormitory',
        'Shared bathroom facilities',
        'Individual storage lockers',
        'Common area access',
        'Basic WiFi',
        'Security system'
      ],
      color: 'from-green-400 to-green-600',
      roomType: 'Hall'
    },
    {
      id: 'double',
      name: 'Two Months',
      type: 'monthly',
      price: 5000,
      originalPrice: 5500,
      description: 'Ideal for students who want to share with a friend',
      features: [
        'Twin bed setup',
        'Shared bathroom',
        'Study desk for each',
        'Individual wardrobes',
        'High-speed WiFi',
        'All facilities access',
        'Daily housekeeping',
        '24/7 support'
      ],
      popular: true,
      color: 'from-blue-400 to-blue-600',
      roomType: 'Double Room'
    },
    {
      id: 'single',
      name: 'Three Months',
      type: 'monthly',
      price: 7500,
      originalPrice: 9000,
      description: 'Ultimate privacy and comfort for focused students',
      features: [
        'Hall',
        'Ensuite bathroom',
        'Modern study setup',
        'Personal mini-fridge',
        'High-speed WiFi',
        'Daily housekeeping',
        'Balcony access',
        'Priority support',
        'Guest privileges',
        'Water Dispenser',
      ],
      color: 'from-purple-400 to-purple-600',
      roomType: 'Single Room'
    }
  ];

  const getCurrentPrice = (plan: PricingPlan) => {
    return plan.price;
  };

  const getOriginalPrice = (plan: PricingPlan) => {
    return plan.originalPrice;
  };

  const handleBookNow = (planId: string) => {
    alert(`Booking ${planId} room for ${selectedPeriod}. This would integrate with a payment system.`);
  };

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Transparent{' '}
          <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Pricing
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          No hidden fees, no surprises. Choose the perfect plan that fits your budget 
          and lifestyle needs.
        </p>

        {/* Period Toggle
        <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
          <button
            onClick={() => setSelectedPeriod('1month')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedPeriod === '1month'
                ? 'bg-blue-400 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            ₹2500 / 1 Month
          </button>
          <button
            onClick={() => setSelectedPeriod('2months')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedPeriod === '2months'
                ? 'bg-blue-400 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            ₹5000 / 2 Months
          </button>
          <button
            onClick={() => setSelectedPeriod('3months')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedPeriod === '3months'
                ? 'bg-blue-400 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            ₹7500 / 3 Months
          </button>
        </div> */}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={`relative group ${plan.popular ? 'transform scale-105' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Most Popular</span>
                </div>
              </div>
            )}

            <div className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
              plan.popular 
                ? 'border-blue-200 dark:border-blue-800 shadow-xl' 
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800'
            }`}>
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-4 text-white`}>
                  <span className="text-2xl font-bold">{plan.name.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {plan.roomType}
                </p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {getOriginalPrice(plan) && (
                    <span className="text-lg text-gray-400 line-through">
                      ₹{getOriginalPrice(plan)}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ₹{getCurrentPrice(plan)}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBookNow(plan.id)}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-400 to-yellow-400 hover:from-blue-500 hover:to-yellow-500 text-white shadow-lg hover:shadow-xl'
                    : `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl`
                }`}
              >
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-blue-900/20 dark:to-yellow-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Ready to Book Your Room?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Fill out this quick form and we'll get back to you within 24 hours
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Preferred Room Type *
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
              >
                <option value="dorm">One Month - ₹2,500</option>
                <option value="double">Two Months - ₹5,000</option>
                <option value="single">Three Months - ₹7,500</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Move-in Date *
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                University/College
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                placeholder="Your institution name"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Special Requirements
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                placeholder="Any specific needs or questions?"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-400 to-yellow-400 hover:from-blue-500 hover:to-yellow-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                <span className="text-blue-600">Submit Booking Request</span>
              </button>
            </div>
          </form>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Secure Booking</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm">No Hidden Fees</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Flexible Dates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
