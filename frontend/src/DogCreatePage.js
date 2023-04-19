import { useNavigate } from "react-router-dom";
import DogForm from "./DogForm";
import { apiFetch } from "./services";
import { useEffect } from "react";



const DogCreatePage = (props) => {
  const {sessionToken} = props;

  const navigate = useNavigate();


  const handleSubmit = async (dogData) => {
    const response = await apiFetch({
      path: '/dogs',
      method: "POST",
      body: dogData,
    });

    if (response.status === 201) {
      navigate('/');
    }

    //401

  };

  useEffect(() => {
    if (sessionToken === null) {
      navigate('/');
    }
  }, [navigate, sessionToken]);


  return (
    <div className="flex flex-1 justify-center items-center bg-sky-100">
      <DogForm 
        dog={{
          name: "",
          breed: "",
          sex: "Female",
          fixed: true,
          age: 0,
          color: "",
          weight: 0,
          personality: "",
          favoriteGame: "",
          favoriteTreat: "",
          imageUrl: "",
        }}
        title="Create Profile"
        handleSubmit={handleSubmit}
        handleCancelClick={() => {
          navigate('/');
        }}
      />
    </div>
  )
};

export default DogCreatePage;