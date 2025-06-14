
import React from 'react';
import Header from '../components/Header';
import BannerSlider from '../components/BannerSlider';
import NoticeMarquee from '../components/NoticeMarquee';
import CategoryGrid from '../components/CategoryGrid';
import BottomNavBar from '../components/BottomNavBar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pb-20">
        <BannerSlider />
        <NoticeMarquee />
        <CategoryGrid />
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Home;
