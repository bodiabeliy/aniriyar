
import Logo from "../../public/logo 3.png";


export const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center sm:p-3 lg:p-8 border-t-2 border-purpure">
      <div className="sm:w-[300px] lg:w-[400px]">
      <img className="" src={Logo.src} alt="" />
      </div>
      <p className="sm:pt-0 lg:pt-5">©2024</p>
    </footer>
  )
}
