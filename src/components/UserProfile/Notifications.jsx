import React, { useState } from "react";

const NotificationList = () => {
  const notifications = [
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
    "In publishing and graphic design, Lorem ipsum is a placeholder",
  ];

  const [visibleNotifications, setVisibleNotifications] = useState(8);  

  const handleViewMore = () => {
    setVisibleNotifications((prevVisible) => prevVisible + 8); 
  };

  return (
    <div>
      <h2 className="font-semibold text-darkGreen para_normal mb-4">Notification</h2>
      <ul className="space-y-2">
        {notifications.slice(0, visibleNotifications).map((notification, index) => (
          <li
            key={index}
            className={`p-2 border para_normal ${index === 1 || index === 3 ? "bg-green-100 border-green-300" : "border-gray-200"
              } rounded-md`}
          >
            {notification}
          </li>
        ))}
      </ul>
      {visibleNotifications < notifications.length && (
        <div className="flex justify-end">
          <button
            onClick={handleViewMore}
            className="mt-4 text-darkGreen font-normal para_normal"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationList;
