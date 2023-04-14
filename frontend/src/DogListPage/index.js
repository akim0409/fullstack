import { useEffect, useState } from "react";
import { apiFetch } from "../services";
import DogItem from "./DogItem";

const DogListPage = () => {
  const [dogs, setDogs] = useState([]);


  const fetchDogs = async () => {
    const response = await apiFetch({
      path: "/dogs",
      method: 'GET'
    })

    const data = await response.json();
    setDogs(data);
  };

  useEffect(() => {
    fetchDogs();
  }, [])

  const dogListItems = dogs.map(dog => <DogItem key={dog.id} dog={dog} />)

  return (
    <div className="flex justify-center bg-blue-100 px-4">
      <div className="flex justify-center flex-wrap max-w-5xl w-full mt-24">{dogListItems}</div>
    </div>
  )
};

export default DogListPage;