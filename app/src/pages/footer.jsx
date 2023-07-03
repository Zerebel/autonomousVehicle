/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  const arr1 = [
    { text: "Home", to: "" },
    { text: "FAQ", to: "" },
    { text: "Privacy Policy", to: "" },
    { text: "Contact us", to: "" },
  ];

  const arr2 = [
    { text: "Blog", to: "" },
    { text: "Research", to: "" },
    { text: "Legal", to: "" },
    { text: "First Responders", to: "" },
  ];

  return (
    <footer className="bg-gray-200 py-16">
      <div className=" px-4 md:px-8 lg:px-32">
        <div className="flex flex-col md:flex-row md:justify-between px-2 gap-6 md:gap-0">
          <h6 className="w-full md:max-w-sm text-lg tracking-wide">
            <span className="font-bold text-xl">Driverless’</span> mission is to
            make it safe and easy for people and things to get where they’re
            going. The Waymo Driver can improve the world&apos;s access to mobil
          </h6>
          <ul className="flex flex-col gap-6">
            <Linker array={arr1} />
          </ul>
          <ul className="flex flex-col gap-6">
            <Linker array={arr2} />
          </ul>
        </div>
      </div>
      <div className="lg:px-32 md:px-8 px-4 h-1 w-full my-8">
        <hr className="border-blue-gray-600" />
      </div>

      <div className="flex justify-between md:justify-around flex-col md:flex-row gap-4 md:gap-0 items-center px-1 md:px-0">
        <p className="max-w-xs md:max-w-none text-center">
          © {new Date().getFullYear()} Driverless Inc. All Rights Reserved.
        </p>
        <div className="min-w-fit flex gap-6">
          <Link to={""}>
            <FacebookIcon color="primary" />
          </Link>
          <Link to={""}>
            <InstagramIcon color="secondary" />
          </Link>
          <Link to={""}>
            <TwitterIcon color="primary" />
          </Link>
          <Link to={""}>
            <WhatsAppIcon color="success" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

const Linker = ({ array }) => {
  return (
    <>
      {array.map((item, index) => (
        <li key={index} className=" text-lg hover:text-blue-700">
          <Link to={item.to}>{item.text}</Link>
        </li>
      ))}
    </>
  );
};
