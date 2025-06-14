
import React from 'react';
import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
import { MapPin, Globe, ExternalLink, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-4 py-6 pb-20">
        {/* App Info */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <Globe size={20} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Dhunat.App</h1>
              <p className="text-sm text-gray-600">স্থানীয় সেবা নির্দেশিকা</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            ধুনট এলাকার বিশ্বস্ত স্থানীয় সেবা নির্দেশিকা। ডাক্তার, হাসপাতাল, ব্যাংক ও শিক্ষা প্রতিষ্ঠানের তথ্য।
          </p>
        </div>

        {/* Dhunat Map */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <h2 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
            <MapPin className="text-blue-600 mr-2" size={18} />
            ধুনট এর মানচিত্র
          </h2>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58419.89842987717!2d89.5233!3d24.7667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5f5b5c5a5a5b%3A0x5c5a5a5b5c5a5a5b!2sDhunat%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1234567890"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
            <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded-md text-xs shadow-sm">
              <MapPin size={12} className="inline mr-1 text-blue-600" />
              ধুনট, বগুড়া
            </div>
          </div>
        </div>

        {/* Developer Info */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Code className="text-blue-600 mr-3" size={18} />
              <div>
                <h3 className="text-sm font-medium text-gray-900">Md Ridoan Mahmud Zisan</h3>
                <p className="text-xs text-gray-600">অ্যাপ ডেভলপার</p>
              </div>
            </div>
            <a 
              href="https://ridoan-zisan.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-xs text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Globe size={14} className="mr-1" />
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
