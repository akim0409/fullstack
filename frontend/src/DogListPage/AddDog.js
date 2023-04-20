import { useNavigate } from "react-router-dom";

const AddDog = () => {
  const navigate = useNavigate();

  return (
    <div
      className="my-4 mx-2 flex flex-col font-ubuntu bg-sky-600/30 text-sky-700/50 cursor-pointer transition-all hover:scale-105 rounded-lg"
      onClick={() => {
        navigate('/dog/new');
      }}
    >
      <div className="h-48 w-80 rounded-t-lg flex justify-center items-center">
      <i className="text-8xl fa-solid fa-plus"></i>
      </div>
      <div className="p-4 font-semibold flex flex-col rounded-b-lg">
        <div className="flex justify-between items-center">
          <div className="font-bold text-2xl">Add Dog</div>
        </div>
        <div className="flex justify-between items-center text-right font-nanum">
        <div className="my-1">here</div>
        </div>
      </div>
    </div>
  );
};

export default AddDog;
