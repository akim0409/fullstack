import { useEffect, useState, useCallback, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiFetch } from "../services";
import PageLoader from "../PageLoader";
import DogShowImage from "./DogShowImage";

const DogShowPage = () => {
  const [dog, setDog] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const backgroundRef = useRef(null);

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
    window.scrollTo(0,0);
  }, [fetchDogById]);

  return (
    <>
    <div className="py-16 flex justify-center bg-sky-100">
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="w-full border border-stone-300 rounded-md bg-white max-w-5xl p-8 md:p-16 m-6 font-nanum">
          <div className="flex flex-col items-center sm:flex-row sm:place-items-stretch">
            <DogShowImage imageUrl={dog.imageUrl} />
            <div className="mx-6 flex flex-col justify-center flex-1">
              <div
                className={
                  dog.sex === "Female"
                    ? "sm:pl-4 py-3 sm:border-l-8 border-sky-600"
                    : "sm:pl-4 py-2 sm:border-l-8 border-orange-400"
                }
              >
                <div
                  className={
                    dog.sex === "Female"
                      ? "font-ubuntu my-2 text-5xl font-bold text-orange-400 text-center sm:text-left"
                      : "font-ubuntu my-2 text-5xl font-bold text-sky-700 text-center sm:text-left"
                  }
                >
                  {dog.name}
                </div>
                <div className="flex justify-center sm:justify-start sm:text-xl my-2">
                  <div className="text-stone-600">{dog.breed}</div>
                  <div className="h-8 w-px bg-stone-400 mx-2"></div>
                  <div className="text-stone-600">age {dog.age}</div>
                </div>
              </div>
            </div>
            <div className="text-stone-400">
              {dog.owned ? (
                <>
                  <div className="cursor-pointer hover:text-sky-700">
                    <button
                      onClick={() => navigate(`/dog/update/${params.dogId}`)}
                      className="w-16 flex justify-end items-center"
                    >
                      Edit
                    <i className="fa-solid fa-pen-to-square ml-2"></i>
                    </button>
                  </div>
                  <div className="cursor-pointer hover:text-red-600">
                    <button
                      onClick={() => {
                        setIsDeleteModalOpen(true);
                      }}
                      className="w-16 flex justify-end items-center"
                    >
                      Delete
                    <i className="fa-solid fa-trash-can ml-2"></i>
                    </button>
                  </div>
                </>
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
          <div className="flex flex-col sm:flex-row sm:justify-around mb-10">
            <div className="">
              <div className="my-4 flex flex-wrap text-lg justify-center">
                <div className="font-semibold w-48 text-stone-600 flex justify-center items-center sm:justify-start mr-10">
                  {dog.sex === "Female" ? (
                    <i className="text-orange-400 mx-2 w-6 fa-solid fa-venus">
                      {" "}
                    </i>
                  ) : (
                    <i className="text-orange-400 mx-2 w-6 fa-solid fa-mars"></i>
                  )}
                  Sex
                </div>
                <div className="text-stone-500 w-40 flex justify-center items-center sm:justify-start mr-4">{dog.sex}</div>
              </div>
              <div className="my-4 flex flex-wrap text-lg justify-center">
                <div className="font-semibold w-48 text-stone-600 flex justify-center items-center sm:justify-start mr-10">
                  <i className="text-sky-600 mx-2 w-6 fa-solid fa-paw"></i>
                  Fixed
                </div>
                <div className="text-stone-500 w-40 flex justify-center items-center sm:justify-start mr-4">{dog.fixed ? "Yes" : "No"}</div>
              </div>
              <div className="my-4 flex flex-wrap text-lg justify-center">
                <div className="font-semibold w-48 text-stone-600 flex justify-center items-center sm:justify-start mr-10">
                  <i className="text-orange-400 mx-2 w-6 fa-solid fa-tennis-ball"></i>
                  Favorite Game
                </div>
                <div className="text-stone-500 w-40 flex justify-center items-center sm:justify-start mr-4">{dog.favoriteGame}</div>
              </div>
            </div>
            <div className="">
              <div className="my-4 flex flex-wrap text-lg justify-center">
                <div className="font-semibold w-48 text-stone-600 flex justify-center items-center sm:justify-start mr-10">
                  <i className="text-sky-600 mx-2 w-6 fa-solid fa-palette"></i>
                  Color
                </div>
                <div className="text-stone-500 w-40 flex justify-center items-center sm:justify-start mr-4">{dog.color}</div>
              </div>
              <div className="my-4 flex flex-wrap text-lg justify-center">
                <div className="font-semibold w-48 text-stone-600 flex justify-center items-center sm:justify-start mr-10">
                  <i className="text-orange-400 mx-2 w-6 fa-solid fa-weight-scale"></i>
                  Weight
                </div>
                <div className="text-stone-500 w-40 flex justify-center items-center sm:justify-start mr-4">{dog.weight} pounds</div>
              </div>
              <div className="my-4 flex flex-wrap text-lg justify-center">
                <div className="font-semibold w-48 text-stone-600 flex justify-center items-center sm:justify-start mr-10">
                  <i className="text-sky-600 mx-2 w-6 fa-solid fa-bone"></i>
                  Favorite Treat
                </div>
                <div className="text-stone-500 w-40 flex justify-center items-center sm:justify-start mr-4">{dog.favoriteTreat}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    {isDeleteModalOpen ? (   
        <div 
          onClick={(event) => {
            if (backgroundRef.current === event.target) {
              setIsDeleteModalOpen(false);
            }
          }}
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-900/60"
          ref={backgroundRef}
        >
          <div className="relative rounded-lg bg-white flex flex-col justify-center items-center p-6 sm:p-14">
            <i 
              onClick={() => {
                setIsDeleteModalOpen(false);
              }}
              className="absolute top-4 right-6 text-2xl text-zinc-400 fa-solid fa-xmark hover:text-sky-700 hover:cursor-pointer"
            ></i>
            <div className="text-xl my-8 font-black font-ubuntu text-zinc-700 text-center">Delete {dog.name}?</div>
            <div className="p-4 w-full bg-[#FBE9DB] rounded-md border-l-4 border-orange-600 flex">
              <div className="mr-4">
                <i className="text-orange-600 fa-solid fa-triangle-exclamation"></i>
              </div>
              <div>
                <div className="font-bold text-red-800">
                  Warning
                </div>
                <div className="text-sm my-2">
                  Are you sure you want to delete <span className="font-semibold">{dog.name}</span>'s profile? You can't undo this action.
                </div>
              </div>

            </div>
            <div className="flex mt-8">
              <button 
              className="w-36 m-2 bg-zinc-400 text-white font-semibold rounded-full px-4 py-2 hover:bg-zinc-500"
              onClick={() => {
                setIsDeleteModalOpen(false);
              }}
              >Cancel</button>
              <button 
                onClick={ async () => {
                  setIsDeleteModalOpen(false)
                  await apiFetch({
                    path: `/dogs/${params.dogId}`,
                    method: "DELETE"
                  })
                  navigate(`/`)
              }}
                className="w-36 m-2 font-semibold rounded-full px-4 py-2 bg-red-600 text-white hover:bg-red-700"
              >Delete
              <i className="fa-solid fa-trash-can ml-2"></i>
              </button>
            </div>
            
          </div>
        </div>
      ) : null}
    </>  
  );
};

export default DogShowPage;
