import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiFetch } from "../../services";
import DropDownField from "../../DogForm/DropDownField";
import NumberField from "../../DogForm/NumberField";
import TextField from "../../DogForm/TextField";
import DateField from "./DateField";

const DogDateCreateForm = () => {
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [activity, setActivity] = useState("Digging");
  const [maxNumberDogs, setMaxNumberDogs] = useState(2);
  const [validationsPassed, setValidationsPassed] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const addValidated = (validationId) => {
    setValidationsPassed((currentSet) => {
      const newSet = new Set(currentSet);
      newSet.add(validationId);
      return newSet;
    });
  };

  const removeValidated = (validationId) => {
    setValidationsPassed((currentSet) => {
      const newSet = new Set(currentSet);
      newSet.delete(validationId);
      return newSet;
    });
  };

  const isFormValid = validationsPassed.size === 2;

  const handleSubmit = async () => {
    const response = await apiFetch({
      path: "/dates",
      method: "POST",
      body: {
        date,
        location,
        activity,
        maxNumberDogs,
      },
    });

    if (response.status === 201) {
      const data = await response.json();
      navigate(`/dates/${data.id}`);
    }
  };

  return (
    <form
      className="flex flex-col bg-white rounded-lg mx-2 mt-24 mb-4 sm:mb-24 "
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await handleSubmit();
        setIsLoading(false);
      }}
    >
      <div className="mt-4 text-center font-ubuntu text-2xl sm:text-3xl text-sky-600">
        Create Doggy Date
      </div>
      <div className="flex flex-wrap sm:flex-nowrap justify-center px-4 py-8">
        <div className="flex w-full sm:w-80 flex-col justify-between mx-4">
          <TextField
            label="Location"
            labelColor="sky-600"
            value={location}
            validate={(value) => {
              if (value.length === 0) {
                removeValidated("location");
                return "can't be empty";
              }
              addValidated("location");
              return "";
            }}
            handleChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <DropDownField
            label="Activity"
            labelColor="orange-400"
            value={activity}
            handleChange={(e) => {
              setActivity(e.target.value);
            }}
            items={[
              "Digging",
              "Fetch",
              "Frisbee",
              "Hide & Seek",
              "Running",
              "Swimming",
              "Tug of War",
            ]}
          />
          <NumberField
            label="Max # of Dogs"
            labelColor="sky-600"
            value={maxNumberDogs}
            validate={(value) => {
              if (value <= 1) {
                removeValidated("maxNumberDogs");
                return "can't be less than 2";
              } else if (value > 10) {
                removeValidated("maxNumberDogs");
                return "can't be more than 10";
              }
              addValidated("maxNumberDogs");
              return "";
            }}
            handleChange={(e) => {
              setMaxNumberDogs(e.target.value);
            }}
          />
        </div>
        <div className="mx-4 mt-8">
          <DateField date={date} setDate={setDate} />
        </div>
      </div>
      {isFormValid ? (
        <div className="px-8 pb-8">
          <button
            className="relative w-full bg-orange-400 font-ubuntu text-xl text-white rounded-md px-8 py-2 hover:bg-orange-500"
            type="submit"
          >
            Create
            {isLoading ? (
            <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4">
              <i className="text-orange-200 fa-duotone fa-spinner-third animate-spin"></i>
            </div>
          ) : null}
          </button>
        </div>
      ) : (
        <div
          className="bg-stone-400 text-center font-ubuntu text-xl text-stone-600 rounded-md px-8 py-2 mx-8 mb-8"
        >
          Create
        </div>
      )}
    </form>
  );
};

export default DogDateCreateForm;
