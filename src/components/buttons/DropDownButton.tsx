import { BtnDropDownProps } from "@/types";
import Image from "next/image";
import eng from "@/../public/eng.webp"
import frn from "@/../public/frn.webp"
import Link from "next/link";

export const DropDownButton = (props: BtnDropDownProps) => {
  const { onClick, disabled, isDropDownOpen } = props;


  return (
    <>
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
      {isDropDownOpen && (
        <div className="dropdown absolute sm:ml-10 lg:ml-[290px] sm:mt-0 sm:mb-[-105px] lg:mb-0 lg:mt-20 z-[100]">
          <ul className="dropdown-content mt-2 menu bg-white rounded-[20px] z-[1] w-52 p-2 shadow drop-shadow-lg">
            <li className="flex p-1 rounded-[10px] hover:bg-overlay sm:text-xl lg:text-2xl">
              <Link href={"/english"} >Англійскa  </Link>
              <Image className="pl-1" src={eng} width={40} alt={""} />
            </li>
            <li className="flex p-1 rounded-[10px] hover:bg-overlay sm:text-xl lg:text-2xl">
              <Link href={"/franch"}>Французькa </Link>
              <Image className="pl-1" src={frn} width={40} alt={""} />

            </li>
          </ul>
        </div>
      )}
    </>
  );
};
