const AuthForm = (props) => {
  const { title, fields, handleSubmit, buttonLabel, error, handleDemoSignIn } =
    props;

  const fieldItems = fields.map((field, idx) => {
    return (
      <div key={idx}>
        <input
          className="rounded-md border border-zinc-200 py-2 px-2 my-3 text-zinc-500 placeholder:text-zinc-300 w-full hover:border-purple-500"
          placeholder={field.name}
          value={field.value}
          onChange={field.handleChange}
          type={field.hide ? "password" : "text"}
        />
      </div>
    );
  });

  return (
    <div className="flex flex-col border border-zinc-300 rounded-md p-6">
      <div className="text-3xl text-center text-zinc-500 font-semibold w-80">
        {title}
      </div>
      <div className="text-sm text-red-400 text-center my-4">{error}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {fieldItems}
        <button
          type="submit"
          className="my-4 text-lg rounded-md bg-purple-600 px-2 py-2 text-white w-full hover:bg-purple-500"
        >
          {buttonLabel}
        </button>
        {handleDemoSignIn ? (
          <>
            <div className="flex justify-center items-center px-4">
              <div className="flex-1 h-px bg-zinc-300"></div>
              <div className="mx-4 text-zinc-400">
                or 
              </div>
              <div className="flex-1 h-px bg-zinc-300"></div>
            </div>
            <button
              onClick={handleDemoSignIn}
              className="my-4 text-lg rounded-md bg-purple-800 px-2 py-2 text-purple-300 w-full hover:bg-purple-700"
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
