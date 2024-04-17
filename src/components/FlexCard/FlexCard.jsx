import Logo from "../../assets/Logo.svg";
import Visa from "../../assets/Visa.svg";
import BG from "../../assets/card_bg.svg";

export const FlexCard = () => {
  return (
    <div className="flex">
      <div
        className="max-xs:w-screen w-[392px] h-[272px] rounded-[20px] shadow-lg"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="mx-auto">
          <div className="flex justify-between mx-6 pt-6 pb-6">
            <img src={Logo} alt="logo" />
            <span className=" text-base bg-white rounded-full py-1 px-3">
              Virtual
            </span>
          </div>
          <span className="text-white text-[26px] leading-8 font-medium ml-6">
            <span className="font-bold mr-3">· · · ·</span> 1732
          </span>
          <div className="flex flex-row gap-10 ml-6 mt-6 pb-12">
            <div className="col-span-2">
              <p className="text-xs text-[#D3D2DE]">VALID THRU</p>
              <p className="text-white text-lg leading-6">8/28</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-[#D3D2DE]">CVC</p>
              <span className="text-white text-[26px] leading-3 font-bold">
                · · ·
              </span>
            </div>
          </div>
          <div className="flex justify-between mx-6">
            <p className="text-white text-lg leading-6">ZIP 66062</p>
            <img src={Visa} alt="Visa" />
          </div>
        </div>
      </div>
    </div>
  );
};
