import { useState } from "react";

const DogImage = (props) => {
  const { imageUrl } = props;
  const [isValidUrl, setIsValidUrl] = useState(true);

  return isValidUrl ? (
    <img
      className="h-48 w-80 object-cover rounded-t-lg"
      src={imageUrl}
      alt="dog"
      onError={() => {
        setIsValidUrl(false);
      }}
    />
  ) : (
    <div className="h-48 w-80 rounded-t-lg flex justify-center items-center text-orange-700/50 bg-orange-500/40">
      <div className="flex flex-col items-center">
        <i className="text-5xl fa-solid fa-bone-break mb-2"></i>
        <div>dog image not found</div>
      </div>
    </div>
  );
};

export default DogImage;
