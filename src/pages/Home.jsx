import { IoMdSearch } from "react-icons/io";
import CurrentWeather from "../components/weather/CurrentWeather";
import ForeCastWeather from "../components/weather/ForeCastWeather";
import WeeklyWeatherForeCast from "../components/weather/WeeklyWeatherForeCast";
import Weatherhighlight from "../components/weather/Weatherhighlight";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchWeather } from "../redux/actions/weatherAction";
import Loading from "../components/animation/Loading";

const Home = () => {
  const [searchCity, setSearchCity] = useState("");

  const dispatch = useDispatch();

  const { isLoading, city } = useSelector(
    (state) => state.weatherReducer,
  );

  const isDark = useSelector(
    (state) =>
      state.authenticationReducer.preferences?.theme === "dark",
  );

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [dispatch, city]);

  return (
    <section className="min-h-[calc(100vh-8rem)] p-4 sm:min-h-[calc(100vh-4rem)]">
      {/* Search */}
      <div
        className={`flex items-center justify-center border-b px-4 lg:px-28 ${
          isDark ? "border-slate-700" : "border-slate-200"
        }`}
      >
        <div className="mb-4 flex w-full">
          <input
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchCity.trim()) {
                dispatch(fetchWeather(searchCity));
              }
            }}
            placeholder="Search City"
            type="search"
            className={`h-10 w-full rounded-l-2xl border px-4 outline-none transition-all duration-200 ${
              isDark
                ? "border-slate-700 bg-slate-800 text-white placeholder:text-slate-400 focus:border-sky-500"
                : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-500 focus:border-sky-500"
            }`}
          />

          <button
            onClick={() => dispatch(fetchWeather(searchCity))}
            className={`flex h-10 w-12 items-center justify-center rounded-r-2xl border border-l-0 transition-all duration-200 ${
              isDark
                ? "border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
                : "border-slate-300 bg-slate-100 text-slate-900 hover:bg-slate-200"
            }`}
          >
            <IoMdSearch />
          </button>
        </div>
      </div>

      {/* Weather Cards */}
      <div
        className={
          isLoading
            ? "flex justify-center items-center"
            : "grid flex-1 grid-cols-1 gap-6 px-4 py-4 md:grid-cols-2 lg:px-28"
        }
      >
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <CurrentWeather />
            <ForeCastWeather />
            <WeeklyWeatherForeCast />
            <Weatherhighlight />
          </>
        )}
      </div>
    </section>
  );
};

export default Home;