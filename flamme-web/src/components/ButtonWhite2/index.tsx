import { IButton } from "../../utils/interfaces";

export const ButtonWhite2 = ({ label, onclick, classes }: IButton) => {
  return (
    <button
      className={`rounded-lg w-80 px-2.5 py-3 text-sm bg-white text-brownbutton font-semibold border border-brownbutton ${classes}`}
      onClick={onclick}
    >
      {label}
    </button>
  );
};
