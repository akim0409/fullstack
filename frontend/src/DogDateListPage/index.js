import { useEffect, useState } from "react";
import { apiFetch } from "../services";
import DogDateItem from "./DogDateItem";
import PageLoader from "../PageLoader";
import DogDateCreateForm from "./DogDateCreateForm";
import bigDogsPlaying from "../images/bigDogsPlaying.svg";
import { Link, useNavigate } from "react-router-dom";

const DogDateListPage = (props) => {
  const { sessionToken } = props;
  const [dogDates, setDogDates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchDogDates = async () => {
    setIsLoading(true);

    const response = await apiFetch({
      path: "/dates",
      method: "GET",
    });

    const data = await response.json();
    setIsLoading(false);

    setDogDates(data);
  };

  useEffect(() => {
    fetchDogDates();
    window.scrollTo(0,0);
  }, [sessionToken]);

  const ownedDates = dogDates.filter((date) => date.owned === true);
  const otherDates = dogDates.filter((date) => date.owned === false);

  const OwnedDateListItems = ownedDates.map((dogDate, idx) => {
    const colors = {
      bgColor: ["bg-orange-400/80", "bg-sky-600/80"],
      activityColor: ["text-orange-600/30", "text-sky-600/80"],
      textColor: ["text-sky-800/80", "text-orange-300"],
      iconColor: ["text-orange-600/80", "text-sky-800"],
    };

    return (
      <DogDateItem
        dogDate={dogDate}
        key={dogDate.id}
        bgColor={colors.bgColor[idx % colors.bgColor.length]}
        activityColor={colors.activityColor[idx % colors.activityColor.length]}
        textColor={colors.textColor[idx % colors.textColor.length]}
        iconColor={colors.iconColor[idx % colors.iconColor.length]}
        onClick={() => {
          navigate(`/dates/${dogDate.id}`);
        }}
        hover={true}
      />
    );
  });

  const otherDogDateListItems = otherDates.map((dogDate, idx) => {
    const colors = {
      bgColor: ["bg-orange-400/80", "bg-sky-600/80"],
      activityColor: ["text-orange-600/30", "text-sky-600/80"],
      textColor: ["text-sky-800/80", "text-orange-300"],
      iconColor: ["text-orange-600/80", "text-sky-800"],
    };

    return (
      <DogDateItem
        dogDate={dogDate}
        key={dogDate.id}
        bgColor={colors.bgColor[idx % colors.bgColor.length]}
        activityColor={colors.activityColor[idx % colors.activityColor.length]}
        textColor={colors.textColor[idx % colors.textColor.length]}
        iconColor={colors.iconColor[idx % colors.iconColor.length]}
        onClick={() => {
          navigate(`/dates/${dogDate.id}`);
        }}
        hover={true}
      />
    );
  });

  return (
    <div className="flex flex-col items-center bg-sky-100 px-4 pb-80">
      <div className="mt-20">
        <img className="w-[500px]" src={bigDogsPlaying} alt="dogsPlaying" />
      </div>
      {
        sessionToken ? <DogDateCreateForm /> : null
      }
      
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="w-full flex flex-col items-center">
          {
            sessionToken ? 
            <>
              <div className="leading-loose mt-20 font-ubuntu text-2xl sm:text-3xl text-sky-600 max-w-4xl">
                My Doggy-Dates
              </div>
            
              <div className="flex flex-col max-w-4xl w-full mb-12 sm:mb-24">
                {OwnedDateListItems}
              </div>
            </> : null
          }

          <div className="leading-loose mt-6 mb-14 font-ubuntu text-2xl sm:text-3xl text-sky-600 max-w-4xl">
            Available Doggy-Dates
          </div>
          {
            sessionToken ? null :
            <Link to="/sign-in" className="max-w-4xl w-full text-right px-4 text-sm sm:text-base text-stone-400 hover:text-sky-700 font-nanum">Create Doggy-Date
              <i className="fa-regular fa-calendar ml-2"></i>
            </Link>
          }
          <div className="flex flex-col max-w-4xl w-full mb-12 sm:mb-24">
            {otherDogDateListItems}
          </div>
        </div>
      )}
    </div>
  );
};

export default DogDateListPage;
