import { useEffect, useState } from "react";
import { apiFetch } from "../services";
import DogDateItem from "./DogDateItem";
import PageLoader from "../PageLoader";
import DogDateCreateForm from "./DogDateCreateForm";

const DogDateListPage = () => {
  const [dogDates, setDogDates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDogDates = async () => {
    setIsLoading(true);

    const response = await apiFetch({
      path: "/dates",
      method: "GET",
    });

    const data = await response.json();
    setIsLoading(false);

    setDogDates(data);
  };

  useEffect(() => {
    fetchDogDates();
  }, []);

  const dogDateListItems = dogDates.map((dogDate, idx) => {
    const colors = {
      bgColor: ["bg-orange-400/80", "bg-sky-600/80"],
      activityColor: ["text-orange-600/30", "text-sky-600/80"],
      textColor: ["text-sky-800/80", "text-orange-300"],
      iconColor: ["text-orange-600/80", "text-sky-800"],
    };

    return (
      <DogDateItem
        dogDate={dogDate}
        key={dogDate.id}
        bgColor={colors.bgColor[idx % colors.bgColor.length]}
        activityColor={colors.activityColor[idx % colors.activityColor.length]}
        textColor={colors.textColor[idx % colors.textColor.length]}
        iconColor={colors.iconColor[idx % colors.iconColor.length]}
      />
    );
  });

  return (
    <div className="flex flex-col items-center bg-sky-100 px-4 pb-80">
      <DogDateCreateForm />
      
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <div className="leading-loose my-6 sm:my-14 font-ubuntu text-2xl sm:text-3xl text-sky-800 max-w-4xl">
            Available Doggy Dates
          </div>
          <div className="flex flex-col max-w-4xl w-full mb-12 sm:mb-24">
            {dogDateListItems}
          </div>
        </>
      )}
    </div>
  );
};

export default DogDateListPage;
