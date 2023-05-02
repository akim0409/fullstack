import { useCallback, useEffect, useState } from "react";
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
  const params = useParams();
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

    setOwnedDogs(data.filter((dog) => dog.owned === true));
  }, []);

  useEffect(() => {
    fetchDogDateById();
    fetchUserDogs();
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
      <AddGuestItem key={dog.id} dog={dog} onClick={async () => {
        await apiFetch({
          path: `/dates/${dogDate.id}/dogs/${dog.id}`,
          method: "POST",
        });
        fetchDogDateById();
      }}/>
    ));

  const removeDogItems = ownedDogs
    .filter((dog) => guestDogIds.has(dog.id))
    .map((dog) => (
      <RemoveGuestItem key={dog.id} dog={dog} onClick={async () => {
        await apiFetch({
          path: `/dates/${dogDate.id}/dogs/${dog.id}`,
          method: "DELETE",
        });
        fetchDogDateById();
      }}/>
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
              {removeDogItems}
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
