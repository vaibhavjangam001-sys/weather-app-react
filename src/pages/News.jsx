import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../redux/actions/newsActions";
import NewsCard from "../components/newsCards/NewsCard";
import Loading from "../components/weatherAnimation/Loading";

const News = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("top");

  const dispatch = useDispatch();

  const { news, isLoading, error } = useSelector((state) => state.newsReducer);

  useEffect(() => {
    // dispatch(fetchNews(category));
  }, [dispatch, category]);

  const handleSearch = () => {
    // dispatch(fetchNews(category, search));
  };

  const newsCategories = [
    { 
      id: 1,
      name: "top",
      activeColor: "bg-sky-500 text-white",
      inactiveColor: "bg-sky-500/20 text-sky-400 border border-sky-500/30",
    },
    {
      id: 2,
      name: "entertainment",
      activeColor: "bg-pink-500 text-white",
      inactiveColor: "bg-pink-500/20 text-pink-400 border border-pink-500/30",
    },
    {
      id: 3,
      name: "sports",
      activeColor: "bg-green-500 text-white",
      inactiveColor:
        "bg-green-500/20 text-green-400 border border-green-500/30",
    },
    {
      id: 4,
      name: "health",
      activeColor: "bg-red-500 text-white",
      inactiveColor: "bg-red-500/20 text-red-400 border border-red-500/30",
    },
    {
      id: 5,
      name: "science",
      activeColor: "bg-violet-500 text-white",
      inactiveColor:
        "bg-violet-500/20 text-violet-400 border border-violet-500/30",
    },
    {
      id: 6,
      name: "technology",
      activeColor: "bg-cyan-500 text-white",
      inactiveColor: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
    },
  ];

  return (
    <section className="min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-4rem)] p-4 flex flex-col">
      {/* Header */}
      <div className="h-auto flex flex-col lg:flex-row justify-end items-center border-b py-3 px-4 lg:px-18 w-full gap-8">
        {/* Categories */}
        <div className="flex-1 flex flex-wrap gap-4 px-4 items-center">
          {newsCategories.map((item) => (
            <button
              key={item.id}
              onClick={() => setCategory(item.name)}
              className={`p-2 flex-1 font-bold rounded-sm flex justify-center items-center backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-white/20
              ${
                category === item.name ? item.activeColor : item.inactiveColor
              }`}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="lg:w-[30%] w-full flex items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search news..."
            className="bg-black h-10 px-4 rounded-l-2xl w-full outline-none font-bold"
            type="search"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button
            onClick={handleSearch}
            className="bg-gray-400 border-l-2 flex justify-center items-center h-10 w-12 rounded-r-2xl"
          >
            <IoMdSearch />
          </button>
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center">
          {" "}
          <Loading />
        </div>
      )}

      {/* Error */}
      {error && (
        <h1 className="text-center mt-10 text-red-500 font-bold">{error}</h1>
      )}

      {/* News Grid */}
      <div className="grid grid-cols-1 gap-6 px-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-20">
        {news?.map((item, index) => (
          <NewsCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default News;
