import React from 'react';

const UserProfile = ({ userData, onRequestSwap }) => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <div className="flex flex-col md:flex-row gap-12">

          {/* Profile Photo */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={userData.image}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-600"
            />
          </div>

          {/* User Info */}
          <div className="flex-1 space-y-6">
            {/* Name */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="texzt-3xl font-bold text-gray-900">{userData.name}</h1>
                <p className="text-xl text-blue-600 font-medium">@{userData.name.toLowerCase().replace(' ', '_')}</p>
              </div>
              <button
                onClick={onRequestSwap}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700"
              >
                Request
              </button>
            </div>

            {/* Skills Offered */}
            <div>
              <h3 className="text-lg text-gray-700 mb-1">Skills Offered:</h3>
              <ul className="list-disc pl-5 space-y-1 text-xl font-medium text-gray-800">
                {userData.skillsOffered.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Skills Wanted */}
            <div>
              <h3 className="text-lg text-gray-700 mb-1">Skills Wanted:</h3>
              <ul className="list-disc pl-5 space-y-1 text-xl font-medium text-gray-800">
                {userData.skillsWanted.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Rating and Feedback */}
            <div>
              <h3 className="text-lg text-gray-700 mb-1">Rating & Feedback:</h3>
              <div className="flex items-center gap-4">
                <span className="text-xl font-semibold text-yellow-600">
                  ⭐ {userData.rating}/5
                </span>
                <p className="text-lg text-gray-800">{userData.feedback}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserProfile;
