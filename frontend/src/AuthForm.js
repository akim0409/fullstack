const AuthForm = (props) => {
  const { title, fields, handleSubmit, buttonLabel, error, handleDemoSignIn } =
    props;

  const fieldItems = fields.map((field, idx) => {
    return (
      <div key={idx}>
        <input
          className="rounded-md border border-stone-200 py-2 px-2 my-3 text-stone-500 placeholder:text-stone-300 w-full hover:border-sky-400"
          placeholder={field.name}
          value={field.value}
          onChange={field.handleChange}
          type={field.hide ? "password" : "text"}
        />
      </div>
    );
  });

  return (
    <div className="flex flex-col border border-stone-300 rounded-md p-6 bg-white">
      <div className="text-3xl text-center text-stone-500 font-semibold font-ubuntu w-80">
        {title}
      </div>
      <div className="h-1 text-sm text-red-500 text-center my-4">{error}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {fieldItems}
        <button
          type="submit"
          className="my-4 text-lg rounded-md bg-orange-400 px-2 py-2 text-white w-full hover:bg-orange-500"
        >
          {buttonLabel}
        </button>
        {handleDemoSignIn ? (
          <>
            <div className="flex justify-center items-center px-4">
              <div className="flex-1 h-px bg-stone-300"></div>
              <div className="mx-4 text-stone-400">
                or 
              </div>
              <div className="flex-1 h-px bg-stone-300"></div>
            </div>
            <button
              onClick={handleDemoSignIn}
              className="my-4 text-lg rounded-md bg-sky-600 px-2 py-2 text-sky-200 w-full hover:bg-sky-800"
            >
              Demo Sign In
            </button>
          </>
        ) : null}
      </form>
    </div>
  );
};

export default AuthForm;
