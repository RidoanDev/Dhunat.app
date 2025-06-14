
import React, { useState, useEffect } from 'react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
    { 
      id: 4, 
      title: "🎯 বিজ্ঞাপন দিন এখানে!", 
      subtitle: "যোগাযোগ করুন আজই",
      color: "bg-gradient-to-r from-orange-400 to-red-500",
      phone: "01712525910",
      isAdvertisement: true
    },
    { 
      id: 1, 
      title: "ধুনট ডিজিটাল হাসপাতাল", 
      subtitle: "২৪/৭ জরুরি সেবা",
      color: "bg-gradient-to-r from-blue-400 to-blue-600",
      phone: "01712-345678"
    },
    { 
      id: 2, 
      title: "সফল ট্রান্সপোর্ট", 
      subtitle: "নিরাপদ ও আরামদায়ক যাত্রা",
      color: "bg-gradient-to-r from-green-400 to-green-600",
      phone: "01819-876543"
    },
    { 
      id: 3, 
      title: "ধুনট ব্যাংক", 
      subtitle: "আপনার আর্থিক সমাধান",
      color: "bg-gradient-to-r from-purple-400 to-purple-600",
      phone: "01567-789123"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="mx-2 sm:mx-4 mt-4 mb-3">
      <div className="aspect-[2.5/1] sm:aspect-[3/1] md:aspect-[3.5/1] lg:aspect-[4/1] rounded-xl overflow-hidden shadow-lg">
        <div 
          className={`${banners[currentSlide].color} w-full h-full flex items-center justify-between px-3 sm:px-4 md:px-6 text-white transition-all duration-500`}
        >
          <div className="flex-1 min-w-0">
            <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 truncate">
              {banners[currentSlide].title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base opacity-90 truncate">
              {banners[currentSlide].subtitle}
            </p>
            {banners[currentSlide].isAdvertisement && (
              <p className="text-xs sm:text-sm opacity-80 mt-1 truncate">
                📞 {banners[currentSlide].phone}
              </p>
            )}
          </div>
          <button
            onClick={() => handleCall(banners[currentSlide].phone)}
            className="bg-white bg-opacity-20 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-opacity-30 transition-colors whitespace-nowrap ml-2"
          >
            {banners[currentSlide].isAdvertisement ? "📞 কল" : "কল করুন"}
          </button>
        </div>
      </div>
      
      <div className="flex justify-center mt-2 space-x-1">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
