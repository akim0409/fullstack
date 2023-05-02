import { useNavigate } from "react-router-dom";
import GuestItem from "./GuestItem";

const RemoveGuestItem = (props) => {
  const { dog, onClick } = props;
  const navigate = useNavigate();

  return (
    <div className="relative">
        <div className="absolute w-full text-center text-yellow-500 text-lg font-ubuntu top-[-10px]">
          <i className="mr-1 fa-solid fa-heart"></i>my dog
        </div>
        <div
          className="absolute z-10 rounded-full flex justify-center items-center w-[36px] h-[36px] bg-orange-400 top-6 right-8 cursor-pointer hover:bg-orange-600"
          title="Remove Dog"
          onClick={onClick}
        >
          <i className="fa-solid fa-trash-can text-xl text-orange-200"></i>
        </div>
        <div className="">
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

export default RemoveGuestItem;