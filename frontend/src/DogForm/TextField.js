import { useEffect, useState } from "react";

const TextField = (props) => {
  const { value, handleChange, label, labelColor, validate } = props;
  const [error, setError] = useState("");

  useEffect(() => {
    setError(validate(value));
  }, [])

  return (
    <div>
      <div className="flex justify-between items-center text-red-600 text-sm">
        <div className={`ml-2 mb-2 font-ubuntu text-lg text-${labelColor}`}>
          {label}
        </div>
        <div className="italic">{error}</div>
      </div>
      <input
        className="w-full rounded-md px-3 py-2 bg-orange-200"
        value={value}
        onChange={(e) => {
          setError(validate(e.target.value));
          handleChange(e);
        }}
      />
    </div>
  );
};

export default TextField;
