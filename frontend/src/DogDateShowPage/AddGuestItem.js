import { useNavigate } from "react-router-dom";
import GuestItem from "./GuestItem";

const AddGuestItem = ( props ) => {
  const { dog, onClick  } = props;
  const navigate = useNavigate();

  return (
    <div className="relative">
        <div className="absolute w-full text-center text-yellow-500 text-lg font-ubuntu top-[-10px]">
          <i className="mr-1 fa-solid fa-heart"></i>my dog
        </div>
        <div
          className="absolute z-10 rounded-full flex justify-center items-center w-[36px] h-[36px] bg-sky-700 top-6 right-8 cursor-pointer hover:bg-sky-900"
          title="Add Dog"
          onClick={onClick}
        >
          <i className="fa-solid fa-plus text-2xl text-sky-400"></i>
        </div>
        <div className="opacity-40">
          <GuestItem
            border
            guest={dog}
            onClick={() => {
              navigate(`/dog/${dog.id}`);
            }}
          />
        </div>
      </div>
  )
};

export default AddGuestItem;