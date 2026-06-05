import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../redux/actions/newsActions";
import NewsCard from "../components/news/NewsCard";
import Loading from "../components/animation/Loading";

const getCategoryNames = (language) => {
  const categories = {
    en: {
      top: "Top",
      entertainment: "Entertainment",
      sports: "Sports",
      health: "Health",
      science: "Science",
      technology: "Technology",
    },
  };
  return categories[language] || categories.en;
};

const NEWS_CATEGORIES_BASE = [
  { id: 1, name: "top", activeColor: "bg-sky-500 text-white", inactiveColor: "bg-sky-100 text-sky-700 border border-sky-200" },
  { id: 2, name: "entertainment", activeColor: "bg-pink-500 text-white", inactiveColor: "bg-pink-100 text-pink-700 border border-pink-200" },
  { id: 3, name: "sports", activeColor: "bg-green-500 text-white", inactiveColor: "bg-green-100 text-green-700 border border-green-200" },
  { id: 4, name: "health", activeColor: "bg-red-500 text-white", inactiveColor: "bg-red-100 text-red-700 border border-red-200" },
  { id: 5, name: "science", activeColor: "bg-violet-500 text-white", inactiveColor: "bg-violet-100 text-violet-700 border border-violet-200" },
  { id: 6, name: "technology", activeColor: "bg-cyan-500 text-white", inactiveColor: "bg-cyan-100 text-cyan-700 border border-cyan-200" },
];

const News = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("top");

  const dispatch = useDispatch();

  const { news, isLoading, error } = useSelector(
    (state) => state.newsReducer,
  );

  const isDark = useSelector(
    (state) => state.authenticationReducer.preferences?.theme === "dark",
  );
  
  const language = useSelector(
    (state) => state.authenticationReducer.preferences?.language || "en",
  );

  const categoryNames = getCategoryNames(language);

  const NEWS_CATEGORIES = NEWS_CATEGORIES_BASE.map(cat => ({
    ...cat,
    displayName: categoryNames[cat.name],
  }));

  useEffect(() => {
    dispatch(fetchNews(category));
  }, [dispatch, category]);

  const handleSearch = () => {
    dispatch(fetchNews(category, search));
  };

  return (
    <section className="flex min-h-[calc(100vh-8rem)] flex-col p-4 sm:min-h-[calc(100vh-4rem)]">
      <div
        className={`flex h-auto flex-col items-center justify-end gap-8 border-b py-3 px-4 lg:flex-row lg:px-18 ${
          isDark ? "border-slate-700" : "border-slate-200"
        }`}
      >
        <div className="flex flex-1 flex-wrap items-center gap-4 px-4">
          {NEWS_CATEGORIES.map((item) => (
            <button
              key={item.id}
              onClick={() => setCategory(item.name)}
              className={`flex flex-1 cursor-pointer items-center justify-center rounded-md p-2 font-bold transition-all duration-300 hover:scale-105 ${
                category === item.name ? item.activeColor : item.inactiveColor
              }`}
            >
              {item.displayName}
            </button>
          ))}
        </div>

        <div className="flex w-full items-center lg:w-[30%]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search news..."
            type="search"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className={`h-10 w-full rounded-l-2xl border px-4 font-medium outline-none focus:border-sky-500 ${
              isDark
                ? "border-slate-700 bg-slate-800 text-white placeholder:text-slate-400"
                : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-500"
            }`}
          />

          <button
            onClick={handleSearch}
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

      {isLoading && <Loading />}

      {error && (
        <h1 className="mt-10 text-center font-bold text-red-500">
          {error}
        </h1>
      )}

      <div className="grid grid-cols-1 gap-6 px-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-20">
        {news?.map((item, index) => (
          <NewsCard key={index} item={item} language={language} />
        ))}
      </div>
    </section>
  );
};

export default News;