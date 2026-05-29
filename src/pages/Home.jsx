import { IoMdSearch } from "react-icons/io";
import CurrentWeather from "../components/weatherCards/CurrentWeather";

const Home = () => {
  return (
    <section className="min-h-[calc(100vh-8rem)] flex  flex-col sm:min-h-[calc(100vh-4rem)] p-4">
      <div className="h-12 flex justify-end items-center px-4 lg:px-28 w-full">
        <input
          placeholder="Search City"
          className=" bg-gray-400 h-8 p-4 rounded-bl-2xl font-bold rounded-tl-2xl w-full sm:w-1/2  md:w-1/3 outline-none transition-all duration-200 focus:border-blue-400 "
          type="search"
        />
        <div>
          <button className="bg-gray-400 flex border-l-2 justify-center rounded-tr-2xl  rounded-br-2xl items-center h-8 w-12 p-2">
            <IoMdSearch />
          </button>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 gap-6 px-4 py-4 md:grid-cols-2 lg:px-28">
        {/* Weather Card */}
        <CurrentWeather/>
      </div>
    </section>
  );
};

export default Home;
