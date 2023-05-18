import { useState } from "react";
import TextField from "./TextField";
import TextAreaField from "./TextAreaField";
import DropDownField from "./DropDownField";
import NumberField from "./NumberField";

const DogForm = (props) => {
  const { dog, handleCancelClick, handleSubmit, title } = props;

  const [breed, setBreed] = useState(dog.breed);
  const [name, setName] = useState(dog.name);
  const [color, setColor] = useState(dog.color);
  const [personality, setPersonality] = useState(dog.personality);
  const [imageUrl, setImageUrl] = useState(dog.imageUrl);
  const [age, setAge] = useState(dog.age);
  const [weight, setWeight] = useState(dog.weight);
  const [favoriteGame, setFavoriteGame] = useState(dog.favoriteGame);
  const [favoriteTreat, setFavoriteTreat] = useState(dog.favoriteTreat);
  const [sex, setSex] = useState(dog.sex);
  const [fixed, setFixed] = useState(dog.fixed);
  const [validationsPassed, setValidationsPassed] = useState(new Set());

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

  const isFormValid = validationsPassed.size === 7;

  return (
    <form
      className="m-2 rounded-lg flex flex-col p-2 text-sky-800 border border-zinc-200 bg-white w-full max-w-xl"
      onSubmit={(e) => {
        e.preventDefault();
        if (isFormValid) {
          handleSubmit({
            name,
            breed,
            sex,
            fixed,
            age,
            color,
            weight,
            personality,
            favoriteGame,
            favoriteTreat,
            imageUrl,
          });
        }
      }}
    >
      <div className="m-3 flex justify-between">
        <div className="flex items-center">
          <i className="mr-2 text-5xl text-orange-400 fa-solid fa-shield-dog"></i>
          <div className="text-3xl font-ubuntu text-orange-400">{title}</div>
        </div>
        <button
          className="font-ubuntu text-stone-400 hover:text-sky-700"
          onClick={handleCancelClick}
        >
          cancel
        </button>
      </div>
      <div className="m-3">
        <TextField
          label="Name"
          labelColor="sky-600"
          value={name}
          validate={(value) => {
            if (value.length === 0) {
              removeValidated("Name");
              return "can't be empty";
            } else if (value.length > 10) {
              removeValidated("Name");
              return "can't be longer than 10 characters";
            }
            addValidated("Name");
            return "";
          }}
          handleChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col m-3 flex-1 min-w-max">
          <TextField
            label="Breed"
            labelColor="orange-400"
            value={breed}
            validate={(value) => {
              if (value.length === 0) {
                removeValidated("Breed");
                return "can't be empty";
              } else if (value.length > 10) {
                removeValidated("Breed");
                return "can't be longer than 10 characters";
              }
              addValidated("Breed");
              return "";
            }}
            handleChange={(e) => {
              setBreed(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col m-3 flex-1 min-w-max">
          <TextField
            label="Color"
            labelColor="orange-400"
            value={color}
            validate={(value) => {
              if (value.length === 0) {
                removeValidated("Color");
                return "can't be empty";
              } else if (value.length > 20) {
                removeValidated("Color");
                return "can't be longer than 20 characters";
              }
              addValidated("Color");
              return "";
            }}
            handleChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col m-3 flex-1 min-w-max">
          <NumberField
            label="Age"
            labelColor="sky-600"
            value={age}
            validate={(value) => {
              if (value <= 0) {
                removeValidated("Age");
                return "can't be less than 1";
              } else if (value > 25) {
                removeValidated("Age");
                return "can't be over 25";
              }
              addValidated("Age");
              return "";
            }}
            handleChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col m-3 flex-1 min-w-max">
          <NumberField
            label="Weight (lbs)"
            labelColor="sky-600"
            value={weight}
            validate={(value) => {
              if (value <= 0) {
                removeValidated("Weight");
                return "can't be less than 1";
              } else if (value > 150) {
                removeValidated("Weight");
                return "can't be over 150";
              }
              addValidated("Weight");
              return "";
            }}
            handleChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col m-3 flex-1 min-w-max">
          <div className="ml-2 mb-2 font-ubuntu text-lg text-orange-400">
            Sex
          </div>
          <select
            className="w-full rounded-md px-3 py-2 bg-orange-200 border-r-8 border-transparent"
            onChange={(e) => setSex(e.target.value)}
            value={sex}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
        <div className="flex flex-col m-3 flex-1 min-w-max">
          <div className="ml-2 mb-4 font-ubuntu text-lg text-orange-400">
            {sex === "Female" ? "Spayed ?" : "Neutered ?"}
          </div>
          <div className="flex justify-center">
            <label className="mx-6 accent-sky-700">
              <input
                type="radio"
                value={true}
                checked={fixed}
                onChange={(e) => setFixed(true)}
              />{" "}
              Yes
            </label>
            <label className="mx-6 accent-sky-700">
              <input
                type="radio"
                value={false}
                checked={!fixed}
                onChange={(e) => {
                  setFixed(false);
                }}
              />{" "}
              No
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col m-3 flex-1 min-w-max">
          <TextAreaField
            label="Personality"
            labelColor="sky-600"
            value={personality}
            validate={(value) => {
              if (value.length === 0) {
                removeValidated("Personality");
                return "can't be empty";
              }
              addValidated("Personality");
              return "";
            }}
            handleChange={(e) => {
              setPersonality(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col m-3 flex-1 min-w-max">
          <TextAreaField
            label="Image URL"
            labelColor="sky-600"
            value={imageUrl}
            validate={(value) => {
              if (value.length === 0) {
                removeValidated("Image URL");
                return "can't be empty";
              }
              addValidated("Image URL");
              return "";
            }}
            handleChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col m-3 flex-1 min-w-max">
          <DropDownField
            label="Favorite Treat"
            labelColor="orange-400"
            value={favoriteTreat}
            handleChange={(e) => {
              setFavoriteTreat(e.target.value);
            }}
            items={[
              "Bacon",
              "Beef Liver",
              "Beef Strip",
              "Bully Stick",
              "Cheese",
              "Chicken",
              "Dental Treats",
              "Eggs",
              "Fruits",
              "Lamb",
              "Peanut Butter",
              "Pig Ear",
              "Rabbit",
              "Tendons",
              "Turkey",
              "Vegetables",
            ]}
          />
        </div>
        <div className="flex flex-col m-3 flex-1 min-w-max">
          <DropDownField
            label="Favorite Game"
            labelColor="orange-400"
            value={favoriteGame}
            handleChange={(e) => {
              setFavoriteGame(e.target.value);
            }}
            items={[
              "Running",
              "Digging",
              "Fetch",
              "Hide & Seek",
              "Swimming",
              "Tug of War",
              "Frisbee"
            ]}
          />
        </div>
      </div>
      {isFormValid ? (
        <button className="font-ubuntu m-3 mt-6 text-white rounded-md px-3 py-4 bg-sky-700">
          Save Dog
        </button>
      ) : (
        <div className="font-ubuntu m-3 mt-6 text-center text-stone-600 rounded-md px-3 py-4 bg-stone-400">
          Save Dog
        </div>
      )}
    </form>
  );
};

export default DogForm;
