import Logo from "./assets/Logo.svg";
import Visa from "./assets/Visa.svg";
import BG from "./assets/card_bg.svg";

function App() {
  return (
    <div className="container mx-auto px-1 py-2">
      <h1 className="text-2xl/[26px] leading-8 font-medium">Flex card</h1>
      <h2 className="text-xl leading-8 font-normal mb-6">
        Used for pre-tax purchases
      </h2>
      {/* card */}
      <div
        className="w-[392px] h-[272px] rounded-[20px]"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="mx-auto">
          <img src={Logo} alt="logo" />
          <span className=" text-base bg-white rounded-full py-1 px-3">
            Virtual
          </span>
          <div>
            <p className="text-white">VALID THRU</p>
            <p>···</p>
            <p>CVC</p>
          </div>
        </div>
      </div>
      {/* checkbox */}
      <div class="">
        <input type="checkbox" name="details" />
        <label for="details">Show details</label>
      </div>
    </div>
  );
}

export default App;
