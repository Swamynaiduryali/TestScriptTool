import { useState } from "react";
import { Icon } from "@iconify/react";
import { Overviewtab } from "./Overviewtab";
import { AutomationHealth } from "./AutomationHealth";
import { UniqueErrors } from "./UniqueErrors";

export const ProjectInsight = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Automation Health", "Unique Errors"];

  return (
    <div className="flex flex-col">
      <div className="bg-white">
        <div className="flex justify-between px-4 pt-3">
          <h1 className="font-bold">Project Insights</h1>
          <div>
            <button className="bg-blue-500 rounded-md p-2 text-white flex items-center gap-2">
              <Icon icon={`ph:share-network-fill`} />
              <p onClick={() => alert("Clicked an share link")}>Share</p>
            </button>
          </div>
        </div>

        <div className="w-full border-b border-gray-300 flex gap-2 px-4">
          {tabs.map((tab) => {
            return (
              <div
                key={tab}
                className={`px-2 py-4 font-medim text-md border-b-2 transition-colors duration-200
                  ${
                    activeTab === tab
                      ? `border-blue-600 text-blue-600`
                      : `border-transparent hover:border-gray-400 text-gray-700`
                  }`}
                onClick={() => {
                  setActiveTab(tab);
                }}
              >
                {tab}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-200 h-screen">
        {activeTab === "Overview" && <Overviewtab />}
        {activeTab === "Automation Health" && <AutomationHealth />}
        {activeTab === "Unique Errors" && <UniqueErrors />}
      </div>
    </div>
  );
};
