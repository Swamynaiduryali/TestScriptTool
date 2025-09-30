import { Icon } from "@iconify/react";

export const Card = ({ name, icon, number, tag, chart }) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-md flex-1 shadow hover:shadow-md transition gap-2">
      {/* Optional Tag */}
      {tag && (
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full self-start">
          {tag}
        </span>
      )}

      {/* Header */}
      <div className="flex justify-between items-center gap-6">
        <span className="font-semibold text-md">{name}</span>
        <Icon icon={icon} width="24" />
      </div>

      {/* Chart / Indicator */}
      {chart && <div className="h-16">{chart}</div>}

      {/* Number */}
      <h1 className="text-lg font-bold">{number}</h1>
    </div>
  );
};
