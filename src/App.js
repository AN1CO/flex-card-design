import Logo from "./assets/Logo.svg";
import Visa from "./assets/Visa.svg";
import BG from "./assets/card_bg.svg";

function App() {
  return (
    <div className="container flex-auto px-2 pt-8 mx-5">
      <h1 className="text-[26px] leading-8 font-medium">Flex card</h1>
      <h2 className="text-xl leading-8 font-normal mb-6">
        Used for pre-tax purchases
      </h2>
      {/* card */}
      <div
        className=" flex-auto w-[392px] h-[272px] rounded-[20px]"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="mx-auto">
          <div className="flex justify-between mx-4 pt-4 pb-6">
            <img src={Logo} alt="logo" />
            <span className=" text-base bg-white rounded-full py-1 px-3">
              Virtual
            </span>
          </div>
          <span className="text-white text-[26px] leading-8 font-medium ml-6">
            <span className="font-bold mr-3">· · · ·</span> 1732
          </span>
          <div className="flex flex-row gap-8 ml-6">
            <div className="col-span-2">
              <p className="text-xs text-[#D3D2DE]">VALID THRU</p>
              <p className="text-white text-lg leading-6">8/28</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-[#D3D2DE]">CVC</p>
              <span className="text-white font-bold">· · ·</span>
            </div>
          </div>
          <div className="flex justify-between mx-5 pt-[100px]">
            <p className="text-white text-lg leading-6 font-normal">
              ZIP 66062
            </p>
            <img src={Visa} alt="Visa" />
          </div>
        </div>
      </div>
      {/* checkbox */}
      <div>
        <input type="checkbox" name="details" />
        <label for="details">Show details</label>
      </div>
    </div>
  );
}

export default App;
