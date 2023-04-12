import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { apiFetch } from "./services";

const DogShowPage = () => {
  const [dog, setDog] = useState(null);
  const params = useParams();

  const fetchDogById = useCallback(async () => {
    const response = await apiFetch({
      path: `/dogs/${params.dogId}`,
      method: "GET"
    });

    const data = await response.json();
    setDog(data);
  }, [params.dogId]);

  useEffect(() => {
    fetchDogById()
  }, [fetchDogById])

  if (dog === null) {
    return null;
  }

  return (
    <div>
      <img alt="dog" src={dog.imageUrl}/>
      <div>{dog.name}</div>
    </div>
  )
};

export default DogShowPage;