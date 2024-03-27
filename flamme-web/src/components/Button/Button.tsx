import { IButton } from "../../utils/interfaces";

export const Button = ({ label, onclick, classes }: IButton) => {
  return (
    <button
      className={`rounded-lg p-4 text-sm bg-primary text-white font-semibold ${classes}`}
      onClick={onclick}
    >
      {label}
    </button>
  );
};
