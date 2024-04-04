import { IButton } from "../../utils/interfaces";

export const ButtonWhite = ({ label, onclick, classes }: IButton) => {
  return (
    <button
      className={`rounded-lg p-4 text-sm bg-white text-primary font-semibold border border-primary ${classes}`}
      onClick={onclick}
    >
      {label}
    </button>
  );
};
