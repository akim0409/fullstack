import DogItem from "./DogItem";

const DogSection = (props) => {
  const { dogs, children } = props;
  
  if (dogs.length === 0) {
    return null;
  }

  const dogItems = dogs.map((dog) => <DogItem key={dog.id} dog={dog} />)

  return <div className="mt-16">
    <div className="text-3xl text-sky-700 font-ubuntu border-b-2 border-orange-400 p-2 mb-6">
      {children}
    </div>
    <div className="flex justify-center flex-wrap max-w-5xl w-full">
      {dogItems}
    </div>
  </div>
};

export default DogSection;