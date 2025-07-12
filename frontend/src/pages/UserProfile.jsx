import React, { useState } from 'react';
import PopUp from "./PopUp"

// Demo data for preview
const demoUserData = {
  name: 'Marc Demo',
  email: 'marc.demo@example.com',
  image: 'https://randomuser.me/api/portraits/men/32.jpg',
  skillsOffered: ['JavaScript', 'React', 'Node.js'],
  skillsWanted: ['Python', 'Django'],
  feedback: [
    { reviewer: 'Nayan', comment: 'Great collaborator!', rating: 5 },
    { reviewer: 'Deep', comment: 'Very helpful and skilled.', rating: 4 },
  ],
};

const UserProfile = ({ userData, onRequestSwap }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [offeredSkill, setOfferedSkill] = useState('');
  const [wantedSkill, setWantedSkill] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestClick = () => setPopupOpen(true);
  const handleClose = () => setPopupOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the swap request logic
    setPopupOpen(false);
    alert('Swap request submitted!');
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Profile Photo and Request Button */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={userData.image}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-600"
            />
            <button
              className="mt-6 px-6 py-2 bg-cyan-900 text-white rounded-lg text-lg font-semibold shadow hover:bg-cyan-800 transition"
              onClick={handleRequestClick}
            >
              Request
            </button>
          </div>

          {/* User Info */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{userData.name}</h1>
              <p className="text-xl text-blue-600 font-medium">@{userData.name?.toLowerCase().replace(' ', '_')}</p>
            </div>
            <div>
              <h3 className="text-lg text-gray-700">Email:</h3>
              <p className="text-xl font-medium text-gray-800">{userData.email}</p>
            </div>
            <div>
              <h3 className="text-lg text-gray-700 mb-1">Skills Offered</h3>
              <ul className="list-disc ml-6 text-lg text-gray-800">
                {userData.skillsOffered?.length ? userData.skillsOffered.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                )) : <li>No skills listed</li>}
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-gray-700 mb-1">Skills Wanted</h3>
              <ul className="list-disc ml-6 text-lg text-gray-800">
                {userData.skillsWanted?.length ? userData.skillsWanted.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                )) : <li>No skills listed</li>}
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-gray-700 mb-1">Rating and Feedback</h3>
              <div className="text-base text-gray-700">
                {userData.feedback?.length ? (
                  <ul className="list-disc ml-6">
                    {userData.feedback.map((fb, idx) => (
                      <li key={idx}>
                        <span className="font-semibold">{fb.reviewer}:</span> {fb.comment} <span className="text-yellow-500">{'★'.repeat(fb.rating)}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>No feedback yet.</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PopUp Modal for Swap Request */}
      <PopUp open={popupOpen} onClose={handleClose}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 min-w-[300px]">
          <label className="text-xl font-handwriting">Choose one of your offered skills
            <select
              className="block w-full mt-2 p-2 rounded-lg border-2 border-white bg-gray-200 text-black text-lg font-handwriting"
              value={offeredSkill}
              onChange={e => setOfferedSkill(e.target.value)}
              required
            >
              <option value="" disabled>Select a skill</option>
              {demoUserData.skillsOffered.map((skill, idx) => (
                <option key={idx} value={skill}>{skill}</option>
              ))}
            </select>
          </label>
          <label className="text-xl font-handwriting">Choose one of their wanted skills
            <select
              className="block w-full mt-2 p-2 rounded-lg border-2 border-white bg-gray-200 text-black text-lg font-handwriting"
              value={wantedSkill}
              onChange={e => setWantedSkill(e.target.value)}
              required
            >
              <option value="" disabled>Select a skill</option>
              {demoUserData.skillsWanted.map((skill, idx) => (
                <option key={idx} value={skill}>{skill}</option>
              ))}
            </select>
          </label>
          <label className="text-xl font-handwriting">Message
            <textarea
              className="block w-full mt-2 p-2 rounded-lg border-2 border-white bg-gray-200 text-black text-lg font-handwriting"
              rows={4}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Message"
              required
            />
          </label>
          <button
            type="submit"
            className="mx-auto px-8 py-2 bg-cyan-900 text-white rounded-lg text-xl font-handwriting shadow hover:bg-cyan-800 transition"
          >
            Submit
          </button>
        </form>
      </PopUp>
    </div>
  );
};

// Demo usage for preview
export default function DemoUserProfile() {
  return <UserProfile userData={demoUserData} />;
}
