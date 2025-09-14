import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdFoodBank, MdOutlineFastfood } from "react-icons/md";

const Services = () => {
  return (
    <div className=" sm:px-[100px] md:px-[100px] px-[20px] sm:ml-5 pb-[50px]  ">
      <h1 className="text-4xl text-center pb-[80px]"> Our Services</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4  sm:gap-10   gap-[40px] text-[18px] gap-x-[50px]  font-semibold  text-gray-700 items-center">
        <li className="flex items-center  gap-3 font-bold">
          <IoMdPhonePortrait  className="text-3xl text-[#27187E] "/>
          Online Booking
        </li >
        <li className="flex items-center gap-3  font-bold ">
          <MdOutlineFastfood className="text-3xl text-[#27187E]"/> Fast Food
        </li>
        <li className="flex items-center gap-3 font-bold ">
          <MdFoodBank className="text-3xl text-[#27187E]"/>Healthy Food
        </li>
        <li className="flex items-center gap-3 font-bold ">
          <CiDeliveryTruck className="text-3xl text-[#27187E]"/> Delivery
        </li>
      </ul>
    </div>
  );
};

export default Services;
