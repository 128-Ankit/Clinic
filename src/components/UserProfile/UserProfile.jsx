import React from "react";

const UserProfile = () => {
  return (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="./assets/Ellipse 17.png"
          alt="User profile"
          className="w-20 h-20 rounded-full cursor-pointer"
        />
        <div className="overflow-hidden  ">
          <h2 className="para_normal font-semibold">User Profile</h2>
          <p className="text-gray-600 para_normal">UserId: ABC7896542147V221</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-rows-2 gap-4 mb-4">
        <input 
          type="text"
          placeholder="First Name"
          className="border border-gray-300 p-2 rounded para_normal"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border border-gray-300 p-2 rounded para_normal"
        />
        <input
          type="text"
          placeholder="Gender"
          className="border border-gray-300 p-2 rounded para_normal"
        />
        <input
          type="text"
          placeholder="Date Of Birth"
          className="border border-gray-300 p-2 rounded para_normal"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded para_normal"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="border border-gray-300 p-2 rounded para_normal"
        />
        <input
          type="number"
          placeholder="Age"
          className="border border-gray-300 p-2 rounded para_normal"
        />
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Height (in cm)"
            className="border border-gray-300 p-2 rounded para_normal"
          />
          <input
            type="number"
            placeholder="Weight (in kg)"
            className="border border-gray-300 p-2 rounded para_normal"
          />
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-2 para_normal">Blood Group</p>
        <div className="w-full overflow-x-auto">
          <div className="flex space-x-2 w-max">
            {["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"].map((group) => (
              <button
                key={group}
                className="border para_normal border-gray-300 px-4 py-2 rounded hover:bg-gray-100 whitespace-nowrap"
              >
                {group}
              </button>
            ))}
          </div>
        </div>

      </div>

      <button className="bg-darkGreen para_normal text-white px-6 py-2 rounded">
        Save Changes
      </button>
    </div>
  );
};

export default UserProfile;
