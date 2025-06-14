
import React from 'react';
import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
import { Info, MapPin, Globe, ExternalLink, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-4 py-4 pb-20">
        <div className="flex items-center mb-4">
          <Info className="text-blue-600 mr-2" size={20} />
          <h1 className="text-lg font-semibold text-gray-900">সম্পর্কে</h1>
        </div>

        {/* App Info */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 p-3 rounded-full mr-3">
              <Code size={20} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Dhunat.App</h2>
              <p className="text-sm text-gray-600">স্থানীয় সেবা নির্দেশিকা</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            ধুনট এলাকার সবচেয়ে বিশ্বস্ত এবং সম্পূর্ণ স্থানীয় সেবা নির্দেশিকা। এখানে আপনি খুঁজে পাবেন ডাক্তার, হাসপাতাল, ব্যাংক, শিক্ষা প্রতিষ্ঠান সহ সকল ধরনের প্রয়োজনীয় সেবার তথ্য।
          </p>
        </div>

        {/* Dhunat Map */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h3 className="text-base font-semibold text-gray-900 mb-3">ধুনট এর মানচিত্র</h3>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58419.89842987717!2d89.5233!3d24.7667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5f5b5c5a5a5b%3A0x5c5a5a5b5c5a5a5b!2sDhunat%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1234567890"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
            <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs">
              <MapPin size={12} className="inline mr-1" />
              ধুনট, বগুড়া
            </div>
          </div>
        </div>

        {/* App Stats */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h3 className="text-base font-semibold text-gray-900 mb-3">পরিসংখ্যান</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-lg font-bold text-blue-600">৩৫+</p>
              <p className="text-xs text-gray-600">ক্যাটাগরি</p>
            </div>
            <div>
              <p className="text-lg font-bold text-green-600">৫০০+</p>
              <p className="text-xs text-gray-600">সেবা</p>
            </div>
            <div>
              <p className="text-lg font-bold text-purple-600">১২০০+</p>
              <p className="text-xs text-gray-600">ব্যবহারকারী</p>
            </div>
          </div>
        </div>

        {/* Developer Info */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h3 className="text-base font-semibold text-gray-900 mb-3">ডেভলপার</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full mr-3">
                <span className="text-white font-semibold text-xs">RZ</span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">রিদোয়ান জিসান</h4>
                <p className="text-xs text-gray-600">ফুল স্ট্যাক ডেভলপার</p>
              </div>
            </div>
            <a 
              href="https://ridoan-zisan.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-xs text-blue-600 hover:text-blue-800"
            >
              <Globe size={12} className="mr-1" />
              <span>ওয়েবসাইট</span>
              <ExternalLink size={10} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default About;
