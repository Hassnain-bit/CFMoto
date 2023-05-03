import React, { useRef, useState } from "react";
import Sidebar from "../components/Common/Sidebar";
import Header from "../components/Common/Header";
import bike_img from "../images/bike_img.png";
import placeholder_img from "../images/camera_img.svg";
import SurveyForm from "../components/Service/SurveyForm";

function AddNewService() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);
  const [selectedFile4, setSelectedFile4] = useState(null);

  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const fileInputRef4 = useRef(null);

  const handleImageClick = (ref) => {
    console.log("image pciker ", ref);
    ref.current.click();
  };

  const handleFileSelect1 = (event) => {
    setSelectedFile1(URL.createObjectURL(event.target.files[0]));
    files[0] = event.target.files[0];
    setFiles([...files]);
  };

  const handleFileSelect2 = (event) => {
    setSelectedFile2(URL.createObjectURL(event.target.files[0]));
    files[1] = event.target.files[0];
    setFiles([...files]);
  };

  const handleFileSelect3 = (event) => {
    setSelectedFile3(URL.createObjectURL(event.target.files[0]));
    files[2] = event.target.files[0];
    setFiles([...files]);
  };

  const handleFileSelect4 = (event) => {
    setSelectedFile4(URL.createObjectURL(event.target.files[0]));
    files[3] = event.target.files[0];
    setFiles([...files]);
  };

  const [files, setFiles] = useState([null, null, null, null]);
  return (
    <>
      <div className="flex">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

        <Header setOpenSidebar={setOpenSidebar} />

        <main className="md:ml-[16.25rem] xl:ml-[21.125rem] pt-[62px] md:pt-[6.5625rem] w-full">
          {/* ADD NEW SERVICE */}
          <div className="px-[26px] md:pl-9 xl:pl-[3.25rem] md:pr-10 pt-[22px] md:pt-[42px] xl:pt-14 pb-11 xl:pb-16">
            <div className="flex flex-col md:flex-row mb-[22px] md:mb-[30px] xl:mb-14">
              {/* LEFT */}
              <div className="w-full mb-10 md:mb-0 md:w-1/2 md:pt-3 xl:pt-12">
                {/* IMAGE */}
                <div>
                  <img className="mx-auto" src={bike_img} alt="bike-img" />
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full md:w-1/2 flex flex-col self-center">
                <div className="md:pl-5 xl:pl-[30px]">
                  {/* BIKE NAME */}
                  <div className="mb-3 md:mb-1 xl:mb-[86px]">
                    <h3 className="bg-gradient-text text-f_19_l_24 md:text-f_22_l_28 xl:text-f_27_l_34 text-left font-supremeBold">
                      Motorcycle, 800MT Touring, 2022
                    </h3>
                  </div>

                  {/* SERVICE-KM */}
                  <div className="mb-3 md:mb-[30px] xl:mb-[83px]">
                    <h1 className=" text-blue text-f_16_l_20 md:text-f_22_l_28 xl:text-f_35_l_44 font-supremeBold">
                      Service 1000km
                    </h1>
                  </div>

                  {/* SERVICE DESCRIPTION */}
                  <div>
                    <h4 className="text-f_16_l_20 md:text-f_18_l_23 xl:text-f_22_l_28 font-supremeBold text-white-100 mb-3 md:mb-1.5 xl:mb-4">
                      Service description:
                    </h4>
                    <p className="text-f_14_l_22 md:text-f_16_l_25 xl:text-f_18_l_28 text-white-100">
                      Need to change oil, oil filter, fuel filter. Check the air
                      filter, the mechanic will decide if it needs to be
                      changed. Please follow the service plan exactly!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SPARE PARTS FOR SERVICE */}
            <div className="mb-10 md:mb-8 xl:mb-[51px]">
              {/* TITLE */}
              <div className="mb-6 md:mb-[26px]">
                <h3 className="text-f_20_l_25 xl:text-f_22_l_28 text-white-100 font-supremeBold">
                  Spare parts for service:
                </h3>
              </div>

              {/* ITEMS LIST */}
              <div className="space-y-4 md:space-y-[27px] xl:space-y-8">
                {/* ITEM */}
                <div className="bg-black-500 border-[0.5px] border-white-100 rounded-[10px] flex items-center px-4 md:pl-[34px] xl:pl-14 pt-3.5 xl:pt-[17px] pb-5">
                  {/* LEFT */}
                  <div className="w-[45%] md:w-[43.666667%] flex flex-col space-y-2 xl:space-y-4 uppercase">
                    <span className="text-blue text-f_16_l_20 xl:text-f_18_l_23">
                      SKU
                    </span>
                    <span className="text-f_14_l_18 md:text-f_13_l_16 xl:text-f_18_l_23">
                      C90038015200
                    </span>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col space-y-2 xl:space-y-4 uppercase">
                    <span className="text-f_16_l_20 xl:text-f_18_l_23 text-blue">
                      NAME
                    </span>
                    <span className="text-f_14_l_18 md:text-f_13_l_16 xl:text-f_18_l_23">
                      OIL FILTER (WITH BYPASS)
                    </span>
                  </div>
                </div>

                {/* ITEM */}
                <div className="bg-black-500 border-[0.5px] border-white-100 rounded-[10px] flex items-center px-4 md:pl-[34px] xl:pl-14 pt-3.5 xl:pt-[17px] pb-5">
                  {/* LEFT */}
                  <div className="w-[45%] md:w-[43.666667%] flex flex-col space-y-2 xl:space-y-4 uppercase">
                    <span className="text-blue text-f_16_l_20 xl:text-f_18_l_23">
                      SKU
                    </span>
                    <span className="text-f_14_l_18 md:text-f_13_l_16 xl:text-f_18_l_23">
                      C90038015200
                    </span>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col space-y-2 xl:space-y-4 uppercase">
                    <span className="text-f_16_l_20 xl:text-f_18_l_23 text-blue">
                      NAME
                    </span>
                    <span className="text-f_14_l_18 md:text-f_13_l_16 xl:text-f_18_l_23">
                      OIL FILTER (WITH BYPASS)
                    </span>
                  </div>
                </div>

                {/* ITEM */}
                <div className="bg-black-500 border-[0.5px] border-white-100 rounded-[10px] flex items-center px-4 md:pl-[34px] xl:pl-14 pt-3.5 xl:pt-[17px] pb-5">
                  {/* LEFT */}
                  <div className="w-[45%] md:w-[43.666667%] flex flex-col space-y-2 xl:space-y-4 uppercase">
                    <span className="text-blue text-f_16_l_20 xl:text-f_18_l_23">
                      SKU
                    </span>
                    <span className="text-f_14_l_18 md:text-f_13_l_16 xl:text-f_18_l_23">
                      C90038015200
                    </span>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col space-y-2 xl:space-y-4 uppercase">
                    <span className="text-f_16_l_20 xl:text-f_18_l_23 text-blue">
                      NAME
                    </span>
                    <span className="text-f_14_l_18 md:text-f_13_l_16 xl:text-f_18_l_23">
                      OIL FILTER (WITH BYPASS)
                    </span>
                  </div>
                </div>

                {/* ITEM */}
                <div className="bg-black-500 border-[0.5px] border-white-100 rounded-[10px] flex items-center px-4 md:pl-[34px] xl:pl-14 pt-3.5 xl:pt-[17px] pb-5">
                  {/* LEFT */}
                  <div className="w-[45%] md:w-[43.666667%] flex flex-col space-y-2 xl:space-y-4 uppercase">
                    <span className="text-blue text-f_16_l_20 xl:text-f_18_l_23">
                      SKU
                    </span>
                    <span className="text-f_14_l_18 md:text-f_13_l_16 xl:text-f_18_l_23">
                      C90038015200
                    </span>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col space-y-2 xl:space-y-4 uppercase">
                    <span className="text-f_16_l_20 xl:text-f_18_l_23 text-blue">
                      NAME
                    </span>
                    <span className="text-f_14_l_18 md:text-f_13_l_16 xl:text-f_18_l_23">
                      OIL FILTER (WITH BYPASS)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* VEHICLE PHOTOS */}
            <div className="mb-[67px] md:mb-[41px] xl:mb-[90px]">
              {/* TITLE */}
              <div className="mb-6 md:mb-14 xl:mb-[43px]">
                <h3 className="text-f_20_l_25 md:text-f_22_l_28 text-white-100 font-supremeBold mb-3 md:mb-2.5">
                  Vehicle photos:
                </h3>
                <p className=" text-f_14_l_22 md:text-f_16_l_25 xl:text-f_18_l_28 text-white-100">
                  Photo of the speedometer (numbers must be legible), VIN code
                  (numbers must be legible), 45° front view ja 45° rear view
                </p>
              </div>

              <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 md:gap-y-[27px] md:gap-x-[30px]">
                {/* IMAGE 1 */}
                <div>
                  {/* IMAGE AREA */}
                  <div
                    className="w-full h-[156px] md:h-[196px] xl:h-[168px] bg-contain bg-no-repeat bg-center flex justify-center items-center bg-black-500 rounded-[10px]"
                    style={{
                      backgroundImage: selectedFile1
                        ? `url(${selectedFile1})`
                        : "none",
                    }}
                    onClick={(e) => handleImageClick(fileInputRef1)}
                  >
                    {!selectedFile1 && (
                      <div className="flex flex-col justify-center items-center cursor-pointer">
                        <img src={placeholder_img} alt="add-img" />
                        <div className=" text-f_18_l_28 mt-3.5">Add Photo</div>
                      </div>
                    )}
                  </div>

                  {/* INPUT */}
                  <input
                    type="file"
                    ref={fileInputRef1}
                    style={{ visibility: false, display: "none" }}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileSelect1}
                  />
                </div>

                {/* IMAGE 2 */}
                <div>
                  {/* IMAGE AREA */}
                  <div
                    className="w-full h-[156px] md:h-[196px] xl:h-[168px] bg-contain bg-no-repeat bg-center flex justify-center items-center bg-black-500 rounded-[10px]"
                    style={{
                      backgroundImage: selectedFile2
                        ? `url(${selectedFile2})`
                        : "none",
                    }}
                    onClick={(e) => handleImageClick(fileInputRef2)}
                  >
                    {!selectedFile2 && (
                      <div className="flex flex-col justify-center items-center cursor-pointer">
                        <img src={placeholder_img} alt="add-img" />
                        <div className=" text-f_18_l_28 mt-3.5">Add Photo</div>
                      </div>
                    )}
                  </div>

                  {/* INPUT */}
                  <input
                    type="file"
                    ref={fileInputRef2}
                    style={{ visibility: false, display: "none" }}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileSelect2}
                  />
                </div>

                {/* IMAGE 3 */}
                <div>
                  {/* IMAGE AREA */}
                  <div
                    className="w-full h-[156px] md:h-[196px] xl:h-[168px] bg-contain bg-no-repeat bg-center flex justify-center items-center bg-black-500 rounded-[10px]"
                    style={{
                      backgroundImage: selectedFile3
                        ? `url(${selectedFile3})`
                        : "none",
                    }}
                    onClick={(e) => handleImageClick(fileInputRef3)}
                  >
                    {!selectedFile3 && (
                      <div className="flex flex-col justify-center items-center cursor-pointer">
                        <img src={placeholder_img} alt="add-img" />
                        <div className=" text-f_18_l_28 mt-3.5">Add Photo</div>
                      </div>
                    )}
                  </div>

                  {/* INPUT */}
                  <input
                    type="file"
                    ref={fileInputRef3}
                    style={{ visibility: false, display: "none" }}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileSelect3}
                  />
                </div>

                {/* IMAGE 4 */}
                <div>
                  {/* IMAGE AREA */}
                  <div
                    className="w-full h-[156px] md:h-[196px] xl:h-[168px] bg-contain bg-no-repeat bg-center flex justify-center items-center bg-black-500 rounded-[10px]"
                    style={{
                      backgroundImage: selectedFile4
                        ? `url(${selectedFile4})`
                        : "none",
                    }}
                    onClick={(e) => handleImageClick(fileInputRef4)}
                  >
                    {!selectedFile4 && (
                      <div className="flex flex-col justify-center items-center cursor-pointer">
                        <img src={placeholder_img} alt="add-img" />
                        <div className=" text-f_18_l_28 mt-3.5">Add Photo</div>
                      </div>
                    )}
                  </div>

                  {/* INPUT */}
                  <input
                    type="file"
                    ref={fileInputRef4}
                    style={{ visibility: false, display: "none" }}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileSelect4}
                  />
                </div>
              </div>
            </div>

            {/* Maintenance service */}
            <div className="mb-[53px] md:mb-[61px] xl:mb-10">
              {/* Maintenance service TEXT */}
              <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-5 md:mb-[21px] xl:mb-8">
                <h3 className="text-f_20_l_25 md:text-f_22_l_28 xl:text-f_26_l_33 text-white-100 font-supremeMedium mb-4 xl:mb-0">
                  Maintenance service checklist for motorcycle
                </h3>
                <div className="text-f_16_l_20 md:text-f_18_l_23 text-blue">
                  Please mark when you finish each section
                </div>
              </div>
              <SurveyForm />
            </div>

            {/* Mechanic comment */}
            <div className="mb-7">
              <h3 className="text-f_22_l_28 md:text-f_27_l_34 font-supremeBold mb-[25px] md:mb-5">
                Mechanic comment:
              </h3>

              <textarea className="h-[169px] border border-white-100 rounded-[10px] bg-transparent w-full" />
            </div>

            {/* SAVE SERVICE DATA BUTTON */}
            <button className="w-[212px] h-[52px] md:h-[62px] bg-gradient rounded-[10px] text-f_16_l_20 md:text-f_22_l_28 font-supremeMedium">
              Save Service Data
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default AddNewService;
