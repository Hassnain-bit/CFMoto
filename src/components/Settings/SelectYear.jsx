import React, { useState } from "react";
import Select from "react-tailwindcss-select";

function SelectYear() {
  const options = [
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
  ];

  const [year, setYear] = useState([]);

  const handleChange = (value) => {
    console.log("value:", value);
    setYear(value || []); // set to an empty array if value is null or undefined
  };

  return (
    <>
      {/* LEFT */}
      <div className="flex flex-col items-start space-y-8">
        {/* TITLE */}
        <h3 className="pl-3 text-f_22_l_28 md:text-f_27_l_34 font-supremeBold bg-gradient-text">
          Year
        </h3>
        {/* SELECT */}

        <div className="min-w-[235px] h-[45px] bg-black-500 select">
          <Select
            value={year}
            onChange={handleChange}
            options={options}
            isMultiple
            classNames={{
              menuButton: ({ isDisabled }) =>
                `flex w-full min-h-[45px] text-f_18_l_23 text-white border-[0.5px] border-white-100 rounded-[10px] transition-all duration-300 focus:ring-0 focus:outline-none ${
                  isDisabled
                    ? "bg-gray-200"
                    : "bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                }`,
              menu: "absolute z-10 w-full bg-black-500 shadow-lg border rounded-[10px] py-1 mt-1.5 text-f_18_l_23",
              listItem: ({ isSelected }) =>
                `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                  isSelected
                    ? `text-white-100 bg-blue-500`
                    : `text-white-100 hover:bg-blue-100 hover:text-blue-500`
                }`,
              tagItem: () =>
                "bg-black-600 text-white-100 text-[12px] border rounded-sm flex space-x-1 pl-1",
              // tagItemText: () => "Hello",
            }}
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className="pl-12 xl:pl-24">
        <h2 className="text-f_27_l_34 text-white">2022</h2>
      </div>
    </>
  );
}

export default SelectYear;
