import React, { useState } from 'react';
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import image4 from './img/image4.jpg';
import image5 from './img/image5.jpg';
import image6 from './img/image6.jpg';

const GalleryPage = () => {
  const predefinedImages = [
    {
      _id: 1,
      imageUrl: image1,
      title: 'Image 1',
      description: 'Description for Image 1',
    },
    {
      _id: 2,
      imageUrl: image2,
      title: 'Image 2',
      description: 'Description for Image 2',
    },
    {
      _id: 3,
      imageUrl: image3,
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      _id: 4,
      imageUrl: image4,
      title: 'Image 4',
      description: 'Description for Image 4',
    },
    {
      _id: 5,
      imageUrl: image5,
      title: 'Image 5',
      description: 'Description for Image 5',
    },
    {
      _id: 6,
      imageUrl: image6,
      title: 'Image 6',
      description: 'Description for Image 6',
    },
  ];

  const [galleryImages] = useState(predefinedImages);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-screen gallery-container bg-blue-200 p-8">
      <h2 className="text-3xl text-center font-semibold mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div key={image._id} className="bg-white p-4 rounded-lg shadow-md relative">
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-40 object-cover rounded-md cursor-pointer transition duration-300 transform hover:scale-[1.02]"
              onClick={() => handleImageClick(image)}
            />
            <div className="text-gray-800 mt-2">
              <h3 className="text-lg font-semibold">{image.title}</h3>
              <p className="text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for displaying selected image */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={selectedImage.imageUrl} alt={selectedImage.title} className="w-auto h-auto max-h-screen max-w-full" />
            <button className="absolute top-2 right-2 text-white" onClick={handleCloseImage}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
