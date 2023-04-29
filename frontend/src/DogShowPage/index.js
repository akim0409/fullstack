import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiFetch } from "../services";
import PageLoader from "../PageLoader";

const DogShowPage = () => {
  const [dog, setDog] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const fetchDogById = useCallback(async () => {
    setIsLoading(true);
    const response = await apiFetch({
      path: `/dogs/${params.dogId}`,
      method: "GET",
    });

    const data = await response.json();
    setIsLoading(false);
    setDog(data);
  }, [params.dogId]);

  useEffect(() => {
    fetchDogById();
  }, [fetchDogById]);


  return (
    <div className="py-16 flex justify-center bg-sky-100">
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="w-full border border-stone-300 rounded-md bg-white max-w-5xl p-16 font-nanum">
          <div className="flex justify-between">
            <img
              className="w-[180px] h-[180px] object-cover rounded-full shadow-lg shadow-stone-400"
              alt="dog"
              src={dog.imageUrl}
            />
            <div className="mx-6 flex flex-col justify-center flex-1">
              <div
                className={
                  dog.sex === "Female"
                    ? "pl-4 py-3 border-l-8 border-sky-600"
                    : "pl-4 py-2 border-l-8 border-orange-400"
                }
              >
                <div
                  className={
                    dog.sex === "Female"
                      ? "font-ubuntu my-2 text-5xl font-bold text-orange-400"
                      : "font-ubuntu my-2 text-5xl font-bold text-sky-700"
                  }
                >
                  {dog.name}
                </div>
                <div className="flex text-xl my-2">
                  <div className="text-stone-600">{dog.breed}</div>
                  <div className="h-8 w-px bg-stone-400 mx-2"></div>
                  <div className="text-stone-600">age {dog.age}</div>
                </div>
              </div>
            </div>
            <div className="text-stone-400">
              {dog.owned ? (
                <div className="cursor-pointer hover:text-sky-700">
                  <button
                    onClick={() => navigate(`/dog/update/${params.dogId}`)}
                  >
                    Edit
                  </button>
                  <i className="fa-solid fa-pen-to-square ml-2"></i>
                </div>
              ) : null}
            </div>
          </div>
          <div className="my-12 flex flex-col text-lg">
            <div className="mb-4 pb-2 font-ubuntu font-semibold text-stone-500 text-2xl border-b-2 border-orange-400">
              Personality
            </div>
            <div className="text-stone-500 leading-loose ">
              {dog.personality}
            </div>
          </div>
          <div className="flex pb-2 mb-4 text-2xl text-stone-500 font-ubuntu font-semibold mb-4 border-b-2 border-orange-400">
            About
          </div>
          <div className="flex justify-around mb-10">
            <div className="">
              <div className="my-4 flex text-lg">
                <div className="font-semibold w-48 text-stone-600">
                  {dog.sex === "Female" ? (
                    <i className="text-orange-400 mx-2 w-6 fa-solid fa-venus">
                      {" "}
                    </i>
                  ) : (
                    <i className="text-orange-400 mx-2 w-6 fa-solid fa-mars"></i>
                  )}
                  Sex
                </div>
                <div className="text-stone-500">{dog.sex}</div>
              </div>
              <div className="my-4 flex text-lg">
                <div className="font-semibold w-48 text-stone-600">
                  <i className="text-sky-600 mx-2 w-6 fa-solid fa-paw"></i>
                  Fixed
                </div>
                <div className="text-stone-500">{dog.fixed ? "Yes" : "No"}</div>
              </div>
              <div className="my-4 flex text-lg">
                <div className="font-semibold w-48 text-stone-600">
                  <i className="text-orange-400 mx-2 w-6 fa-solid fa-tennis-ball"></i>
                  Favorite Game
                </div>
                <div className="text-stone-500">{dog.favoriteGame}</div>
              </div>
            </div>
            <div>
              <div className="my-4 flex text-lg">
                <div className="font-semibold w-48 text-stone-600">
                  <i className="text-sky-600 mx-2 w-6 fa-solid fa-palette"></i>
                  Color
                </div>
                <div className="text-stone-500">{dog.color}</div>
              </div>
              <div className="my-4 flex text-lg">
                <div className="font-semibold w-48 text-stone-600">
                  <i className="text-orange-400 mx-2 w-6 fa-solid fa-weight-scale"></i>
                  Weight
                </div>
                <div className="text-stone-500">{dog.weight} pounds</div>
              </div>
              <div className="my-4 flex text-lg">
                <div className="font-semibold w-48 text-stone-600">
                  <i className="text-sky-600 mx-2 w-6 fa-solid fa-bone"></i>
                  Favorite Treat
                </div>
                <div className="text-stone-500">{dog.favoriteTreat}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DogShowPage;
