export default function Table({ title }) {
  return (
    <div className="relative h-20 flex-grow min-w-48 max-w-52">
      <div className="absolute h-16 w-16 rounded-full bg-blue-950 -top-8  left-4"></div>
      <div className="absolute h-16 w-16 rounded-full  bg-blue-950 -top-8  right-4"></div>
      <div className="absolute h-16 w-16 rounded-full bg-blue-950 -bottom-8 left-4"></div>
      <div className="absolute h-16 w-16 rounded-full bg-blue-950 -bottom-8 right-4"></div>
      <div className="h-20 w-full bg-sky-900/80 relative z-50 rounded-[0.25rem] text-white flex justify-center items-center font-bold hover:scale-105 cursor-pointer">
        {title}
      </div>
    </div>
  );
} 
