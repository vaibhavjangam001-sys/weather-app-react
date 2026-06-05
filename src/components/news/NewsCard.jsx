import { useSelector } from "react-redux";

const NewsCard = ({ item }) => {
  const isDark = useSelector(
    (state) =>
      state.authenticationReducer.preferences?.theme === "dark",
  );

  return (
    <div
      className={`overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        isDark
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <img
        src={
          item.image_url ||
          "https://placehold.co/600x400?text=No+Image"
        }
        alt={item.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2
          className={`line-clamp-2 font-bold ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {item.title}
        </h2>

        <p
          className={`mt-2 line-clamp-3 text-sm ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {item.description || "No description available."}
        </p>

        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block font-semibold text-sky-600 transition-colors duration-200 hover:text-sky-500"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;