import React from "react";

const NewsCard = ({ item }) => {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
      <img
        src={item.image_url || "https://placehold.co/600x400?text=No+Image"}
        alt={item.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="font-bold line-clamp-2">{item.title}</h2>

        <p className="text-sm text-gray-400 mt-2 line-clamp-3">
          {item.description}
        </p>

        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 text-blue-400 font-semibold"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
