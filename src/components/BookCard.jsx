import React from "react";

export default function BookCard({ item, index }) {
  return (
    <div
      key={index}
      className="bg-white shadow-md rounded-md overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative w-full h-48 object-cover">
        <img src={item.src} alt="images" className="w-full h-48 object-cover" />
        <span
          className={`text-xs px-2 py-1 rounded-full absolute top-2 right-2 z-10
            ${
              item.status === "Available"
                ? "bg-green-200 text-green-900 "
                : "bg-red-200 text-red-900 "
            }`}
        >
          {`${item.status === "Available" ? "Available" : "Checked Out"}`}
        </span>
      </div>
      <div className="p-4 flex flex-col  text-left">
        <h2 className="text-gray-800 font-bold mb-2 w-full">{item.title}</h2>
        <p className="text-gray-600 mb-1 w-full"> By: {item.author}</p>
        <p className="text-gray-600 w-full">ISBN: {item.isbn}</p>
      </div>
      <button
        className={`m-4 rounded-md px-10 py-3 text-white ${
          item.status === "Available" ? "bg-blue-600" : "bg-blue-300"
        }`}
      >
        {`${item.status === "Available" ? "Borrow Book" : "Not Available"}`}
      </button>
    </div>
  );
}
