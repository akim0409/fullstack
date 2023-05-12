const getFormattedDate = (dateObj) => {
  const string = dateObj.toDateString();
  const monthAndDate = string.split(" ").slice(1, 3).join(" ");
  const timeString = dateObj.toLocaleTimeString();
  const hourAndMinute = timeString.split(":").slice(0, 2).join(":");
  return monthAndDate + " " + hourAndMinute + timeString.slice(-2);
};

const ActivityIcon = (props) => {
  const { activity, activityColor } = props;

  const icon = {
    Fetch: "fa-tennis-ball",
    Frisbee: "fa-flying-disc",
    Running: "fa-person-running-fast",
    Digging: "fa-person-digging",
    "Hide & Seek": "fa-trees",
    Swimming: "fa-fish",
    "Tug of War": "fa-bone-break",
  };

  return (
    <i
      className={`text-8xl sm:text-9xl scale-[135%] ${activityColor} fa-solid ${icon[activity]}`}
    ></i>
  );
};

const DogDateItem = (props) => {
  const {
    dogDate,
    bgColor,
    activityColor,
    textColor,
    iconColor,
    onClick,
    hover,
  } = props;

  const dateObj = new Date(dogDate.date);

  return (
    <div
      onClick={onClick}
      className={`flex relative justify-between ${bgColor} rounded-lg px-2 py-4 m-4 overflow-hidden sm:p-8 ${
        hover ? "cursor-pointer transition-all hover:scale-105" : ""
      }`}
    >
      <div className="absolute top-0 left-0 z-0 w-full h-full flex justify-center items-center">
        <ActivityIcon
          activity={dogDate.activity}
          activityColor={activityColor}
        />
      </div>
      <div className="flex flex-col z-10">
        <div className="font-ubuntu text-2xl text-white sm:text-3xl">
          {dogDate.activity}
        </div>
        <div
          className={`${textColor} w-32 sm:w-full text-base sm:text-xl mt-2`}
        >
          {dogDate.location}
        </div>
      </div>
      <div className="flex flex-col items-end justify-center z-10">
        <div className={`${textColor} sm:text-xl`}>
          {dogDate.numberDogs}/{dogDate.maxNumberDogs} dogs
          <i
            className={`${iconColor} ml-3 text-xl sm:text-2xl fa-solid fa-paw`}
          ></i>
        </div>
        <div className={`${textColor} sm:text-xl mt-2`}>
          {getFormattedDate(dateObj)}
          <i
            className={`${iconColor} ml-3 text-xl sm:text-2xl fa-solid fa-clock`}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default DogDateItem;
