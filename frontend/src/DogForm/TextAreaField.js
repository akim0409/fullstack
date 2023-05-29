import { useEffect, useState } from "react";

const TextAreaField = (props) => {
  const { value, handleChange, label, labelColor, validate } = props;
  const [error, setError] = useState("");

  useEffect(() => {
    setError(validate(value));
    // eslint-disable-next-line
  }, [])


  return (
    <>
      <div className="flex justify-between items-center text-red-600 text-sm">
        <div className={`ml-2 mb-2 font-ubuntu text-lg text-${labelColor}`}>
          {label}
        </div>
        <div className="italic">{error}</div>
      </div>

      <textarea
        className="rounded-md px-3 py-2 bg-orange-200"
        value={value}
        rows={1}
        cols={20}
        onChange={(e) => {
          setError(validate(e.target.value));
          handleChange(e);
        }}
      />
    </>
  );
};

export default TextAreaField;
