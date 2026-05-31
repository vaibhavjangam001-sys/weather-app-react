import { IoMdSearch } from "react-icons/io";
import CurrentWeather from "../components/weatherCards/CurrentWeather";
import ForeCastWeather from "../components/weatherCards/ForeCastWeather";
import WeeklyWeatherForeCast from "../components/weatherCards/WeeklyWeatherForeCast";
import Weatherhighlight from "../components/weatherCards/Weatherhighlight";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchWeather } from "../redux/actions/weatherAction";
import Loading from "../components/weatherAnimation/Loading";

const Home = () => {
  const [searchCity, setSearchCity] = useState("");
  const dispatch = useDispatch();

  const { weather, isLoading, error, city } = useSelector(
    (state) => state.weatherReducer,
  );

  useEffect(() => {
    dispatch(fetchWeather("india"));
  }, [dispatch]);

  return (
    <section
      className={`min-h-[calc(100vh-8rem)] flex  sm:min-h-[calc(100vh-4rem)] p-4 flex-col`}
    >
      <div className="h-12 flex justify-center items-center px-4 lg:px-28  border-b w-full">
        <div className="flex flex-1 mb-4">
          <input
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchCity.trim()) {
                dispatch(fetchWeather(searchCity));
              }
            }}
            placeholder="Search City"
            className="bg-black h-10 px-4 rounded-l-2xl w-full outline-none font-bold"
            type="search"
          />
          <div>
            <button
              onClick={() => dispatch(fetchWeather(searchCity))}
              className="bg-gray-400 border-l-2 flex justify-center items-center h-10 w-12 rounded-r-2xl"
            >
              <IoMdSearch />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isLoading ? "flex justify-center items-center" : "flex-1 grid grid-cols-1 gap-6 px-4 py-4 md:grid-cols-2 lg:px-28"}`}
      >
        {/* Weather Card */}
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
