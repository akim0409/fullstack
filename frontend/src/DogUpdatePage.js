import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiFetch } from "./services";
import DogForm from "./DogForm";

const DogUpdatePage = (props) => {
  const {sessionToken} = props;
  const [dog, setDog] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  const fetchDogById = useCallback(async () => {
    const response = await apiFetch({
      path: `/dogs/${params.dogId}`,
      method: "GET",
    });

    const data = await response.json();
    setDog(data);
  }, [params.dogId]);

  useEffect(() => {
    if (sessionToken !== null) {
      fetchDogById();
    } else {
      navigate('/');
    }
  }, [navigate, sessionToken, fetchDogById]);
  
  const handleSubmit = async (dogData) => {
    const response = await apiFetch({
      path: `/dogs/${params.dogId}`,
      method: "PUT",
      body: dogData,
    });

    if (response.status === 200) {
      navigate(`/dog/${params.dogId}`);
    }

  };

  if (dog === null) {
    return null;
  }

  return (
    <div className="flex flex-1 justify-center items-center bg-sky-100">
     <DogForm 
        dog={dog}
        title="Edit Dog"
        handleSubmit={handleSubmit}
        handleCancelClick={() => {
          navigate(`/dog/${params.dogId}`);
        }}
     />
    </div>
  );
};
export default DogUpdatePage;
