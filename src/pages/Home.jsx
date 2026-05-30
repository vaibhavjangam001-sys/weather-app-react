import { IoMdSearch } from "react-icons/io";
import CurrentWeather from "../components/weatherCards/CurrentWeather";
import ForeCastWeather from "../components/weatherCards/ForeCastWeather";
import WeeklyWeatherForeCast from "../components/weatherCards/WeeklyWeatherForeCast";
import Weatherhighlight from "../components/weatherCards/Weatherhighlight";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchWeather } from "../redux/actions/weatherAction";

const Home = () => {
  const [searchCity, setSearchCity] = useState("");
  const dispatch = useDispatch();

  const { weather, isLoading, error, city } = useSelector(
    (state) => state.weatherReducer,
  );

  useEffect(() => {
    dispatch(fetchWeather("aurangabad"));
  }, [dispatch]);

  return (
    <section className="min-h-[calc(100vh-8rem)] flex  flex-col sm:min-h-[calc(100vh-4rem)] p-4">
      <div className="h-12 flex justify-end items-center px-4 lg:px-28 w-full">
        <input
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchCity.trim()) {
              dispatch(fetchWeather(searchCity));
            }
          }}
          placeholder="Search City"
          className=" bg-black h-8 p-4 rounded-bl-2xl font-bold rounded-tl-2xl w-full  lg:w-1/3 outline-none transition-all duration-200 focus:border-blue-400 "
          type="search"
        />
        <div>
          <button
            onClick={() => dispatch(fetchWeather(searchCity))}
            className="bg-gray-400 flex border-l-2 justify-center rounded-tr-2xl  rounded-br-2xl items-center h-8 w-12 p-2"
          >
            <IoMdSearch />
          </button>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 gap-6 px-4 py-4 md:grid-cols-2 lg:px-28">
        {/* Weather Card */}
        <CurrentWeather />
        <ForeCastWeather />
        <WeeklyWeatherForeCast />
        <Weatherhighlight />
      </div>
    </section>
  );
};

export default Home;
