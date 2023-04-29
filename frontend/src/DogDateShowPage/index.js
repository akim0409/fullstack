import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFetch } from "../services";
import DogDateItem from "../DogDateListPage/DogDateItem";
import GuestItem from "./GuestItem";
import PageLoader from "../PageLoader";

const DogDateShowPage = () => {
  const [dogDate, setDogDate] = useState(null);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    fetchDogDateById();
  }, [fetchDogDateById]);

 

  const guestItems = isLoading ? [] : dogDate.guests.map((guest) => (
    <GuestItem key={guest.id} guest={guest} />
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DogDateShowPage;
