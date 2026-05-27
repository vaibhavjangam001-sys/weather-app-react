const Login = () => {
  return (
    <section className="flex h-[calc(100vh-8rem)] w-full flex-col items-center gap-5 justify-center p-15">
      <div className="w-full max-w-md min-h-[26rem] flex flex-col gap-8 rounded-xl">
        <input
          className="w-full p-2  text-lg border-2 rounded-sm"
          type="text"
        />
        <div className="text-end">
          <input
            className="w-full p-2 border text-lg border-2 rounded-lg"
            type="text"
          />
          <div className="flex justify-between w-full items-center mt-2">
            <p className="text-red-500 font-semibold">Wrong Password</p>
            <a className="text-blue-600 underline" href="#">
              Forget password
            </a>
          </div>
        </div>
        <button className="text-2xl p-2 bg-green-500 w-full rounded-2xl hover:cursor-pointer hover:bg-green-600 active:bg-green-600">LOG IN</button>
      </div>
    </section>
  );
};

export default Login;
