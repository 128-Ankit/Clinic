import React, { useState } from "react";

const Settings = () => {
  const languages = ["Hindi", "English"];
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSaveChanges = () => {
    alert(`Language set to: ${selectedLanguage}`);
  };

  return (
    <div>
      <h2 className="para_normal font-semibold text-darkGreen mb-4">Settings</h2>
      <div className="border-b border-gray-300 mb-4"></div>
      <div className="mb-4">
        <h3 className="para_normal font-medium mb-2">Change language</h3>
        {languages.map((language, index) => (
          <label key={index} className="block mb-2  para_normal cursor-pointer">
            <input
              type="radio"
              value={language}
              checked={selectedLanguage === language}
              onChange={handleChange}
              className="mr-2"
            />
            {language}
          </label>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleSaveChanges}
          className="bg-darkGreen text-white px-4 py-2 rounded-md font-semibold"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
