
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Hotel } from 'lucide-react';

const HotelPage = () => {
  const hotels = [
    {
      id: 1,
      name: "ধুনট গেস্ট হাউস",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "গেস্ট হাউস"
    },
    {
      id: 2,
      name: "রেস্ট হাউস ধুনট",
      phone: "01819-876543",
      address: "স্টেশন রোড, ধুনট",
      subcategory: "রেস্ট হাউস"
    }
  ];

  const subcategories = ["সকল", "গেস্ট হাউস", "রেস্ট হাউস", "হোটেল"];

  return (
    <CategoryTemplate
      title="হোটেল"
      icon={Hotel}
      iconColor="text-yellow-600"
      services={hotels}
      subcategories={subcategories}
      emptyStateMessage="কোন হোটেল পাওয়া যায়নি"
    />
  );
};

export default HotelPage;
