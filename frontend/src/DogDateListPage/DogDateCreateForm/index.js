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
  const [activity, setActivity] = useState("Fetch");
  const [maxNumberDogs, setMaxNumberDogs] = useState(2);
  const [validationsPassed, setValidationsPassed] = useState(new Set());

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
      className="flex flex-col bg-white rounded-lg mx-2 mt-24 mb-24 "
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="mt-4 text-center font-ubuntu text-3xl text-sky-800">Create Doggy Date</div>
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
              "Running",
              "Digging",
              "Fetch",
              "Hide & Seek",
              "Swimming",
              "Tug of War",
              "Frisbee",
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
      <button
        className="bg-orange-400 font-ubuntu text-xl text-white rounded-md px-8 py-2 mx-8 mb-8"
        type="submit"
      >
        Create
      </button>
    </form>
  );
};

export default DogDateCreateForm;
