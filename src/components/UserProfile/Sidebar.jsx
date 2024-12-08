import React from "react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="w-full h-[100%] bg-white shadow-md p-4 pt-10">
      <ul className="space-y-4 text-gray-700 para_normal">
        {[
          "User Profile",
          "All Members",
          "All Appointments",
          "Notifications",
          "Settings",
          "Support",
          "Logout"
        ].map((item) => (
          <li
            key={item}
            onClick={() => setActiveSection(item)}
            className={`cursor-pointer ${
              activeSection === item
                ? "text-teal-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
