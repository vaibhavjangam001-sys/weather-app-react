import Storm from "../weatherAnimation/Storm";

const ForeCastWeather = () => {
  return (
    <>
      {/*  Forecast Card  */}
      <div className="h-[450px] rounded-xl border border-white/10 bg-white/5  p-4 backdrop-blur-md">
        <p className="text-center text-2xl sm:text-3xl font-bold">
          Hourly Weather Forecast{" "}
        </p>
        <div className="flex h-full gap-4 overflow-x-auto items-center hide-scrollbar">
          <div className="flex h-[70%] min-w-[220px] flex-col items-center justify-start rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
              01:00 PM
            </h1>

            <div className="flex flex-1 items-center justify-center">
              <Storm />
            </div>

            <p className="text-3xl font-bold">27°C</p>
          </div>
          <div className="flex h-[70%] min-w-[220px] flex-col items-center justify-start rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
              01:00 PM
            </h1>

            <div className="flex flex-1 items-center justify-center">
              <Storm />
            </div>

            <p className="text-3xl font-bold">27°C</p>
          </div>
          <div className="flex h-[70%] min-w-[220px] flex-col items-center justify-start rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
              01:00 PM
            </h1>

            <div className="flex flex-1 items-center justify-center">
              <Storm />
            </div>

            <p className="text-3xl font-bold">27°C</p>
          </div>
          <div className="flex h-[70%] min-w-[220px] flex-col items-center justify-start rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
              01:00 PM
            </h1>

            <div className="flex flex-1 items-center justify-center">
              <Storm />
            </div>

            <p className="text-3xl font-bold">27°C</p>
          </div>
          <div className="flex h-[70%] min-w-[220px] flex-col items-center justify-start rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
              01:00 PM
            </h1>

            <div className="flex flex-1 items-center justify-center">
              <Storm />
            </div>

            <p className="text-3xl font-bold">27°C</p>
          </div>
          <div className="flex h-[70%] min-w-[220px] flex-col items-center justify-start rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
              01:00 PM
            </h1>

            <div className="flex flex-1 items-center justify-center">
              <Storm />
            </div>

            <p className="text-3xl font-bold">27°C</p>
          </div>
          <div className="flex h-[70%] min-w-[220px] flex-col items-center justify-start rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
              01:00 PM
            </h1>

            <div className="flex flex-1 items-center justify-center">
              <Storm />
            </div>

            <p className="text-3xl font-bold">27°C</p>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default ForeCastWeather;
