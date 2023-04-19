import DogForm from "./DogForm";





const DogCreatePage = (props) => {
  return (
    <div>
      <DogForm 
        dog={{
          name: "",
          breed: "",
          sex: "Female",
          fixed: true,
          age: 0,
          color: "",
          weight: 0,
          personality: "",
          favoriteGame: "",
          favoriteTreat: "",
          imageUrl: "",
        }}
      />
    </div>
  )
};

export default DogCreatePage;