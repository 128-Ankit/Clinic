import React, { useState } from "react";
import Sidebar from "../../components/UserProfile/Sidebar";
import UserProfile from "../../components/UserProfile/UserProfile";
import AllMembers from "../../components/UserProfile/AllMembers";
import AllAppointments from "../../components/UserProfile/AllAppointments";
import Notifications from "../../components/UserProfile/Notifications";
import Settings from "../../components/UserProfile/Settings";
import Support from "../../components/UserProfile/Support";
import Logout from "../../components/UserProfile/Logout";
import { FaShareSquare } from "react-icons/fa";

const App = () => {
    const [activeSection, setActiveSection] = useState("User Profile");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const handleSectionChange = (e) => {
        setActiveSection(e);
        setIsSidebarOpen(false);
    };

    const renderContent = () => {
        switch (activeSection) {
            case "User Profile":
                return <UserProfile />;
            case "All Members":
                return <AllMembers />;
            case "All Appointments":
                return <AllAppointments />;
            case "Notifications":
                return <Notifications />;
            case "Settings":
                return <Settings />;
            case "Support":
                return <Support />;
            case "Logout":
                return <Logout />;
            default:
                return <div>Select a section from the sidebar.</div>;
        }
    };

    return (
        <div className="flex lg:flex-row flex-col min-h-screen bg-gray-100">

            <div className="lg:hidden p-4">
                <FaShareSquare
                    className={`text-3xl cursor-pointer text-darkGreen transition-transform duration-300 ${isSidebarOpen ? 'rotate-90' : 'rotate-0'
                        }`}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                />
            </div>

            <div
                className={`lg:block fixed inset-x-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-1/4 bg-white shadow-md z-10`}
            >
                <Sidebar activeSection={activeSection} setActiveSection={handleSectionChange} />
            </div>

            <div className="w-full lg:p-8 md:p-6 p-2">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default App;
