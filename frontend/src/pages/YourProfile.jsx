import React, { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const YourProfile = ({ userData }) => {
  const [location, setLocation] = useState(userData.location);
  const [editingLocation, setEditingLocation] = useState(false);

  const [availability, setAvailability] = useState(userData.availability);
  const [editingAvailability, setEditingAvailability] = useState(false);

  const [isPublic, setIsPublic] = useState(userData.isPublic);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <div className="flex flex-col md:flex-row gap-12">
          
         
          <div className="flex flex-col items-center md:items-start">
            <img
              src={userData.image}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-600"
            />
            <div className="flex gap-4 mt-4">
              <button className="flex items-center gap-1 text-blue-600 cursor-pointer text-lg">
                <Pencil size={18} /> Edit
              </button>
              <button className="flex items-center gap-1 text-red-600 cursor-pointer text-lg">
                <Trash2 size={18} /> Delete
              </button>
            </div>
          </div>

   
          <div className="flex-1 space-y-6">
     
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{userData.name}</h1>
              <p className="text-xl text-blue-600 font-medium">@{userData.name.toLowerCase().replace(' ', '_')}</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-lg text-gray-700">Email:</h3>
              <p className="text-xl font-medium text-gray-800">{userData.email}</p>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-lg text-gray-700 mb-1">Location:</h3>
              <div className="flex items-center gap-2 text-xl font-medium">
                {editingLocation ? (
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onBlur={() => setEditingLocation(false)}
                    className="border px-3 py-1 rounded-md text-base"
                  />
                ) : (
                  <>
                    <span>{location}</span>
                    <button onClick={() => setEditingLocation(true)}>
                      <Pencil size={18} className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-lg text-gray-700 mb-1">Availability:</h3>
              {editingAvailability ? (
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  onBlur={() => setEditingAvailability(false)}
                  className="border px-3 py-1 rounded-md text-base"
                >
                  <option>WEEKENDS</option>
                  <option>WHOLE WEEK</option>
                  <option>PARTIALLY AVAILABLE</option>
                  <option>ONLY AFTER 6 PM</option>
                </select>
              ) : (
                <div className="flex items-center gap-2 text-xl font-medium">
                  <span>{availability}</span>
                  <button onClick={() => setEditingAvailability(true)}>
                    <Pencil size={18} className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                  </button>
                </div>
              )}
            </div>

            {/* Profile Status */}
            <div>
              <h3 className="text-lg text-gray-700 mb-1">Profile Status:</h3>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-lg font-semibold ${
                    isPublic ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}
                >
                  {isPublic ? 'Public' : 'Private'}
                </span>
                <button
                  onClick={() => setIsPublic(!isPublic)}
                  className="text-blue-600 cursor-pointer text-base"
                >
                  {isPublic ? 'Make Private' : 'Make Public'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourProfile;
