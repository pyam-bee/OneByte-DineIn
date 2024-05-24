import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImg from '../../assets/bg-img.jpg';

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-200 flex w-full justify-center items-center">
      {/* <img src={bgImg} alt="bg" className='absolute -z-10 w-full blur-sm'/> */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to One<span className="text-blue-500">Byte</span></h1>
        <p className="text-lg text-gray-700">Your ultimate destination for delicious food and great experiences!</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-8 hover:bg-blue-600 transition-colors duration-300" onClick={() => { navigate("/reservation") }} >Get Started</button>
      </div>
    </div>
  );
}
