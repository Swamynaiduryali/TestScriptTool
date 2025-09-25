import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Card } from "../../CommonComponents/Card";
import { Modalpopup } from "../../CommonComponents/Modalpopup";
import Button from "@mui/material/Button";

export const Overviewtab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedView, setSelectedView] = useState("Default Dashboard View");
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleViewSelect = (viewName) => {
    setSelectedView(viewName);
    setIsOpen(false);
  };
  const days = ["1D", "7D", "30D", "3M", "6M", "1Y", "2Y", "AllTime", "Custom"];
  const insightCards = [
    {
      title: "Automation Coverage",
      value: "33.3%",
      icon: "ph:dots-three-vertical-bold",
    },
    {
      title: "Automated Test Cases",
      value: "2",
      icon: "ph:dots-three-vertical-bold",
    },
    {
      title: "Manual Test Cases",
      value: "4",
      icon: "ph:dots-three-vertical-bold",
    },
    {
      title: "Total Test Cases",
      value: "6",
      icon: "ph:dots-three-vertical-bold",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="m-4 flex justify-between">
        <div className="flex gap-2">
          <div className="relative">
            <button
              className="flex items-center justify-between px-2 py-1 bg-white border border-gray-300 
                         rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-offset-1"
              onClick={() => toggleDropdown()}
            >
              <span>{selectedView}</span>
              <Icon icon="mynaui:chevron-up-down" width="20" />
            </button>

            {isOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-max bg-white border border-gray-200 
                           rounded-lg shadow-lg z-10"
              >
                {/* Dropdown Item 1: Default Dashboard View */}
                <div
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 justify-between"
                  onClick={() => handleViewSelect("Default Dashboard view")}
                >
                  <div className="flex items-center gap-2">
                    <Icon icon="uis:graph-bar" width="20" />
                    <span className="font-semibold text-gray-900 white-space-nowrap">
                      Default Dashboard View
                    </span>
                  </div>
                  {selectedView === "Default Dashboard view" && (
                    <Icon
                      icon="ph:check-bold"
                      width="20"
                      className="text-blue-400"
                    />
                  )}
                </div>

                {/* Dropdown Item 2: Automation Trends */}
                <div
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 justify-between"
                  onClick={() => handleViewSelect("Automation Trends")}
                >
                  <div className="flex items-center gap-2">
                    <Icon icon="ph:code" width="20" className="text-gray-500" />
                    <span className="text-gray-700">Automation Trends</span>
                  </div>
                  {selectedView === "Automation Trends" && (
                    <Icon
                      icon="ph:check-bold"
                      width="20"
                      className="text-blue-400"
                    />
                  )}
                </div>

                {/* Dropdown Item 3: Create View */}
                <div
                  className="flex items-center px-4 py-2 cursor-pointer gap-2 text-blue-600 hover:bg-gray-100"
                  onClick={handleClickOpen} // Just call the state-changing function here
                >
                  <Icon icon="ph:plus" width="20" />
                  <span className="whitespace-nowrap">Create View</span>
                </div>
              </div>
            )}
          </div>

          <div>
            {days.map((day, index) => {
              return (
                <button
                  key={day}
                  className={`px-2 py-1 border border-gray-300 bg-white ${
                    index === 0 ? "rounded-tl-md rounded-bl-md" : "rounded-none"
                  }
                ${
                  index === days.length - 1
                    ? "rounded-tr-md rounded-br-md"
                    : "rounded-none"
                }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex gap-2">
          <div>
            <button className="flex items-center justify-between border border-gray-300 rounded-md px-2 py-1 bg-white">
              <Icon icon="mdi:widget-box-plus-outline" width="23" />
            </button>
          </div>
          <div>
            <button className="flex items-center justify-between border border-gray-300 rounded-md px-2 py-1 bg-white">
              <Icon icon="material-symbols:edit-sharp" width="23" />
            </button>
          </div>
          <div>
            <button className="flex items-center justify-between border border-gray-300 rounded-md px-2 py-1 bg-white">
              <Icon icon="mdi:filter" width="20" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      <div className="m-4 flex gap-2">
        {insightCards.map(({ title, value, icon }) => {
          return <Card name={title} icon={icon} number={value} />;
        })}
      </div>

      <Modalpopup open={open} onClose={handleClose} />
    </div>
  );
};
