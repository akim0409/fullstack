import { useEffect, useState } from "react";
import { apiFetch } from "../services";
import DogSection from "./DogSection";
import PageLoader from "../PageLoader";

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
    <div className="flex flex-col items-center bg-sky-100 px-4 pb-64">
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default DogListPage;
