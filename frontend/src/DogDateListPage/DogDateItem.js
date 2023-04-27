const getFormattedDate = (dateObj) => {
  const string = dateObj.toDateString();
  const monthAndDate = string.split(" ").slice(1, 3).join(" ");
  const timeString = dateObj.toLocaleTimeString();
  const hourAndMinute = timeString.split(":").slice(0, 2).join(":");
  return monthAndDate + " " + hourAndMinute + timeString.slice(-2);
};

const ActivityIcon = (props) => {
  const { activity } = props;

  const icon = {
    Fetch: "fa-tennis-ball",
    Frisbee: "fa-flying-disc",
    Running: "fa-person-running-fast",
    Digging: "fa-person-digging",
    "Hide & Seek": "fa-trees",
    Swimming: "fa-fish",
    "Tug of War": "fa-bone-break",
  };

  return <i className={`text-8xl sm:text-9xl scale-[135%] text-sky-600/80 fa-solid ${icon[activity]}`}></i>;
};

const DogDateItem = (props) => {
  const { dogDate } = props;

  const dateObj = new Date(dogDate.date);

  // + [ ] Date list page
  // + [ ] fix mobile styling of items
  // + [ ] tweak colors
  // + [ ] alternate b/w orange/blue

  return (
    <div className="flex relative justify-between bg-sky-600/80 rounded-lg w-full px-2 py-4 sm:p-8 m-4 overflow-hidden">
      <div className="absolute top-0 left-0 z-0 w-full h-full flex justify-center items-center">
        <ActivityIcon activity={dogDate.activity}/>
      </div>
      <div className="flex flex-col z-10">
        <div className="font-ubuntu text-2xl text-white sm:text-3xl">
          {dogDate.activity}
        </div>
        <div className="text-sky-900 text-base sm:text-xl mt-2">{dogDate.location}</div>
      </div>
      <div className="flex flex-col items-end justify-center z-10">
        <div className="text-sky-900 sm:text-xl">
          {dogDate.numberDogs}/{dogDate.maxNumberDogs} dogs
          <i className="ml-2 text-xl sm:text-2xl fa-solid fa-paw"></i>
        </div>
        <div className="text-sky-900 sm:text-xl mt-2">
          {getFormattedDate(dateObj)}
          <i className="ml-2 text-xl sm:text-2xl fa-solid fa-clock"></i>
        </div>
      </div>
    </div>
  );
};

export default DogDateItem;
