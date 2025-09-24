import { Icon } from "@iconify/react";

export const Card = (props) => {
  const { name, icon, number } = props;
  return (
    <div className="flex flex-col bg-white p-4 rounded-md flex-1">
      <div className="flex justify-between items-center gap-6">
        <span className="font-semibold text-md">{name}</span>
        <Icon icon={icon} width="24" />
      </div>
      <h1 className="text-lg font-bold">{number}</h1>
    </div>
  );
};
