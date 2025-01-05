import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Card } from './components/ui/card';
import Image1 from './assets/aman_creativelead.JPG';
import Image2 from './assets/_DSC0450.JPG';
import Navbar from './components/navbar';
import PreviousClientWork from './components/PreviousClientWork';
import Footer from './components/footer';
import FeaturesBanner from './components/FeaturesBanner';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const ScrollButton = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    };

  const profileData = {
    name: "Aman Jain",
    title: "Social Media Manager",
    salary: "1,00,000",
    rating: 4.8,
    totalReviews: 47,
    images: [
      Image1,
      Image2,


    ],
    skills: ["UI/UX", "React", "Python", "SQL"],
    creative_skills: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro"],

    description: `
     Experienced Social Media Manager with 2+ years of expertise in creating engaging content and driving brand growth through strategic graphic design and video editing. Skilled in UI/UX design and frontend engineering, bringing a unique blend of creativity and technical proficiency to enhance user experiences and build impactful digital solutions.
  
    `,
    reviews: [
      {
        author: "Mom",
        rating: 5,
        text: "Exceptional developer who consistently delivers high-quality code. Would definitely hire again!"
      },

    ]
  };

  return (

    <div className="max-w-8xl mx-auto p-1 ">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-2">
        {/* Image Gallery */}
        <div className="space-y-2">
          <div className="aspect-square relative">
            <img
              src={profileData.images[selectedImage]}
              alt={`${profileData.name} - View ${selectedImage + 1}`}
              className=" h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex gap-2">
            {profileData.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`border-2 rounded ${selectedImage === idx ? 'border-blue-500' : 'border-gray-200'
                  }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-16 h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">

          <div>
            <h1 className="text-3xl font-bold">{profileData.name}</h1>
            <p className="text-xl text-gray-600">{profileData.title}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={i < Math.floor(profileData.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    size={20}
                  />
                ))}
              </div>
              <span className="text-blue-500">
                {profileData.totalReviews} reviews
              </span>
            </div>
          </div>

          <div className="border-t border-b py-4">
            <div className="py-4">
              <div className="text-sm text-gray-600 italic mb-1">
                you will underpay me anyway
              </div>
              <div className="flex items-center gap-2">
                <div className="text-3xl font-bold text-red-600 line-through">
                  ₹{profileData.salary}/month
                </div>

              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <button onClick= {ScrollButton} className="bg-yellow-400 text-black px-6 py-2 rounded flex items-center gap-2">
                <ShoppingCart size={20} />
                Hire Now
              </button>
              <button className="border border-gray-300 px-6 py-2 rounded flex items-center gap-2">
                <Heart size={20} />
                Save for Later
              </button>
              <button className="border border-gray-300 p-2 rounded">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold ">About This Product</h2>
            <div className=" pr-3 whitespace-pre-line">
              {profileData.description}
            </div>
          </div>
          <FeaturesBanner />

          <div className="flex flex-wrap gap-8 pb-2 " >

            <div>
              <h2 className="text-xl font-bold mb-2 ">Creative Skills</h2>
              <div className="flex flex-wrap gap-1 border-b pb-4  ">
                {profileData.creative_skills.map((creative_skill) => (
                  <span
                    key={creative_skill}
                    className="bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {creative_skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2 ">Technical Skills</h2>
              <div className="flex flex-wrap gap-2 border-b  pb-2 ">
                {profileData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
      {/* Previous work Section */}
      <PreviousClientWork />

      {/* Previous work Section * <ProductComparison />/  }
     

      {/* Reviews Section */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2 ml-2">Client Reviews</h2>
        <div className="space-y-4">
          {profileData.reviews.map((review, idx) => (
            <Card key={idx} className="p-4 m-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      size={16}
                    />
                  ))}
                </div>
                <span className="font-bold">{review.author}</span>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;