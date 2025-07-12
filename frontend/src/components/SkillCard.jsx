import React from "react";
import { useNavigate } from "react-router-dom";


const SkillCard = ({ image, name, offered, wanted, rating, userId }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-3xl mx-auto my-4 border border-gray-200 hover:shadow-xl transition duration-300">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 cursor-pointer"
          onClick={() => navigate(`/UserProfile`)}
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <div className="mt-1 text-sm text-gray-600">
            <span className="font-medium text-blue-600">Skills Offered:</span>{" "}
            <span>{offered}</span>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium text-green-600">Skills Wanted:</span>{" "}
            <span>{wanted}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between w-full md:w-auto h-full gap-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer">
          Request
        </button>
        <div className="text-sm text-gray-500">
          ⭐ <span className="font-semibold">{rating}</span>/5
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
