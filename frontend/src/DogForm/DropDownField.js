const DropDownField = (props) => {
  const { value, handleChange, label, labelColor, items } = props;

  const dropDownItems = items.map((ele, idx) => {
    return <option key={idx}value={ele}>{ele}</option>;
  });

  return (
    <>
      <div className={`ml-2 mb-2 font-ubuntu text-lg text-${labelColor}`}>
        {label}
      </div>

      <select
        className="w-full rounded-md px-3 py-2 bg-orange-200 border-r-8 border-transparent"
        onChange={(e) => handleChange(e)}
        value={value}
      >
        {dropDownItems}
      </select>
    </>
  );
};

export default DropDownField;
