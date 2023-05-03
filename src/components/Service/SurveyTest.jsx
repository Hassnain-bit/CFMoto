import React, { useState } from "react";

export default function SurveyTest() {
  const [boxes, setBoxes] = useState([
    {
      id: 1,
      yes: false,
      no: false,
      executed: false,
      pointerEvents: "unset",
      opacity: 1,
    },
    {
      id: 2,
      yes: false,
      no: false,
      executed: false,
      pointerEvents: "none",
      opacity: 0.5,
    },
    {
      id: 3,
      yes: false,
      no: false,
      executed: false,
      pointerEvents: "none",
      opacity: 0.5,
    },
    {
      id: 4,
      yes: false,
      no: false,
      executed: false,
      pointerEvents: "none",
      opacity: 0.5,
    },
    {
      id: 5,
      yes: false,
      no: false,
      executed: false,
      pointerEvents: "none",
      opacity: 0.5,
    },
    {
      id: 6,
      yes: false,
      no: false,
      executed: false,
      pointerEvents: "none",
      opacity: 0.5,
    },
    {
      id: 7,
      yes: false,
      no: false,
      executed: false,
      pointerEvents: "none",
      opacity: 0.5,
    },
  ]);

  const handleCheckboxChange = (boxId, checkboxType) => {
    let newBoxes = [...boxes];

    if (checkboxType === "yes") {
      newBoxes[boxId - 1].yes = true;
      newBoxes[boxId - 1].no = false;
      newBoxes[boxId - 1].executed = true;

      if (boxId < 7) {
        newBoxes[boxId].pointerEvents = "unset";
        newBoxes[boxId].opacity = 1;
      }
    } else if (checkboxType === "no") {
      newBoxes[boxId - 1].yes = false;
      newBoxes[boxId - 1].no = true;
      newBoxes[boxId - 1].executed = false;
    }

    setBoxes(newBoxes);
  };

  return (
    <div>
      {boxes.map((box, index) => (
        <div
          key={box.id}
          style={{ pointerEvents: box.pointerEvents, opacity: box.opacity }}
          className=" bg-black-600 rounded-[10px] pt-2 pl-[22px] pb-[38px] pr-12"
        >
          <h4 className="text-f_18_l_23 text-white-100">Clean or replace the air filter</h4>
          <div>
            <label htmlFor={`yes-${box.id}`}>Yes</label>
            <input
              type="checkbox"
              id={`yes-${box.id}`}
              checked={box.yes}
              onChange={() => handleCheckboxChange(box.id, "yes")}
            />
          </div>
          <div>
            <label htmlFor={`no-${box.id}`}>No</label>
            <input
              type="checkbox"
              id={`no-${box.id}`}
              checked={box.no}
              onChange={() => handleCheckboxChange(box.id, "no")}
            />
          </div>
          
          <div>
            <label htmlFor={`executed-${box.id}`}>Executed</label>
            <input
              type="checkbox"
              id={`executed-${box.id}`}
              checked={box.executed}
            />
          </div>
          

          {box.no && (
            <div>
              <label htmlFor={`input1-${box.id}`}>Input 1</label>
              <input type="text" id={`input1-${box.id}`} />
              <label htmlFor={`input2-${box.id}`}>Input 2</label>
              <input type="text" id={`input2-${box.id}`} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
