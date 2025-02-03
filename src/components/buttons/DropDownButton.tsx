import { BtnProps } from "@/types";

export const DropDownButton = (props: BtnProps) => {
  const { onClick, disabled } = props;
  return (
    <div className="flex flex-col">
      <button
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={` ${props.className} `}
      >
        {props.text}
      </button>
      <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
  <div className="p-4">

  </div>
</div>
    </div>
  );
};
