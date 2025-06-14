
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
import { MessageSquare, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    updateType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    'ডাক্তার',
    'হাসপাতাল',
    'ব্যাংক ও বীমা',
    'শিক্ষা প্রতিষ্ঠান',
    'পরিবহন',
    'ব্যবসা প্রতিষ্ঠান',
    'সরকারি অফিস',
    'অন্যান্য'
  ];

  const updateTypes = [
    'নতুন সেবা যুক্ত করার জন্য',
    'তথ্য আপডেট করার জন্য',
    'ভুল তথ্য সংশোধনের জন্য',
    'নতুন ফিচার যুক্ত করার জন্য',
    'বাগ রিপোর্ট',
    'অন্যান্য'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Update request submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', category: '', updateType: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-4 py-4 pb-20">
        <div className="flex items-center mb-4">
          <MessageSquare className="text-blue-600 mr-2" size={20} />
          <h1 className="text-lg font-semibold text-gray-900">আমার অ্যাপ</h1>
        </div>

        {/* App Update Request Form */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            অ্যাপ আপডেট অনুরোধ
          </h2>
          
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="text-green-500 mx-auto mb-3" size={48} />
              <h3 className="text-base font-semibold text-gray-900 mb-2">ধন্যবাদ!</h3>
              <p className="text-sm text-gray-600">
                আপনার আপডেট অনুরোধ সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই পর্যালোচনা করব।
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  নাম *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="আপনার নাম লিখুন"
                  required
                  className="text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ইমেইল
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ফোন নম্বর
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="০১xxxxxxxxx"
                    className="text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ক্যাটাগরি *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">ক্যাটাগরি নির্বাচন করুন</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  আপডেটের ধরন *
                </label>
                <select
                  name="updateType"
                  value={formData.updateType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">আপডেটের ধরন নির্বাচন করুন</option>
                  {updateTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  বিস্তারিত *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="আপনার আপডেট অনুরোধের বিস্তারিত লিখুন..."
                  rows={4}
                  required
                  className="text-sm"
                />
              </div>

              <Button type="submit" className="w-full">
                <Send size={16} className="mr-2" />
                অনুরোধ পাঠান
              </Button>
            </form>
          )}
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Contact;
