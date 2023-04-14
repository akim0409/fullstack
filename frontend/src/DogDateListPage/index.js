import { useEffect, useState } from "react";
import { apiFetch } from "../services";

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

  const dogDateListItems = dogDates.map(dogDate => {
    return <div key={dogDate.id}>
      <div>
        {dogDate.date}
      </div>
      <div>
        {dogDate.location}
      </div>
      <div>
        {dogDate.activity}
      </div>
      <div>
        {dogDate.maxNumberDogs}
      </div>
    </div>
  })

  return (
    <div className="flex justify-center bg-sky-100 px-4">
      <div className="flex justify-center flex-wrap max-w-5xl w-full mt-24">{dogDateListItems}</div>
    </div>
  )
};

export default DogDateListPage;