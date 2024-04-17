import { FlexCard } from "./components/FlexCard/FlexCard";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="container px-2 pt-8 max-sm:mx-auto mx-[55px]">
      <h1 className="text-[26px] leading-8 font-medium">Flex card</h1>
      <h2 className="text-xl leading-8 font-normal mb-[31px]">
        Used for pre-tax purchases
      </h2>
      <FlexCard />
      <Checkbox checked={checked} setChecked={setChecked} />
    </div>
  );
}

export default App;
