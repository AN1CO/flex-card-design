export const Checkbox = ({ checked, setChecked }) => {
  return (
    <label
      for="details"
      className="flex row gap-3 mt-4 peer-checked:text-[#ED0E61]"
    >
      <input
        checked={checked}
        type="checkbox"
        name="details"
        id="details"
        onClick={() => {
          setChecked(!checked);
        }}
        className=" rounded w-6 h-6 focus:ring-[#ED0F61] checked:bg-[#ED0F61] peer"
      />
      <span className="text-base peer-checked:text-[#ED0F61] peer-checked:font-bold">
        {" "}
        Show details
      </span>
    </label>
  );
};
