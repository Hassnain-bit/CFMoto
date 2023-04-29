import React, { useState } from "react";
import Sidebar from "../components/Common/Sidebar";
import Header from "../components/Common/Header";
import bike_img from "../images/bike_img.png";

function VehicleData() {
  const [openSidebar, setOpenSidebar] = useState(false);

  // HISTORY LIST DATA
  const items = [
    {
      length: 1,
      timestamp: "2022-01-05 16:00",
      description: "A vehicle ordered from the factory",
    },
    {
      length: 2,
      timestamp: "2022-03-02 8:30",
      description:
        "Vehicle registered in the system and sent out from the factory",
    },
    {
      length: 3,
      timestamp: "2022-04-11 11:18",
      description: "Transport from China - to Estonia",
    },
    {
      length: 4,
      timestamp: "2022-04-15 13:45",
      description: "Arrived in Motohobi warehouse",
    },
    {
      length: 5,
      timestamp: "2022-04-15 16:45",
      description: "Motorcycle assembly Ants Käbi, Motohobi",
    },
    {
      length: 6,
      timestamp: "2022-04-17 17:00",
      description:
        "Sales Contract, Motorcycle Awarded to the User Matti Kasela",
    },
    {
      length: 7,
      timestamp: "2022-08-20 12:15",
      description:
        "1000km maintenance reservation, spare parts ordered. Maintenance time 2022-08-27",
    },
  ];

  // Reverse the order of the items array
  items.reverse();

  return (
    <>
      <div className="flex">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

        <Header setOpenSidebar={setOpenSidebar} />

        <main className="md:ml-[16.25rem] xl:ml-[21.125rem] pt-[62px] md:pt-[6.5625rem] w-full">
          {/* VEHICLE DATA */}
          <div className="px-[26px] md:pl-9 xl:pl-[3.25rem] md:pr-10 pt-[22px] md:pt-[42px] xl:pt-14 pb-11 xl:pb-16">
            <div className="flex flex-col md:flex-row">
              {/* LEFT */}
              <div className="w-full md:w-1/2 md:pt-3 xl:pt-12">
                {/* IMAGE */}
                <div className="mb-10 md:mb-20">
                  <img src={bike_img} alt="bike-img" />
                </div>

                {/* BUTTONS DESKTOP */}
                <div className="hidden md:block">
                  <div className="flex flex-col gap-3.5 xl:gap-5 items-center">
                    <div className="w-full grid grid-cols-2 gap-3.5 xl:gap-5">
                      {/* MAINTENANCE */}
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase">
                        MAINTENANCE
                      </button>

                      {/* REPAIRING */}
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase">
                        REPAIRING
                      </button>

                      {/* OEM PARTS */}
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase">
                        OEM PARTS
                      </button>

                      {/* OEM ACCESSORIES */}
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase">
                        OEM ACCESSORIES
                      </button>

                      {/* SERVICE MANUAL */}
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase">
                        SERVICE MANUAL
                      </button>

                      {/* USER MANUAL */}
                      <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase">
                        USER MANUAL
                      </button>
                    </div>
                    {/* WARRANTY */}
                    <button className="w-full h-12 xl:h-[73px] rounded-[10px] border border-white text-f_14_l_18 xl:text-f_22_l_28 font-supremeMedium uppercase">
                      WARRANTY
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full flex flex-col md:w-1/2">
                {/* LIST */}
                <div className="md:pl-5 xl:pl-[30px]">
                  {/* BIKE NAME */}
                  <div className="mb-5 md:mb-[30px] xl:mb-14">
                    <h3 className="bg-gradient-text text-f_19_l_24 md:text-f_20_l_25 xl:text-f_27_l_34 text-center font-supremeBold">
                      Motorcycle, 800MT Touring, 2022
                    </h3>
                  </div>

                  {/* LIST */}
                  <div className="space-y-3.5 xl:space-y-5">
                    {/* SKU */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">SKU</span>
                      <span>CF800-5-TOURING-BLUE</span>
                    </div>

                    {/* VIN CODE / PRODUCT ID */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        VIN CODE / PRODUCT ID
                      </span>
                      <span>LCEPEYL17N6000570</span>
                    </div>

                    {/* COUNTRY */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">COUNTRY</span>
                      <span>Finland</span>
                    </div>

                    {/* SERIES */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">SERIES</span>
                      <span>Motorcycle</span>
                    </div>

                    {/* MODEL NAME */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        MODEL NAME
                      </span>
                      <span>800MT Touring</span>
                    </div>

                    {/* FACTORY NAME */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        FACTORY NAME
                      </span>
                      <span>CF800-5(EU5)</span>
                    </div>

                    {/* COLOR */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">COLOR</span>
                      <span>Blue</span>
                    </div>

                    {/* EU TYPE APPROVAL */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        EU TYPE APPROVAL
                      </span>
                      <span>L3e</span>
                    </div>

                    {/* BODY TYPE */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        BODY TYPE
                      </span>
                      <span></span>
                    </div>

                    {/* STEERING POWER */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        STEERING POWER
                      </span>
                      <span></span>
                    </div>

                    {/* WHEELS */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">WHEELS</span>
                      <span></span>
                    </div>

                    {/* SCREEN */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">SCREEN</span>
                      <span>TFT</span>
                    </div>

                    {/* LIGHTS */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">LIGHTS</span>
                      <span></span>
                    </div>

                    {/* CARGO COMPARTMENTS */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        CARGO COMPARTMENTS
                      </span>
                      <span>Boxes</span>
                    </div>

                    {/* COMMUNICATION TERMINAL */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        COMMUNICATION TERMINAL
                      </span>
                      <span>T-BOX</span>
                    </div>

                    {/* DATA OF MANUFACTURE */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        DATA OF MANUFACTURE
                      </span>
                      <span>2022</span>
                    </div>

                    {/* ORDERER */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">ORDERER</span>
                      <span>Matti Kasela</span>
                    </div>

                    {/* ORDERER PHONE */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        ORDERER PHONE
                      </span>
                      <span>+358123456789</span>
                    </div>

                    {/* ORDERER EMAIL */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        ORDERER EMAIL
                      </span>
                      <span>name.name@mail.com</span>
                    </div>

                    {/* IMPORTER */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">
                        IMPORTER
                      </span>
                      <span>Motohobi</span>
                    </div>

                    {/* DEALER */}
                    <div className="flex items-center justify-between text-f_12_l_15 md:text-f_14_l_18 xl:text-f_18_l_23">
                      <span className="text-lightWhite uppercase">DEALER</span>
                      <span>Rothwork Motors</span>
                    </div>
                  </div>
                </div>

                {/* BUTTONS MOBILE */}
                <div className="md:hidden mt-6">
                  <div className="flex flex-col gap-3.5 items-center">
                    <div className="w-full grid grid-cols-2 gap-3.5">
                      {/* MAINTENANCE */}
                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase">
                        MAINTENANCE
                      </button>

                      {/* REPAIRING */}
                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase">
                        REPAIRING
                      </button>

                      {/* OEM PARTS */}
                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase">
                        OEM PARTS
                      </button>

                      {/* OEM ACCESSORIES */}
                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase">
                        OEM ACCESSORIES
                      </button>

                      {/* SERVICE MANUAL */}
                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase">
                        SERVICE MANUAL
                      </button>

                      {/* USER MANUAL */}
                      <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase">
                        USER MANUAL
                      </button>
                    </div>
                    {/* WARRANTY */}
                    <button className="w-full h-12 rounded-[10px] border border-white text-f_14_l_18 font-supremeMedium uppercase">
                      WARRANTY
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* HISTORY SECTION */}
            <div className="mt-[26px] md:mt-5 xl:mt-14">
              {/* HISTORY TITLE */}
              <div className="mb-5 xl:mb-[30px]">
                <h1 className="text-f_20_l_25 xl:text-f_33_l_42 font-supremeBold">
                  History
                </h1>
              </div>

              {/* HISTORY LIST */}
              <ul>
                {items.map((item, index) => (
                  <li
                    className={
                      index % 2 === 0
                        ? "flex item-center pl-5 pr-1.5 py-3.5 md:px-[30px] md:py-5 xl:py-[30px] bg-black-400 cursor-pointer"
                        : "flex item-center pl-5 pr-1.5 py-3.5 md:px-[30px] md:py-5 xl:py-[30px] bg-black-500 cursor-pointer"
                    }
                    key={index}
                  >
                    {/* LENGTH */}
                    <div className="flex items-center md:items-baseline justify-start min-w-[32px] md:min-w-[46px] xl:min-w-[52px] text-f_15_l_19 md:text-f_14_l_18 xl:text-f_18_l_23">
                      {item.length}
                    </div>
                    <div className="flex flex-col md:flex-row text-f_11_l_14 md:text-f_14_l_18 xl:text-f_18_l_23">
                      {/* TIMESTAMP */}
                      <div className="mb-3 md:mb-0 min-w-[180px] xl:min-w-[217px]">
                        {item.timestamp}
                      </div>
                      {/* DESCRIPTION */}
                      <div className="">{item.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default VehicleData;
