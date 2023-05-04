import { useState } from "react";

const DogShowImage = (props) => {
  const { imageUrl } = props;
  const [isValidUrl, setIsValidUrl] = useState(true);

  return isValidUrl ? (
    <img
      className="w-[180px] h-[180px] object-cover rounded-full shadow-lg shadow-stone-400"
      alt="dog"
      src={imageUrl}
      onError={() => {
        setIsValidUrl(false);
      }}
    />
  ) : (
    <div className="w-[180px] h-[180px] rounded-full flex justify-center items-center text-orange-700/50 bg-orange-500/40">
      <div className="flex flex-col items-center">
        <i className="text-5xl fa-solid fa-bone-break mb-2"></i>
        <div>dog image not found</div>
      </div>
    </div>
  );
};

export default DogShowImage;
