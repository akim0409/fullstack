import { useNavigate } from "react-router-dom";

const DogItem = (props) => {
  const { dog } = props;
  const navigate = useNavigate();

  return (
    <div
      className="m-2 flex flex-col text-zinc-600 cursor-pointer transition-all hover:scale-105 hover:outline outline-[2px] outline-purple-500 rounded-lg"
      onClick={() => {
        navigate(`/dog/${dog.id}`);
      }}
    >
      <img className="h-48 rounded-t-lg" src={dog.imageUrl} alt="dog" />
      <div className="p-4 flex border border-zinc-300 rounded-b-lg justify-between">
        <div className="flex flex-col ">
          <div className="my-1">{dog.name}</div>
          <div className="my-1">{dog.breed}</div>
        </div>
        <div className="flex flex-col  text-right">
          <div className="my-1">{dog.sex}</div>
          <div className="my-1">age {dog.age}</div>

        </div>
      </div>
    </div>
  );
};

export default DogItem;
