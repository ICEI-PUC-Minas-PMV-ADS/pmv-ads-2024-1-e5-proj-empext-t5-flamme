import { IButton } from "../../utils/interfaces";

export const ButtonWhiteEdit = ({ label, onclick, classes }: IButton) => {
  return (
    <button
      className={`${classes} rounded-lg w-full px-5 py-3 mb-2 text-sm bg-white text-brownbutton font-semibold border border-brownbutton`}
      onClick={onclick}
    >
      {label}
    </button>
  );
};
