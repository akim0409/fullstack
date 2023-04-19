import { useState } from "react";

const DogForm = (props) => {
  const { dog, handleCancelClick, handleSubmit, title} = props;

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

  return (
    <form
      className="m-2 rounded-lg flex flex-col p-2 text-sky-800 border border-zinc-200 bg-white w-full max-w-xl"
      onSubmit={(e) => {
        e.preventDefault();
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
      }}
    >
      <div className="m-3 flex justify-between">
        <div className="flex items-center">
          <i className="mr-2 text-5xl text-orange-400 fa-solid fa-shield-dog"></i>
          <div className="text-3xl font-ubuntu text-orange-400">
            {title}
          </div>
        </div>
        <button
          className="font-ubuntu text-stone-400 hover:text-sky-700"
          onClick={handleCancelClick}
        >
          cancel
        </button>
      </div>
      <div className="m-3">
        <div className="ml-2 mb-2 font-ubuntu text-lg text-sky-600">Name</div>
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
          <div className="ml-2 mb-2 font-ubuntu text-lg text-orange-400">
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
          <div className="ml-2 mb-2 font-ubuntu text-lg text-orange-400">
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
          <div className="ml-2 mb-2 font-ubuntu text-lg text-sky-600">Age</div>
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
          <div className="ml-2 mb-2 font-ubuntu text-lg text-sky-600">
            Weight (lbs)
          </div>
          <input
            className="w-full rounded-md px-3 py-2 bg-orange-200"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
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
          <div className="ml-2 mb-2 font-ubuntu text-lg text-sky-600">
            Personality
          </div>
         
         <textarea 
          className="rounded-md px-3 py-2 bg-orange-200"
         value={personality} rows={1} cols={20} onChange={(e) => {
              setPersonality(e.target.value);
            }} />
     
        </div>
        <div className="flex flex-col m-3 flex-1 min-w-max">
          <div className="ml-2 mb-2 font-ubuntu text-lg text-sky-600">
            Image URL
          </div>
          <textarea 
          className="rounded-md px-3 py-2 bg-orange-200"
         value={imageUrl} rows={1} cols={20} onChange={(e) => {
              setImageUrl(e.target.value);
            }} />
     
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col m-3 flex-1 min-w-max">
          <div className="ml-2 mb-2 font-ubuntu text-lg text-orange-400">
            Favorite Treat
          </div>
          <select
            className="w-full rounded-md px-3 py-2 bg-orange-200 border-r-8 border-transparent"
            onChange={(e) => setFavoriteTreat(e.target.value)}
            value={favoriteTreat}
          >
            <option value="Bacon">Bacon</option>
            <option value="Beef Liver">Beef Liver</option>
            <option value="Beef Strip">Beef Strip</option>
            <option value="Bully Stick">Bully Stick</option>
            <option value="Cheese">Cheese</option>
            <option value="Chicken">Chicken</option>
            <option value="Dental Treats">Dental Treats</option>
            <option value="Eggs">Eggs</option>
            <option value="Fruits">Fruits</option>
            <option value="Lamb">Lamb</option>
            <option value="Peanut Butter">Peanut Butter</option>
            <option value="Pig Ear">Pig Ear</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Tendons">Tendons</option>
            <option value="Turkey">Turkey</option>
            <option value="Vegetables">Vegetables</option>
          </select>
        </div>
        <div className="flex flex-col m-3 flex-1 min-w-max">
          <div className="mb-2 font-ubuntu text-lg text-orange-400">
            Favorite Game
          </div>
          <select
            className="w-full rounded-md px-3 py-2 bg-orange-200 border-r-8 border-transparent"
            onChange={(e) => setFavoriteGame(e.target.value)}
            value={favoriteGame}
          >
            <option value="Agility Training">Agility Training</option>
            <option value="Chase the Prey">Chase the Prey</option>

            <option value="Digging">Digging</option>
            <option value="Fetch">Fetch</option>
            <option value="Hide & Seek">Hide & Seek</option>
            <option value="Swimming">Swimming</option>
            <option value="Tug of War">Tug of War</option>
          </select>
        </div>
      </div>
      <button className="font-ubuntu m-3 mt-6 text-white rounded-md px-3 py-4 bg-sky-700">
        Save Profile
      </button>
    </form>
  );
};

export default DogForm;
