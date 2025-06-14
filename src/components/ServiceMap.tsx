
import React, { useState } from 'react';
import { MapPin, Search, Phone, Navigation } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  category: string;
  phone: string;
  address: string;
  lat: number;
  lng: number;
  description: string;
}

const ServiceMap = () => {
  const [selectedCategory, setSelectedCategory] = useState('সকল');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // নমুনা সার্ভিস ডেটা
  const services: Service[] = [
    {
      id: 1,
      name: "ধুনট জেনারেল হাসপাতাল",
      category: "হাসপাতাল",
      phone: "01712-345678",
      address: "হাসপাতাল রোড, ধুনট",
      lat: 24.7667,
      lng: 89.5233,
      description: "২৪ ঘন্টা জরুরি সেবা"
    },
    {
      id: 2,
      name: "ডা. আব্দুল করিম",
      category: "ডাক্তার",
      phone: "01819-876543",
      address: "কলেজ রোড, ধুনট",
      lat: 24.7670,
      lng: 89.5240,
      description: "হৃদরোগ বিশেষজ্ঞ"
    },
    {
      id: 3,
      name: "সোনালী ব্যাংক",
      category: "ব্যাংক",
      phone: "01567-789123",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      lat: 24.7660,
      lng: 89.5250,
      description: "এটিএম ও সাধারণ ব্যাংকিং"
    },
    {
      id: 4,
      name: "ধুনট পুলিশ স্টেশন",
      category: "নিরাপত্তা",
      phone: "01712-999888",
      address: "স্টেশন রোড, ধুনট",
      lat: 24.7680,
      lng: 89.5220,
      description: "জরুরি সেবা ও নিরাপত্তা"
    },
    {
      id: 5,
      name: "ধুনট কলেজ",
      category: "শিক্ষা",
      phone: "01819-555444",
      address: "কলেজ পাড়া, ধুনট",
      lat: 24.7675,
      lng: 89.5235,
      description: "উচ্চ মাধ্যমিক শিক্ষা প্রতিষ্ঠান"
    }
  ];

  const categories = ["সকল", "হাসপাতাল", "ডাক্তার", "ব্যাংক", "নিরাপত্তা", "শিক্ষা"];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'সকল' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'হাসপাতাল': 'bg-red-100 text-red-600',
      'ডাক্তার': 'bg-red-100 text-red-600',
      'ব্যাংক': 'bg-teal-100 text-teal-600',
      'নিরাপত্তা': 'bg-blue-100 text-blue-600',
      'শিক্ষা': 'bg-green-100 text-green-600'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="px-4 py-6 bg-gray-50">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
          <MapPin className="text-blue-600 mr-2" size={20} />
          সার্ভিস ম্যাপ
        </h2>
        
        {/* সার্চ বার */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="সার্ভিস খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* ক্যাটেগরি ফিল্টার */}
        <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
                selectedCategory === category
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ম্যাপ এবং সার্ভিস তালিকা */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* ইন্টারেক্টিভ ম্যাপ এরিয়া */}
        <div className="h-64 bg-gradient-to-br from-blue-50 to-green-50 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58419.89842987717!2d89.5233!3d24.7667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5f5b5c5a5a5b%3A0x5c5a5a5b5c5a5a5b!2sDhunat%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* ম্যাপ ওভারলে */}
          <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded-md text-xs shadow-sm">
            <MapPin size={12} className="inline mr-1 text-blue-600" />
            ধুনট এলাকা
          </div>
          
          <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-md text-xs shadow-sm">
            {filteredServices.length} টি সার্ভিস
          </div>
        </div>

        {/* সার্ভিস তালিকা */}
        <div className="p-4">
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`p-3 rounded-lg border-l-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedService?.id === service.id 
                      ? 'bg-blue-50 border-blue-500 shadow-sm' 
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {service.name}
                        </h3>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${getCategoryColor(service.category)}`}>
                          {service.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1 flex items-center">
                        <MapPin size={10} className="mr-1" />
                        {service.address}
                      </p>
                      <p className="text-xs text-gray-500">{service.description}</p>
                    </div>
                    <div className="flex gap-2 ml-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCall(service.phone);
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white p-1.5 rounded-full transition-colors"
                      >
                        <Phone size={12} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://maps.google.com/maps?q=${service.lat},${service.lng}`);
                        }}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded-full transition-colors"
                      >
                        <Navigation size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <MapPin size={32} className="mx-auto mb-2 text-gray-300" />
                <p className="text-sm">কোন সার্ভিস পাওয়া যায়নি</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMap;
