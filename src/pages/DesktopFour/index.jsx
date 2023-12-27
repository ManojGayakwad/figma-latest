import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const DesktopFourPage = () => {
  const navigate = useNavigate();

  const [inputwithaddonsvalue, setInputwithaddonsvalue] = React.useState("");
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[15px] w-[15px]"
          src="images/img_ioniconbbuilddefault.svg"
          alt="ioniconbbuildde"
        />
      ),
      label: "Setting",
    },
    {
      icon: (
        <Img
          className="h-[15px] w-[15px]"
          src="images/img_ioniconppersondefault.svg"
          alt="ioniconppersond"
        />
      ),
      label: "Profile",
    },
    {
      icon: (
        <Img
          className="h-[15px] w-[15px]"
          src="images/img_ioniconsstatschart.svg"
          alt="ioniconsstatsch"
        />
      ),
      label: "Charts",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 font-roboto h-[1024px] mx-auto pb-[93px] relative w-full">
        <div className="absolute h-[773px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <Img
            className="h-[414px] mx-auto"
            src="images/img_background.svg"
            alt="background"
          />
          <div className="absolute h-[773px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[773px] m-auto object-cover w-full"
              src="images/img_14577184552762.png"
              alt="14577184552762"
            />
            <div className="absolute flex sm:flex-col flex-row md:gap-10 items-center justify-between right-[3%] top-[3%] w-[76%]">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtRobotoRomanBold24"
                >
                  Chart
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[45%] sm:w-full">
                <Input
                  name="inputwithaddons"
                  placeholder="Type here..."
                  value={inputwithaddonsvalue}
                  onChange={(e) => setInputwithaddonsvalue(e)}
                  className="!placeholder:text-gray-500 !text-gray-500 p-0 sm:pr-5 text-left text-xs w-full"
                  wrapClassName="border border-gray-300 border-solid flex sm:mt-0 my-[5px] pr-[35px] sm:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer my-auto"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#a0aec0"
                      className="cursor-pointer my-auto"
                      onClick={() => setInputwithaddonsvalue("")}
                      style={{
                        visibility:
                          inputwithaddonsvalue?.length <= 0
                            ? "hidden"
                            : "visible",
                      }}
                      height={39}
                      width={37}
                      viewBox="0 0 37 39"
                    />
                  }
                ></Input>
                <div className="h-[50px] relative w-[32%] sm:w-full">
                  <div className="absolute flex flex-row gap-[9px] h-full inset-[0] items-center justify-between m-auto w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_profile.png"
                      alt="profile"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="bg-clip-text bg-gradient1  text-transparent text-xl"
                        size="txtRobotoRomanBold20"
                      >
                        Hi! James
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-row gap-[9px] h-full inset-[0] items-center justify-between m-auto w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_profile.png"
                      alt="profile_One"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="bg-clip-text bg-gradient1  text-transparent text-xl"
                        size="txtRobotoRomanBold20"
                      >
                        Hi! James
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="common-pointer h-6 w-6"
                  src="images/img_iconsetting.svg"
                  alt="iconsetting"
                  onClick={() => navigate("/desktopthree")}
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_iconnotification.svg"
                  alt="iconnotificatio"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-10 md:px-5 right-[1%] shadow-bs4 w-[78%]"
          style={{ backgroundImage: "url('images/img_sidebar.svg')" }}
        >
          <div className="flex flex-col gap-[46px] items-center justify-start mb-[154px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="md:h-[272px] h-[273px] relative w-[46%] md:w-full">
                <div className="absolute bg-white-A700 border border-black-900 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-[10px] shadow-bs2 w-[98%]">
                  <div className="flex flex-row gap-3.5 items-center justify-start mb-[233px] md:ml-[0] ml-[150px] w-[28%] md:w-full">
                    <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-start p-1.5 w-[30%]">
                      <div className="bg-blue_gray-800 h-2 w-[96%]"></div>
                    </div>
                    <Text
                      className="text-[10px] text-black-900 text-center"
                      size="txtRobotoRomanRegular10"
                    >
                      Charging Station
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[1%] font-inter md:h-[198px] h-[232px] inset-x-[0] mx-auto p-0.5 w-[98%] sm:w-full">
                  <div className="md:h-[198px] h-[223px] ml-auto my-auto w-[93%] sm:w-full">
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[97%]">
                      <Line className="bg-black-900 h-px w-full" />
                      <List
                        className="sm:flex-col flex-row gap-8 grid grid-cols-7 justify-center w-[92%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[11px] items-center justify-start sm:ml-[0] w-full">
                          <div className="bg-black-900 h-1.5 w-[5%]"></div>
                          <Text
                            className="text-[13.95px] text-black-900 text-center"
                            size="txtInterRegular1395"
                          >
                            100
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[11px] items-center justify-start sm:ml-[0] w-full">
                          <div className="bg-black-900 h-1.5 w-[4%]"></div>
                          <Text
                            className="text-[13.95px] text-black-900 text-center"
                            size="txtInterRegular1395"
                          >
                            200
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[11px] items-center justify-start sm:ml-[0] w-full">
                          <div className="bg-black-900 h-1.5 w-[4%]"></div>
                          <Text
                            className="text-[13.95px] text-black-900 text-center"
                            size="txtInterRegular1395"
                          >
                            300
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[11px] items-center justify-start sm:ml-[0] w-full">
                          <div className="bg-black-900 h-1.5 w-[4%]"></div>
                          <Text
                            className="text-[13.95px] text-black-900 text-center"
                            size="txtInterRegular1395"
                          >
                            400
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[11px] items-center justify-start sm:ml-[0] w-full">
                          <div className="bg-black-900 h-1.5 w-[4%]"></div>
                          <Text
                            className="text-[13.95px] text-black-900 text-center"
                            size="txtInterRegular1395"
                          >
                            500
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[11px] items-center justify-start sm:ml-[0] w-full">
                          <div className="bg-black-900 h-1.5 w-[4%]"></div>
                          <Text
                            className="text-[13.95px] text-black-900 text-center"
                            size="txtInterRegular1395"
                          >
                            600
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[11px] items-center justify-start sm:ml-[0] w-full">
                          <div className="bg-black-900 h-1.5 w-[4%]"></div>
                          <Text
                            className="text-[13.95px] text-black-900 text-center"
                            size="txtInterRegular1395"
                          >
                            700
                          </Text>
                        </div>
                      </List>
                    </div>
                    <div className="absolute flex flex-row items-center justify-start left-[0] top-[0] w-[4%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Text
                            className="text-[13.95px] text-black-900 text-right"
                            size="txtInterRegular1395"
                          >
                            8
                          </Text>
                          <div className="bg-black-900 h-px mb-3 mt-[3px] w-[27%]"></div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly mt-6 w-full">
                          <Text
                            className="text-[13.95px] text-black-900 text-right"
                            size="txtInterRegular1395"
                          >
                            6
                          </Text>
                          <div className="bg-black-900 h-px my-[7px] w-[27%]"></div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly mt-[29px] w-full">
                          <Text
                            className="text-[13.95px] text-black-900 text-right"
                            size="txtInterRegular1395"
                          >
                            4
                          </Text>
                          <div className="bg-black-900 h-px my-[7px] w-[27%]"></div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly mt-[29px] w-full">
                          <Text
                            className="text-[13.95px] text-black-900 text-right"
                            size="txtInterRegular1395"
                          >
                            2
                          </Text>
                          <div className="bg-black-900 h-px my-[7px] w-[27%]"></div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly mt-[29px] w-full">
                          <Text
                            className="text-[13.95px] text-black-900 text-right"
                            size="txtInterRegular1395"
                          >
                            0
                          </Text>
                          <div className="bg-black-900 h-px my-[7px] w-[27%]"></div>
                        </div>
                      </div>
                      <Line className="bg-black-900 h-[185px] mb-2 mt-[3px] w-px" />
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[185px] items-center justify-end pt-[5px] px-[5px] right-[1%] top-[2%] w-[90%]"
                    style={{ backgroundImage: "url('images/img_group17.svg')" }}
                  >
                    <Img
                      className="h-[139px] mt-10"
                      src="images/img_group.svg"
                      alt="group"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-black-900 border-solid flex md:flex-1 flex-col items-start justify-start p-[3px] rounded-[10px] shadow-bs2 w-[45%] md:w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start mb-[18px] mt-[9px] w-[96%] md:w-full">
                  <div className="flex flex-row gap-[22px] items-center justify-center w-[76%] md:w-full">
                    <div className="flex flex-row items-center justify-evenly w-[48%]">
                      <Img
                        className="h-[25px]"
                        src="images/img_linename.svg"
                        alt="linename"
                      />
                      <Text
                        className="text-[10px] text-black-900 text-center"
                        size="txtRobotoRomanRegular10"
                      >
                        Consumption Predicted
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[46%]">
                      <Img
                        className="h-[25px]"
                        src="images/img_linename_white_a700.svg"
                        alt="linename_One"
                      />
                      <Text
                        className="text-[10px] text-black-900 text-center"
                        size="txtRobotoRomanRegular10"
                      >
                        Actual Consumption
                      </Text>
                    </div>
                  </div>
                  <div className="font-inter md:h-[170px] h-[200px] relative w-full">
                    <div className="absolute h-[170px] right-[0] top-[0] w-[94%] sm:w-full">
                      <div className="absolute flex inset-[0] justify-center m-auto w-full">
                        <div className="flex flex-row items-center justify-start my-auto w-[4%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-evenly w-3.5 md:w-full">
                              <Text
                                className="text-black-900 text-right text-xs"
                                size="txtInterRegular12"
                              >
                                4
                              </Text>
                              <div className="bg-black-900 h-px mb-2.5 mt-[3px] w-[22%]"></div>
                            </div>
                            <div className="flex flex-row items-center justify-evenly mt-5 w-full">
                              <Text
                                className="text-black-900 text-right text-xs"
                                size="txtInterRegular12"
                              >
                                3
                              </Text>
                              <div className="bg-black-900 h-px my-1.5 w-[24%]"></div>
                            </div>
                            <div className="flex flex-row items-center justify-evenly mt-6 w-full">
                              <Text
                                className="text-black-900 text-right text-xs"
                                size="txtInterRegular12"
                              >
                                2
                              </Text>
                              <div className="bg-black-900 h-px my-1.5 w-[24%]"></div>
                            </div>
                            <div className="flex flex-row items-center justify-evenly ml-0.5 md:ml-[0] mt-[25px] w-[86%] md:w-full">
                              <Text
                                className="text-black-900 text-right text-xs"
                                size="txtInterRegular12"
                              >
                                1
                              </Text>
                              <div className="bg-black-900 h-px my-1.5 w-1/4"></div>
                            </div>
                            <div className="flex flex-row items-center justify-evenly mt-[25px] w-full">
                              <Text
                                className="text-black-900 text-right text-xs"
                                size="txtInterRegular12"
                              >
                                0
                              </Text>
                              <div className="bg-black-900 h-px my-1.5 w-[24%]"></div>
                            </div>
                          </div>
                          <Line className="bg-black-900 h-40 mb-[7px] mt-[3px] w-px" />
                        </div>
                        <Img
                          className="h-40 ml-[-1px] mr-auto my-auto z-[1]"
                          src="images/img_group_blue_gray_100.svg"
                          alt="group_One"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[2%] h-[146px] inset-x-[0] mx-auto"
                        src="images/img_group_yellow_700_01.svg"
                        alt="group_Two"
                      />
                    </div>
                    <Img
                      className="absolute h-[125px] right-[0] top-[0]"
                      src="images/img_group_green_a700.svg"
                      alt="group_Three"
                    />
                    <div className="absolute bottom-[5%] flex flex-col items-center justify-start right-[0] w-[94%]">
                      <Line className="bg-black-900 h-px w-[96%]" />
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col gap-2 items-center justify-start w-[8%]">
                          <div className="bg-black-900 h-1.5 w-[4%]"></div>
                          <Text
                            className="text-[8px] text-black-900 text-center"
                            size="txtInterRegular8"
                          >
                            100kWh
                          </Text>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-[33px] grid grid-cols-2 w-[24%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-2 items-center justify-start sm:ml-[0] w-full">
                            <div className="bg-black-900 h-1.5 w-[4%]"></div>
                            <Text
                              className="text-[8px] text-black-900 text-center"
                              size="txtInterRegular8"
                            >
                              200kWh
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start sm:ml-[0] w-full">
                            <div className="bg-black-900 h-1.5 w-[4%]"></div>
                            <Text
                              className="text-[8px] text-black-900 text-center"
                              size="txtInterRegular8"
                            >
                              300kWh
                            </Text>
                          </div>
                        </List>
                        <div className="flex flex-col gap-2 items-center justify-start w-[9%]">
                          <div className="bg-black-900 h-1.5 w-[4%]"></div>
                          <Text
                            className="text-[8px] text-black-900 text-center"
                            size="txtInterRegular8"
                          >
                            400kWH
                          </Text>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-[33px] grid grid-cols-2 w-[24%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-2 items-center justify-start sm:ml-[0] w-full">
                            <div className="bg-black-900 h-1.5 w-[4%]"></div>
                            <Text
                              className="text-[8px] text-black-900 text-center"
                              size="txtInterRegular8"
                            >
                              500kWh
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start sm:ml-[0] w-full">
                            <div className="bg-black-900 h-1.5 w-[4%]"></div>
                            <Text
                              className="text-[8px] text-black-900 text-center"
                              size="txtInterRegular8"
                            >
                              600kWh
                            </Text>
                          </div>
                        </List>
                        <div className="flex flex-col gap-2 items-end justify-start w-[8%]">
                          <div className="bg-black-900 h-1.5 w-[4%]"></div>
                          <Text
                            className="text-[8px] text-black-900 text-center"
                            size="txtInterRegular8"
                          >
                            700kWh
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="h-[273px] sm:h-[514px] md:mt-0 mt-1 relative w-[46%] md:w-full">
                <div className="absolute bg-white-A700 border border-black-900 border-solid flex sm:flex-col flex-row gap-[22px] h-full inset-[0] items-start justify-center m-auto p-[26px] sm:px-5 rounded-[10px] shadow-bs2 w-[97%]">
                  <div className="flex flex-row gap-2 items-center justify-center mb-[195px] ml-11 sm:ml-[0] w-[34%] sm:w-full">
                    <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-end p-[5px] w-[29%]">
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    </div>
                    <Text
                      className="text-[10px] text-black-900 text-center"
                      size="txtRobotoRomanRegular10"
                    >
                      Actual Consumption
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5px] items-center justify-center mb-[195px] mr-[68px] w-[33%] sm:w-full">
                    <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-end p-[5px] w-[28%]">
                      <Img
                        className="h-3.5 w-[13px]"
                        src="images/img_close_teal_200.svg"
                        alt="close_One"
                      />
                    </div>
                    <Text
                      className="text-[10px] text-black-900 text-center"
                      size="txtRobotoRomanRegular10"
                    >
                      Actual Consumption
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[10%] font-inter md:h-36 h-[169px] inset-x-[0] mx-auto w-[97%] sm:w-full">
                  <div className="md:h-36 h-[163px] ml-auto my-auto w-[94%] sm:w-full">
                    <div className="md:h-36 h-[163px] m-auto w-full">
                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
                        <Line className="bg-black-900 h-px w-[99%]" />
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-col gap-[7px] items-start justify-start w-[2%]">
                            <div className="bg-black-900 h-[5px] ml-0.5 md:ml-[0] w-1/5"></div>
                            <Text
                              className="text-[10.02px] text-black-900 text-center"
                              size="txtInterRegular1002"
                            >
                              0
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[7px] items-start justify-start w-[2%]">
                            <div className="bg-black-900 h-[5px] ml-0.5 md:ml-[0] w-1/5"></div>
                            <Text
                              className="text-[10.02px] text-black-900 text-center"
                              size="txtInterRegular1002"
                            >
                              2
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[7px] items-start justify-start w-[2%]">
                            <div className="bg-black-900 h-[5px] ml-0.5 md:ml-[0] w-1/5"></div>
                            <Text
                              className="text-[10.02px] text-black-900 text-center"
                              size="txtInterRegular1002"
                            >
                              4
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[7px] items-start justify-start w-[2%]">
                            <div className="bg-black-900 h-[5px] ml-0.5 md:ml-[0] w-1/5"></div>
                            <Text
                              className="text-[10.02px] text-black-900 text-center"
                              size="txtInterRegular1002"
                            >
                              6
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[7px] items-start justify-start w-[2%]">
                            <div className="bg-black-900 h-[5px] ml-0.5 md:ml-[0] w-1/5"></div>
                            <Text
                              className="text-[10.02px] text-black-900 text-center"
                              size="txtInterRegular1002"
                            >
                              8
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-row items-center justify-start left-[0] top-[0] w-[4%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row h-[13px] items-start justify-evenly w-[13px]">
                            <Text
                              className="text-[10.02px] text-black-900 text-right"
                              size="txtInterRegular1002"
                            >
                              8
                            </Text>
                            <div className="bg-black-900 h-px mb-[9px] mt-[3px] w-[31%]"></div>
                          </div>
                          <div className="flex flex-row h-[13px] items-center justify-evenly mt-[17px] w-[13px]">
                            <Text
                              className="text-[10.02px] text-black-900 text-right"
                              size="txtInterRegular1002"
                            >
                              6
                            </Text>
                            <div className="bg-black-900 h-px my-[5px] w-[31%]"></div>
                          </div>
                          <div className="flex flex-row h-[13px] items-center justify-evenly mt-5 w-[13px]">
                            <Text
                              className="text-[10.02px] text-black-900 text-right"
                              size="txtInterRegular1002"
                            >
                              4
                            </Text>
                            <div className="bg-black-900 h-px my-[5px] w-[31%]"></div>
                          </div>
                          <div className="flex flex-row h-[13px] items-center justify-evenly mt-5 w-[13px]">
                            <Text
                              className="text-[10.02px] text-black-900 text-right"
                              size="txtInterRegular1002"
                            >
                              2
                            </Text>
                            <div className="bg-black-900 h-px my-[5px] w-[31%]"></div>
                          </div>
                          <div className="flex flex-row h-[13px] items-center justify-evenly mt-5 w-[13px]">
                            <Text
                              className="text-[10.02px] text-black-900 text-right"
                              size="txtInterRegular1002"
                            >
                              0
                            </Text>
                            <div className="bg-black-900 h-px my-[5px] w-[31%]"></div>
                          </div>
                        </div>
                        <Line className="bg-black-900 h-[135px] mb-1.5 mt-[3px] w-px" />
                      </div>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[135px] inset-x-[0] items-start justify-start mx-auto p-2.5 top-[2%] w-[97%]"
                      style={{
                        backgroundImage: "url('images/img_group18.svg')",
                      }}
                    >
                      <Img
                        className="h-[76px] my-[18px]"
                        src="images/img_group_lime_500.svg"
                        alt="group_Four"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[15%] h-[91px] left-[17%]"
                    src="images/img_group_teal_200.svg"
                    alt="group_Five"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-black-900 border-solid flex md:flex-1 flex-col font-inter items-center justify-start mb-1 p-3 rounded-[10px] shadow-bs2 w-[45%] md:w-full">
                <div className="md:h-60 h-[245px] mb-[3px] relative w-[61%]">
                  <div className="absolute bottom-[5%] md:h-[119px] h-[200px] inset-x-[0] mx-auto w-[199px]">
                    <div className="absolute md:h-[119px] h-[199px] inset-[0] justify-center m-auto w-[199px]">
                      <div className="absolute h-[100px] md:h-[99px] inset-x-[0] mx-auto top-[0] w-full">
                        <div className="absolute h-[100px] md:h-[99px] inset-y-[0] my-auto right-[0] w-[91%]">
                          <div className="absolute bottom-[0] h-[46px] right-[0] w-[56%]">
                            <Img
                              className="absolute bottom-[0] h-[25px] inset-x-[0] mx-auto"
                              src="images/img_save.svg"
                              alt="save"
                            />
                            <Img
                              className="absolute h-[46px] inset-[0] justify-center m-auto"
                              src="images/img_save.svg"
                              alt="save_One"
                            />
                          </div>
                          <Img
                            className="absolute h-[99px] inset-y-[0] left-[0] my-auto"
                            src="images/img_group_blue_800_01.svg"
                            alt="group_Six"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[0] h-[60px] left-[0]"
                          src="images/img_save.svg"
                          alt="save_Two"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[119px] left-[0]"
                        src="images/img_group_blue_800_01.svg"
                        alt="group_Seven"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[99px] right-[12%]"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[20%] h-[65px] right-[13%]"
                    src="images/img_save.svg"
                    alt="save_Three"
                  />
                  <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex flex-row items-start justify-end md:ml-[0] ml-[138px] w-[9%] md:w-full">
                        <Line className="bg-blue-800_01 h-[19px] mt-[11px] w-px" />
                        <Text
                          className="text-blue-800_01 text-xs"
                          size="txtInterRegular12Blue80001"
                        >
                          720
                        </Text>
                      </div>
                      <div className="flex flex-row items-end justify-between mr-[7px] mt-[38px] w-[98%] md:w-full">
                        <div className="flex flex-row items-start justify-evenly mb-1 w-[16%]">
                          <Text
                            className="mb-[5px] text-blue-800_01 text-right text-xs"
                            size="txtInterRegular12Blue80001"
                          >
                            163
                          </Text>
                          <Img
                            className="h-2 mt-[11px]"
                            src="images/img_vector.svg"
                            alt="vector_Thirty"
                          />
                        </div>
                        <div className="flex flex-row items-end justify-evenly mt-[5px] w-[13%]">
                          <Img
                            className="h-[7px] mt-[11px]"
                            src="images/img_vector.svg"
                            alt="vector_ThirtyOne"
                          />
                          <Text
                            className="mb-1 text-blue-800_01 text-xs"
                            size="txtInterRegular12Blue80001"
                          >
                            83
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-end justify-end md:ml-[0] ml-[229px] mt-[9px] w-[13%] md:w-full">
                        <Img
                          className="h-0.5 mt-[11px]"
                          src="images/img_vector_blue_800_01.svg"
                          alt="vector_ThirtyTwo"
                        />
                        <Text
                          className="text-blue-800_01 text-xs"
                          size="txtInterRegular12Blue80001"
                        >
                          91
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-end ml-56 md:ml-[0] mt-[41px] w-[16%] md:w-full">
                        <Img
                          className="h-1.5 mt-1"
                          src="images/img_vector.svg"
                          alt="vector_ThirtyThree"
                        />
                        <Text
                          className="text-blue-800_01 text-xs"
                          size="txtInterRegular12Blue80001"
                        >
                          255
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start ml-3.5 md:ml-[0] mt-4 w-[14%] md:w-full">
                        <Text
                          className="text-blue-800_01 text-right text-xs"
                          size="txtInterRegular12Blue80001"
                        >
                          612
                        </Text>
                        <Img
                          className="h-3"
                          src="images/img_vector.svg"
                          alt="vector_ThirtyFour"
                        />
                      </div>
                      <div className="h-[21px] md:h-[33px] md:ml-[0] ml-[169px] mt-[15px] relative w-[12%]">
                        <Img
                          className="absolute h-[18px] left-[0] top-[0]"
                          src="images/img_vector.svg"
                          alt="vector_ThirtyFive"
                        />
                        <Text
                          className="absolute bottom-[0] right-[0] text-blue-800_01 text-xs"
                          size="txtInterRegular12Blue80001"
                        >
                          330
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar1
          className="!sticky !w-[265px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start left-[1%] overflow-auto md:px-5 top-[0]"
          style={{ backgroundImage: "url('images/img_sidebar.svg')" }}
        />
      </div>
    </>
  );
};

export default DesktopFourPage;
