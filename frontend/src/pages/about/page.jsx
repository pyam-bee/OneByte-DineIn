import React from 'react';
import hotelImg from '../../assets/hotel-img.jpg';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center items-start p-8">
      <div className="w-1/2 mr-8">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-4">
        At OneByte, we pride ourselves on delivering exceptional dining experiences that tantalize the taste buds and create lasting memories. Our journey began with a passion for culinary excellence and a commitment to providing impeccable service to our valued guests. From our carefully crafted menus that showcase the finest ingredients to our inviting ambiance that exudes warmth and hospitality, every aspect of our restaurant reflects our dedication to excellence. 
        </p>
        <p className="text-lg">
        Whether you're joining us for a casual meal with friends or a special celebration with loved ones, we invite you to indulge in the flavors of our inspired dishes and immerse yourself in the inviting atmosphere that defines OneByte.
        </p> <br />
        <p className="text-lg">
        At the heart of OneByte lies a commitment to community and sustainability. We are dedicated to supporting local farmers and producers, reducing our environmental footprint, and giving back to the communities we serve. From our eco-friendly practices to our involvement in charitable initiatives, we strive to make a positive impact both locally and globally.  
        </p> <br />
        <p className="text-lg mb-4">
        At OneByte, we invite you to join us on a journey of culinary discovery, where every dish tells a story and every meal is an opportunity to create meaningful connections. 
        </p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-8 hover:bg-blue-600 transition-colors duration-300" onClick={() => { navigate("/gallery") }}>Explore More</button>
      </div>
      
      <div className="w-1/2 flex justify-center">
        <div className="max-w-md">
            <img src={hotelImg} alt="Hotel" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </div>
  );
}
