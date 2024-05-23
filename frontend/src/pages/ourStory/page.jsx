import React from 'react';
import './ourStory.css'

export default function OurStoryPage() {
  return (
    <main className="relative flex justify-center items-center w-screen">
      <div className="background-image absolute inset-0 z-[-1]" />
      <div className="relative max-w-3xl p-8 bg-white bg-opacity-100 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Our Story</h1>
        <p className="text-lg mb-4">
          Welcome to OneByte Restro! Our journey began with a passion for food and a vision to create a unique dining experience. Over the years, we have grown from a small eatery to a beloved destination for food lovers. Our commitment to quality, innovation, and customer satisfaction has been the cornerstone of our success.
        </p>
        <p className="text-lg mb-4">
          At OneByte Restro, we believe in the power of great food to bring people together. Our team of dedicated chefs uses the freshest ingredients to craft dishes that are both delicious and memorable. We are proud to be a part of this community and are grateful for the support of our loyal customers.
        </p>
        <p className="text-lg mb-4">
          We invite you to join us on this culinary journey and experience the flavors, aromas, and ambiance that make OneByte Restro truly special. Thank you for being a part of our story.
        </p>
        <p className="text-lg mb-4 text-center">
          <strong>OneByte Restro - Where Every Byte is a Delight!</strong>
        </p>
      </div>
    </main>
  );
}
