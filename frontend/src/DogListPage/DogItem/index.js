import { useNavigate } from "react-router-dom";
import DogImage from "./DogImage";

const DogItem = (props) => {
  const { dog } = props;
  const navigate = useNavigate();

  return (
    <div
      className="my-4 mx-2 flex flex-col font-ubuntu shadow-md text-stone-500 cursor-pointer transition-all hover:scale-105 hover:outline outline-[2px] outline-orange-400 rounded-lg"
      onClick={() => {
        navigate(`/dog/${dog.id}`);
      }}
    >
      <DogImage imageUrl={dog.imageUrl}/>
      <div className="bg-white p-4 font-semibold flex flex-col border border-stone-300 rounded-b-lg">
        <div className="flex justify-between items-center">
          <div className="font-bold text-2xl text-stone-500">{dog.name}</div>
          <div className="flex items-center">
            {dog.sex === "Female" ? (
              <i className="text-orange-400 w-4 fa-solid fa-venus"> </i>
            ) : (
              <i className="text-sky-500 w-4 fa-solid fa-mars"></i>
            )}
            <div
              className={
                dog.sex === "Female"
                  ? "my-1 text-orange-400"
                  : "my-1 text-sky-500"
              }
            >
              {dog.sex}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-right font-nanum">
          <div className="my-1">{dog.breed}</div>
          <div className="my-1">age {dog.age}</div>
        </div>
      </div>
    </div>
  );
};

export default DogItem;
