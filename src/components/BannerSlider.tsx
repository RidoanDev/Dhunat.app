
import React, { useState, useEffect } from 'react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
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
    },
    { 
      id: 4, 
      title: "🎯 বিজ্ঞাপন দিন এখানে!", 
      subtitle: "যোগাযোগ করুন আজই",
      color: "bg-gradient-to-r from-orange-400 to-red-500",
      phone: "01712525910",
      isAdvertisement: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="mx-4 mt-4 mb-3">
      <div className="aspect-[2.5/1] rounded-xl overflow-hidden shadow-lg">
        <div 
          className={`${banners[currentSlide].color} w-full h-full flex items-center justify-between px-4 text-white transition-all duration-500`}
        >
          <div className="flex-1">
            <h2 className="text-sm font-bold mb-1">
              {banners[currentSlide].title}
            </h2>
            <p className="text-xs opacity-90">{banners[currentSlide].subtitle}</p>
            {banners[currentSlide].isAdvertisement && (
              <p className="text-xs opacity-80 mt-1">📞 {banners[currentSlide].phone}</p>
            )}
          </div>
          <button
            onClick={() => handleCall(banners[currentSlide].phone)}
            className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-medium hover:bg-opacity-30 transition-colors"
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
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
