import { useContext, useState } from "react";
import "./App.css";
import CardApp from "./components/CardApp";
import OverviewApp from "./components/OverviewApp";
import { DashBoardContext } from "./context/Context";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const context = useContext(DashBoardContext);

  if (!context) return null;

  const { dataCarApp, overviewApp } = context;

  const handleDarkMode = () => {
    setDarkmode(!darkmode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <section className="w-[100%] p-10 dark:bg-darkmode dark:text-white">
      <div className="flex flex-col gap-6 mb-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-bold text-3xl">Social Media Dashboard</h3>
          <span className="text-gray font-semibold text-sm">
            Total Followers: 23,004
          </span>
        </div>
        <hr className="border-solid border-[1px] border-gray md:hidden" />
        <div className="flex justify-between md:gap-4">
          <span className="text-gray font-semibold">Dark Mode</span>
          <div
            className={`w-14 h-7 rounded-full ${
              darkmode ? "bg-toggle" : "bg-gray"
            } flex items-center cursor-pointer`}
            onClick={handleDarkMode}
          >
            <div
              className={`bg-white h-5 w-5 rounded-[50%] mx-1 duration-300 ${
                darkmode ? "translate-x-7" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:flex-wrap">
        {dataCarApp.map((card) => (
          <CardApp
            key={card.id}
            network={card.network}
            user={card.user}
            audienceType={card.audienceType}
            audience={card.audience}
            today={card.today}
            isUp={card.isUp}
          />
        ))}
      </div>
      <p className="text-gray font-semibold text-2xl my-9">Overview - Today</p>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {overviewApp.map((card) => (
          <OverviewApp
            key={card.id}
            network={card.network}
            statsType={card.statsType}
            stats={card.stats}
            porcentage={card.porcentage}
            isUp={card.isUp}
          />
        ))}
      </div>
      <span className="block text-center mt-8">
        Challenge by Frontend Mentor. Coded by Luis Meza.
      </span>
    </section>
  );
}

export default App;
