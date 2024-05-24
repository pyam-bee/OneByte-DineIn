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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis velit ut leo elementum tempus eget nec ante. Vestibulum quis magna consectetur, dignissim ex a, fermentum tellus. Duis a tortor nec sapien tempus aliquet. Nullam vestibulum nisi ac diam consequat, ac ultricies dolor lobortis. 
        </p>
        <p className="text-lg">
          Integer rhoncus nisi in velit sodales faucibus. Fusce scelerisque nunc id tellus tincidunt, vel placerat odio tempus. Vestibulum maximus tortor nec volutpat scelerisque. Sed viverra enim a turpis euismod vehicula.
        </p> <br />
        <p className="text-lg">
          Integer rhoncus nisi in velit sodales faucibus. Fusce scelerisque nunc id tellus tincidunt, vel placerat odio tempus. Vestibulum maximus tortor nec volutpat scelerisque. Sed viverra enim a turpis euismod vehicula. 
        </p> <br />
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis velit ut leo elementum tempus eget nec ante. Vestibulum quis magna consectetur, dignissim ex a, fermentum tellus. Duis a tortor nec sapien tempus aliquet. Nullam vestibulum nisi ac diam consequat, ac ultricies dolor lobortis. 
        </p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-8 hover:bg-blue-600 transition-colors duration-300" onClick={() => { navigate("/") }}>Explore More</button>
      </div>
      
      <div className="w-1/2 flex justify-center">
        <div className="max-w-md">
            <img src={hotelImg} alt="Hotel" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </div>
  );
}
