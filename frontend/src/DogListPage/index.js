import { useEffect, useState } from "react";
import { apiFetch } from "../services";
import DogSection from "./DogSection";
import PageLoader from "../PageLoader";
import dogImage from "../images/dogs.svg";

const DogListPage = (props) => {
  const { sessionToken } = props;
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDogs = async () => {
    setIsLoading(true);
    const response = await apiFetch({
      path: "/dogs",
      method: "GET",
    });
    const data = await response.json();
    setIsLoading(false);
    setDogs(data);
  };

  useEffect(() => {
    fetchDogs();
  }, [sessionToken]);

  const ownedDogs = dogs.filter((dog) => dog.owned === true);
  const otherDogs = dogs.filter((dog) => dog.owned === false);
  const allDogs = dogs.filter((dog) => dog.owned === undefined);

  return (
    <div className="flex flex-col items-center bg-sky-100 pb-64">
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <div className="pb-16 px-2 bg-sky-700 w-full flex flex-col justify-center items-center dogs-list-top">
            <div className="mb-10 mt-14 font-ubuntu text-3xl sm:text-4xl font-semibold text-center text-sky-200 leading-relaxed">
              Find friends for your dog with{" "}
              <span className="text-orange-400 font-semibold text-3xl sm:text-5xl">
                Bar
              </span>
              <span className="font-semibold text-sky-400 text-3xl sm:text-5xl">
                kr
              </span>
              .
            </div>
            <img src={dogImage} className="w-[680px]" alt=""/>
          </div>
          <div className="px-4">
            <DogSection dogs={ownedDogs} addDog>
              <i className="mr-2 fa-solid fa-heart text-sky-600"></i>
              My Dogs
            </DogSection>
            <DogSection dogs={otherDogs}>
              <i className="mr-2 text-sky-600 fa-solid fa-paw"></i>
              Other Dogs on Barkr
            </DogSection>
            <DogSection dogs={allDogs}>
              <i className="mr-2 text-sky-600 fa-solid fa-paw"></i>
              Dogs on Barkr
            </DogSection>
          </div>
        </>
      )}
    </div>
  );
};

export default DogListPage;
