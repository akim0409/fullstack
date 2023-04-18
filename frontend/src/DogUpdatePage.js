import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFetch } from "./services";

const DogUpdatePage = () => {
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [personality, setPersonality] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [treat, setTreat] = useState("");

  const params = useParams();

  const fetchDogById = useCallback(async () => {
    const response = await apiFetch({
      path: `/dogs/${params.dogId}`,
      method: "GET",
    });

    const data = await response.json();
    setName(data.name);
    setBreed(data.breed);
    setColor(data.color);
    setPersonality(data.personality);
    setImageUrl(data.imageUrl);
    setAge(data.age);
    setWeight(data.weight);
    setTreat(data.favoriteTreat);
  }, [params.dogId]);

  useEffect(() => {
    fetchDogById();
  }, [fetchDogById]);

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="m-2 rounded-lg flex flex-col p-2 text-stone-600 bg-orange-300 w-full max-w-xl">
        <div className="m-3">
          <div className="mb-2 font-ubuntu text-lg text-orange-800">Name</div>
          <input
            className="w-full rounded-md px-3 py-2 bg-orange-200"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col m-3 flex-1 min-w-max">
            <div className="mb-2 font-ubuntu text-lg text-orange-800">
              Breed
            </div>
            <input
              className="w-full rounded-md px-3 py-2 bg-orange-200"
              value={breed}
              onChange={(e) => {
                setBreed(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col m-3 flex-1 min-w-max">
            <div className="mb-2 font-ubuntu text-lg text-orange-800">
              Color
            </div>
            <input
              className="w-full rounded-md px-3 py-2 bg-orange-200"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col m-3 flex-1 min-w-max">
            <div className="mb-2 font-ubuntu text-lg text-orange-800">
              Personality
            </div>
            <input
              className="w-full rounded-md px-3 py-2 bg-orange-200"
              value={personality}
              onChange={(e) => {
                setPersonality(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col m-3 flex-1 min-w-max">
            <div className="mb-2 font-ubuntu text-lg text-orange-800">
              Image URL
            </div>
            <input
              className="w-full rounded-md px-3 py-2 bg-orange-200"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="flex flex-col m-3 flex-1 min-w-max">
            <div className="mb-2 font-ubuntu text-lg text-orange-800">
              Age
            </div>
            <input
              className="w-full rounded-md px-3 py-2 bg-orange-200"
              type="number"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              value={age}
            />
          </div>
          <div className="flex flex-col m-3 flex-1 min-w-max">
            <div className="mb-2 font-ubuntu text-lg text-orange-800">
              Weight (lbs)
            </div>
            <input
              className="w-full rounded-md px-3 py-2 bg-orange-200"
              type="number"
              value={weight}
              onChange={(e) => 
                setWeight(e.target.value)
              }
            />
          </div>
        </div>
        
        <select onChange={(e) => setTreat(e.target.value)} value={treat}>
          <option value="dental treats">dental treats</option>
          <option value="bully stick">bully stick</option>
          <option value="pig ear">pig ear</option>
        </select>

      </form>
    </div>
  );
};
// text inputs
//    - breed
//    - name
//    - imgUrl
//    - personality
//    - color
// number inputs
//    - age
//    - weight
// dropdown
//    - treat
//    - favorite game
//    - fixed
//    - sex

export default DogUpdatePage;
