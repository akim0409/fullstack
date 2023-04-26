import { useEffect, useState } from "react";
import { apiFetch } from "../services";
import DogDateItem from "./DogDateItem";

const DogDateListPage = () => {
  const [dogDates, setDogDates] = useState([]);


  const fetchDogDates = async () => {
    const response = await apiFetch({
      path: "/dates",
      method: 'GET'
    })

    const data = await response.json();
    setDogDates(data);
  };

  useEffect(() => {
    fetchDogDates();
  }, [])

  const dogDateListItems = dogDates.map(dogDate => <DogDateItem dogDate={dogDate} key={dogDate.id} />);

  

  return (
    <div className="flex justify-center bg-sky-100 px-4">
      <div className="flex flex-col items-center max-w-4xl w-full mt-24">{dogDateListItems}</div>
    </div>
  )
};

export default DogDateListPage;