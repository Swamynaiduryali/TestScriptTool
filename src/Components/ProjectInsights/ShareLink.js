import { useState } from "react";
import { Icon } from "@iconify/react";

export const ShareLink = () => {
  const [shareLinkTab, setActiveShareLinkTab] = useState("Share dashboard");
  const shareLinkTabs = ["Share dashboard", "Share via public link"];
  const [link] = useState("https://test-management.browserstack.com/project");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="flex flex-col absolute top-full right-0 border border-gray-300
             gap-3 bg-white w-max rounded-md shadow-md"
    >
      <div className="flex gap-2">
        {shareLinkTabs.map((tab) => {
          return (
            <div>
              <div
                key={tab}
                className={`px-2 py-4 font-medim text-md border-b-2 transition-colors duration-200
                  ${
                    shareLinkTab === tab
                      ? `border-blue-600 text-blue-600`
                      : `border-transparent hover:border-gray-400 text-gray-700`
                  }`}
                onClick={() => {
                  setActiveShareLinkTab(tab);
                }}
              >
                {tab}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-2">
        <div className="flex border rounded-md overflow-hidden w-full max-w-lg">
          <input
            type="text"
            value={link}
            readOnly
            className="flex-1 px-3 py-2 text-gray-700 bg-white outline-none"
          />
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"
          >
            <Icon icon="ic:baseline-content-copy" width="15" />
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
      </div>
    </div>
  );
};
