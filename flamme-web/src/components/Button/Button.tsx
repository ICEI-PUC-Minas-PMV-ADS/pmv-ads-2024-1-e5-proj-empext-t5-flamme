import { IButton } from "../../utils/interfaces";

export const Button = ({ label, onclick, classes }: IButton) => {
  return (
    <button
      className={`rounded-lg px-2.5 py-3 w-80 text-sm bg-brownbutton text-white font-semibold ${classes}`}
      onClick={onclick}
    >
      {label}
    </button>
  );
};
