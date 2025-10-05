import React from "react";

export default function BorrowedBoodCard({ item, index }) {
  return (
    <div
      key={index}
      className="bg-white shadow-md rounded-md overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-xl"
    >
      <div className=" w-full h-48 object-cover">
        <img src={item.src} alt="images" className="w-full h-48 object-cover" />
      </div>
      <div className="p-4 flex flex-col text-left">
        <h2 className="text-gray-800 font-bold mb-2 w-full">{item.title}</h2>
        <p className="text-gray-600 mb-1 w-full"> By: {item.author}</p>
        <p className="text-gray-600 w-full">ISBN: {item.isbn}</p>
        <p className="text-gray-600 w-full">borrowDate: {item.borrowDate}</p>
      </div>
      <button className="m-4 rounded-md px-10 py-3 bg-green-600 hover:bg-green-700 text-white transition-colors duration-200">
        Return Book
      </button>
    </div>
  );
}
