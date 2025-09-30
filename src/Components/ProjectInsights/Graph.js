import { useState } from "react";
import { Modalpopup } from "../../CommonComponents/Modalpopup";
import { Icon } from "@iconify/react";

const Content = () => {
  return (
    <div>
      <div className="flex gap-2 items-center border-2 border-gray-400 rounded-md p-2 w-64  focus-within:border-blue-500">
        <Icon icon="material-symbols:search-rounded"></Icon>
        <input
          type="text"
          placeholder="search by widget name"
          className="focus: outline-none text-sm"
        />
      </div>
    </div>
  );
};

export const Graph = (props) => {
  return (
    <div>
      <Modalpopup
        open={props.open}
        onClose={props.onClose}
        header="Add widget"
        content={<Content />}
        width="50%"
      />
    </div>
  );
};
