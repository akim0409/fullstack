import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiFetch } from "../services";
import DogDateItem from "../DogDateListPage/DogDateItem";
import GuestItem from "./GuestItem";
import PageLoader from "../PageLoader";

const DogDateShowPage = () => {
  const [dogDate, setDogDate] = useState({
    guests: [],
  });
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [addDogs, setAddDogs] = useState([]);
  const navigate = useNavigate();

  const fetchDogDateById = useCallback(async () => {
    setIsLoading(true);
    const response = await apiFetch({
      path: `/dates/${params.dateId}`,
      method: "GET",
    });

    const data = await response.json();
    setIsLoading(false);
    setDogDate(data);
  }, [params.dateId]);

  const fetchUserDogs = useCallback(async () => {
    const response = await apiFetch({
      path: "/dogs",
      method: "GET",
    });

    const data = await response.json();

    setAddDogs(data.filter((dog) => dog.owned === true));
  }, []);

  useEffect(() => {
    fetchDogDateById();
    fetchUserDogs();
  }, [fetchDogDateById, fetchUserDogs]);

  const guestDogIds = new Set();
  for (let guest of dogDate.guests) {
    guestDogIds.add(guest.id);
  }

  const guestItems = isLoading
    ? []
    : dogDate.guests.map((guest) => (
        <GuestItem
          key={guest.id}
          guest={guest}
          onClick={() => {
            navigate(`/dog/${guest.id}`);
          }}
        />
      ));

  const addDogItems = addDogs
    .filter((dog) => !guestDogIds.has(dog.id))
    .map((dog) => (
      <div key={dog.id} className="relative">
        <div className="absolute z-10 rounded-full flex justify-center items-center w-[36px] h-[36px] bg-orange-400 top-2 right-8">
          <i className="fa-solid fa-plus text-2xl text-white"></i>
        </div>
        <div className="opacity-40">
          <GuestItem
            guest={dog}
            onClick={async () => {
              await apiFetch({
                path: `/dates/${dogDate.id}/dogs/${dog.id}`,
                method: "POST",
              });
              fetchDogDateById();
            }}
          />
        </div>
      </div>
    ));

  return (
    <div className="py-16 flex justify-center bg-sky-100 pb-80">
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="max-w-4xl w-full">
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
              {dogDate.numberDogs === dogDate.maxNumberDogs
                ? null
                : addDogItems}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DogDateShowPage;
