import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdFoodBank, MdOutlineFastfood } from "react-icons/md";

const Services = () => {
  return (
    <div className=" sm:px-[100px] px-[100px]  sm:ml-5 pb-[50px]  ">
      <h1 className="text-4xl text-center pb-[80px]"> Our Services</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 sm:gap-10   gap-[40px] text-[18px] gap-x-[100px]  font-semibold  text-gray-700 items-center">
        <li className="flex items-center  gap-3">
          <IoMdPhonePortrait />
          Online Booking
        </li>
        <li className="flex items-center gap-3">
          <MdOutlineFastfood /> Fast Food
        </li>
        <li className="flex items-center gap-3">
          <MdFoodBank /> Healthy Food
        </li>
        <li className="flex items-center gap-3">
          <CiDeliveryTruck /> Delivery
        </li>
      </ul>
    </div>
  );
};

export default Services;
