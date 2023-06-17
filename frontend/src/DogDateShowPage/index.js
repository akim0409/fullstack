import { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiFetch } from "../services";
import DogDateItem from "../DogDateListPage/DogDateItem";
import GuestItem from "./GuestItem";
import PageLoader from "../PageLoader";
import AddGuestItem from "./AddGuestItem";
import RemoveGuestItem from "./RemoveGuestItem";

const DogDateShowPage = () => {
  const [dogDate, setDogDate] = useState({
    guests: [],
  });
  const [ownedDogs, setOwnedDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const backgroundRef = useRef(null);

  const fetchDogDateById = useCallback(async () => {
    setIsLoading(true);
    const response = await apiFetch({
      path: `/dates/${params.dateId}`,
      method: "GET",
    });

    const data = await response.json();
    setIsLoading(false);
    console.log(data);
    setDogDate(data);
  }, [params.dateId]);

  const fetchUserDogs = useCallback(async () => {
    const response = await apiFetch({
      path: "/dogs",
      method: "GET",
    });

    const data = await response.json();

    setOwnedDogs(data.filter((dog) => dog.owned === true));
  }, []);

  useEffect(() => {
    fetchDogDateById();
    fetchUserDogs();
    window.scrollTo(0, 0);
  }, [fetchDogDateById, fetchUserDogs]);

  const guestDogIds = new Set();
  for (let guest of dogDate.guests) {
    guestDogIds.add(guest.id);
  }

  const ownedDogIds = new Set();
  for (let dog of ownedDogs) {
    ownedDogIds.add(dog.id);
  }

  const guestItems = isLoading
    ? []
    : dogDate.guests
        .filter((guest) => !ownedDogIds.has(guest.id))
        .map((guest) => (
          <GuestItem
            key={guest.id}
            guest={guest}
            onClick={() => {
              navigate(`/dog/${guest.id}`);
            }}
          />
        ));

  const addDogItems = ownedDogs
    .filter((dog) => !guestDogIds.has(dog.id))
    .map((dog) => (
      <AddGuestItem
        key={dog.id}
        dog={dog}
        onClick={async () => {
          await apiFetch({
            path: `/dates/${dogDate.id}/dogs/${dog.id}`,
            method: "POST",
          });
          fetchDogDateById();
        }}
      />
    ));

  const removeDogItems = ownedDogs
    .filter((dog) => guestDogIds.has(dog.id))
    .map((dog) => (
      <RemoveGuestItem
        key={dog.id}
        dog={dog}
        onClick={async () => {
          await apiFetch({
            path: `/dates/${dogDate.id}/dogs/${dog.id}`,
            method: "DELETE",
          });
          fetchDogDateById();
        }}
      />
    ));

  return (
    <>
    <div className="py-16 flex justify-center bg-sky-100 pb-80">
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="max-w-4xl w-full">
          <div className="flex justify-end px-4">
            {dogDate.owned ? <div className="w-[77px] cursor-pointer text-stone-400 hover:text-red-600">
              <button
                onClick={() => {
                        setIsDeleteModalOpen(true);
                      }}
              >
                Delete
                <i className="fa-solid fa-trash-can ml-2"></i>
              </button>
            </div> : null}
          </div>
          <DogDateItem
            dogDate={dogDate}
            bgColor="bg-sky-700"
            activityColor="text-sky-600"
            textColor="text-sky-300"
            iconColor="text-sky-400"
          />
          <div className="px-12 mt-12">
            <div className="text-3xl font-ubuntu text-sky-700 border-b border-sky-600/30 px-4 py-2">
              Guests
            </div>
            <div className="flex justify-center flex-wrap mt-10 px-4">
              {guestItems}
              {removeDogItems}
              {dogDate.numberDogs === dogDate.maxNumberDogs
                ? null
                : addDogItems}
            </div>
          </div>
        </div>
      )}
    </div>
    {isDeleteModalOpen ? (   
        <div 
          onClick={(event) => {
            if (backgroundRef.current === event.target) {
              setIsDeleteModalOpen(false);
            }
          }}
          className="z-10 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-900/60"
          ref={backgroundRef}
        >
          <div className="relative rounded-lg bg-white flex flex-col justify-center items-center p-6 sm:p-14">
            <i 
              onClick={() => {
                setIsDeleteModalOpen(false);
              }}
              className="absolute top-4 right-6 text-2xl text-zinc-400 fa-solid fa-xmark hover:text-sky-700 hover:cursor-pointer"
            ></i>
            <div className="text-xl my-8 font-black font-ubuntu text-zinc-700 text-center">Delete {dogDate.activity} play date?</div>
            <div className="p-4 w-full bg-[#FBE9DB] rounded-md border-l-4 border-orange-600 flex">
              <div className="mr-4">
                <i className="text-orange-600 fa-solid fa-triangle-exclamation"></i>
              </div>
              <div>
                <div className="font-bold text-red-800">
                  Warning
                </div>
                <div className="text-sm my-2">
                  Are you sure you want to delete <span className="font-semibold">{dogDate.activity}</span> play date? You can't undo this action.
                </div>
              </div>

            </div>
            <div className="flex mt-8">
              <button 
              className="w-36 m-2 bg-zinc-400 text-white font-semibold rounded-full px-4 py-2 hover:bg-zinc-500"
              onClick={() => {
                setIsDeleteModalOpen(false);
              }}
              >Cancel</button>
              <button 
                onClick={ async () => {
                  await apiFetch({
                    path: `/dates/${params.dateId}`,
                    method: "DELETE"
                  })
                  navigate(`/dates`)
                }}
                className="w-36 m-2 font-semibold rounded-full px-4 py-2 bg-red-600 text-white hover:bg-red-700"
              >Delete
              <i className="fa-solid fa-trash-can ml-2"></i>
              </button>
            </div>
            
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DogDateShowPage;
