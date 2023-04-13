import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { apiFetch } from "../services";

const DogShowPage = () => {
  const [dog, setDog] = useState(null);
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
    fetchDogById();
  }, [fetchDogById]);

  if (dog === null) {
    return null;
  }

  return (
    <div className="py-16 flex justify-center bg-zinc-100">
      <div className="w-full border border-zinc-300 rounded-md bg-white max-w-5xl p-16">
        <div className="flex">
          <img
            className="w-[180px] h-[180px] object-cover rounded-full shadow-lg shadow-zinc-400"
            alt="dog"
            src={dog.imageUrl}
          />
          <div className="mx-6 flex flex-col justify-center">
            <div className="pl-4 py-2 border-l-8 border-purple-600">
              <div className="my-2 text-5xl font-bold text-zinc-600">
                {dog.name}
              </div>
              <div className="flex text-xl my-2">
                <div className="text-zinc-600">{dog.breed}</div>
                <div className="h-8 w-px bg-zinc-400 mx-2">
                </div>
                <div className="text-zinc-600">age {dog.age}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-12 flex flex-col text-lg">
          <div className="mb-4 pb-2 font-semibold text-zinc-600 text-2xl border-b border-purple-600">Personality</div>
          <div className="text-zinc-500 leading-loose ">{dog.personality}</div>
        </div>
        <div className="flex pb-2 mb-4 text-2xl text-zinc-600 font-semibold mb-4 border-b border-purple-600">
            About
        </div>
        <div className="flex justify-around mb-10">
          <div className="">
            <div className="my-4 flex text-lg">
              <div className="font-semibold w-32 text-zinc-600">
                {
                  dog.sex === "Female" ? <i className="mx-2 w-6 fa-solid fa-venus"> </i> : <i className="mx-2 w-6 fa-solid fa-mars"></i>
                }
              
                Sex
              </div>
              <div className="text-zinc-500">{dog.sex}</div>
            </div>
            <div className="my-4 flex text-lg">
              <div className="font-semibold w-32 text-zinc-600">
              <i className="mx-2 w-6 fa-solid fa-paw"></i>
              Fixed</div>
              <div className="text-zinc-500">{dog.fixed ? "Yes" : "No"}</div>
            </div>
          </div>
          <div>
            <div className="my-4 flex text-lg">
              <div className="font-semibold w-32 text-zinc-600">
              <i className="mx-2 w-6 fa-solid fa-palette"></i>
                Color</div>
              <div className="text-zinc-500">{dog.color}</div>
            </div>
            <div className="my-4 flex text-lg">
              <div className="font-semibold w-32 text-zinc-600">
              <i className="mx-2 w-6 fa-solid fa-weight-scale"></i>
                Weight</div>
              <div className="text-zinc-500">{dog.weight} pounds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogShowPage;
