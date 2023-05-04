import { useState } from "react";

const GuestItem = (props) => {
  const { guest, onClick, border } = props;
  const [isValidUrl, setIsValidUrl] = useState(true);
  return (
    <div 
      className="flex flex-col items-center mx-4 my-8 hover:cursor-pointer"
      onClick={onClick}
    >
      {
        isValidUrl ? <img
        className={`w-[160px] h-[160px] object-cover rounded-full shadow-lg shadow-stone-400 ${border ? 'border-[4px] border-yellow-500' : ''}`}
        alt="dog"
        src={guest.imageUrl}
        onError={() => {
          setIsValidUrl(false);
        }}
      /> :  <div className={`w-[160px] h-[160px] rounded-full flex justify-center items-center shadow-lg shadow-stone-400 text-orange-700 bg-orange-300/80 ${border ? 'border-[4px] border-yellow-500' : ''}`}>
      <div className="flex flex-col items-center">
        <i className="text-5xl fa-solid text-orange-700/50 fa-bone-break mb-2"></i>
        <div className="text-xs">dog image not found</div>
      </div>
    </div>
      }
      
      <div className="mt-4 flex flex-col items-center text-zinc-600">
        <div className="flex items-center relative">
          <div className="font-ubuntu text-3xl">{guest.name}</div>
          {guest.sex === "Female" ? (
            <i className="absolute right-[-30px] text-xl text-orange-400 mx-2 fa-solid fa-venus"></i>
          ) : (
            <i className="absolute right-[-30px] text-xl text-sky-500 mx-2 fa-solid fa-mars"></i>
          )}
        </div>
        <div className="text-lg mt-1">{guest.breed}</div>
      </div>
    </div>
  );
};

export default GuestItem;
