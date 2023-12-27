import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import DesktopTwoHelpbutton from "components/DesktopTwoHelpbutton";

import { CloseSVG } from "../../assets/images";

const DesktopTwoPage = () => {
  const navigate = useNavigate();

  const [inputwithaddonsvalue, setInputwithaddonsvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 font-roboto h-[1024px] mx-auto pb-[94px] relative w-full">
        <div className="absolute md:h-[1812px] h-[773px] sm:h-[928px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <Img
            className="h-[414px] mx-auto"
            src="images/img_background.svg"
            alt="background"
          />
          <div className="absolute md:h-[1812px] h-[773px] sm:h-[928px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[773px] m-auto object-cover w-full"
              src="images/img_14577184552762.png"
              alt="14577184552762"
            />
            <div className="absolute flex flex-col gap-[26px] items-center justify-start right-[1%] top-[3%] w-[78%]">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtRobotoRomanBold24"
                  >
                    Reports
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
              <div className="md:h-[1736px] h-[555px] sm:h-[611px] relative w-full">
                <div className="h-[555px] m-auto shadow-bs4 w-full"></div>
                <div className="absolute md:h-[1736px] h-[555px] sm:h-[611px] inset-[0] justify-center m-auto w-full">
                  <div className="md:h-[1736px] h-[555px] sm:h-[611px] m-auto w-full">
                    <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 rounded-[20px] shadow-bs1 w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mb-[450px] w-[99%] md:w-full">
                        <div className="flex flex-col gap-[9px] items-start justify-start">
                          <Text
                            className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                            size="txtRobotoRomanBold22Bluegray900"
                          >
                            Site Details Summary
                          </Text>
                          <Input
                            name="inputwithaddons_One"
                            placeholder="Search Station..."
                            className="!placeholder:text-gray-500 !text-gray-500 md:h-auto p-0 sm:h-auto sm:pr-5 text-left text-xs w-full"
                            wrapClassName="border border-gray-300 border-solid flex pr-[35px] w-full"
                            prefix={
                              <Img
                                className="my-auto"
                                src="images/img_search.svg"
                                alt="search"
                              />
                            }
                          ></Input>
                        </div>
                        <Button
                          className="cursor-pointer font-bold min-w-[74px] sm:mt-0 my-4 rounded-lg text-[10px] text-center"
                          size="sm"
                        >
                          SEE ALL
                        </Button>
                      </div>
                    </div>
                    <div className="absolute bottom-[13%] flex flex-col gap-[9px] inset-x-[0] items-center justify-start mx-auto w-full">
                      <List
                        className="flex flex-col gap-[11px] items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col items-center justify-start mr-[3px] my-0 w-full">
                          <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                            <Line className="bg-gray-300 h-0.5 w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[96%] md:w-full">
                              <Text
                                className="md:mt-0 mt-0.5 text-gray-600 text-sm"
                                size="txtRobotoRomanBold14"
                              >
                                43.3%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[78px] md:mt-0 mt-0.5 text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                7
                              </Text>
                              <Text
                                className="mb-[3px] md:ml-[0] ml-[105px] text-center text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                <>
                                  Mount
                                  <br />
                                  Pleasent
                                </>
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[52px] md:mt-0 mt-0.5 text-center text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                <>
                                  Canning
                                  <br /> Highway
                                </>
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[59px] md:mt-0 mt-[3px] text-center text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                <>
                                  Western
                                  <br />
                                  Australia{" "}
                                </>
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[58px] md:mt-0 mt-0.5 text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                Australia
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[72px] md:mt-0 mt-0.5 text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                6153
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[75px] md:mt-0 mt-0.5 text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                4
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-0.5 text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                100%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[68px] md:mt-0 mt-0.5 text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                Australia
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start mr-[3px] my-0 w-full">
                          <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                            <Line className="bg-gray-300 h-[3px] w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                              <Text
                                className="text-gray-600 text-sm"
                                size="txtRobotoRomanBold14"
                              >
                                63%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[90px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                19
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[104px] text-center text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                <>
                                  North
                                  <br />
                                  Pearth
                                </>
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[62px] text-center text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                <>
                                  Fitgerald <br />
                                  Sreet
                                </>
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[55px] text-center text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                <>
                                  Western
                                  <br />
                                  Australia
                                </>
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[58px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                Australia
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[72px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                6000
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[75px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                6
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[99px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                100%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[68px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                Australia
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start mr-[3px] my-0 w-full">
                          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                            <Line className="bg-gray-300 h-[3px] w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                              <Text
                                className="text-gray-600 text-sm"
                                size="txtRobotoRomanBold14"
                              >
                                43%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[90px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                3350
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[78px] text-center text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                <>
                                  Sheazhen
                                  <br />
                                  Airport
                                </>
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[53px] text-center text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                <>
                                  1 Ma Sik
                                  <br /> Road
                                </>
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[57px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                Sheazhen
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[65px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                China
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[82px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                0
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[99px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                258
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[84px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                99.2%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[74px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                China
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start ml-1 my-0 w-full">
                          <div className="flex flex-col gap-2 items-center justify-start w-full">
                            <Line className="bg-gray-300 h-px w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[7px] text-gray-600 text-sm"
                                size="txtRobotoRomanBold14"
                              >
                                63%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[86px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                3350
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[74px] text-center text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                <>
                                  Shenazhan
                                  <br />
                                  Airport
                                </>
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[53px] text-center text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                <>
                                  1Ma Sik
                                  <br /> Road
                                </>
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[57px] md:mt-0 mt-[7px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                Sheazhen
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[65px] md:mt-0 mt-[7px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                China
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[82px] md:mt-0 mt-2 text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                0
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[99px] md:mt-0 mt-2 text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                258
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[84px] md:mt-0 mt-[7px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                99.2%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[74px] md:mt-0 mt-[7px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                China
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                      <Img
                        className="h-[68px]"
                        src="images/img_row5.svg"
                        alt="rowFive"
                      />
                    </div>
                  </div>
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[19%] w-full">
                    <Line className="bg-gray-300 h-[3px] w-full" />
                    <div className="bg-gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-3 w-full">
                      <Text
                        className="leading-[12.00px] sm:ml-[0] ml-[9px] text-[10px] text-center text-gray-500 tracking-[1.00px]"
                        size="txtRobotoRomanBold10"
                      >
                        <>
                          UTILIZATION TODAY
                          <br />( SVC HR )
                        </>
                      </Text>
                      <Text
                        className="leading-[12.00px] sm:ml-[0] ml-[42px] text-[10px] text-center text-gray-500 tracking-[1.00px]"
                        size="txtRobotoRomanBold10"
                      >
                        <>
                          Customers <br />
                          Today
                        </>
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[12.00px] sm:ml-[0] ml-[50px] text-[10px] text-center text-gray-500 tracking-[1.00px] w-[5%] sm:w-full"
                        size="txtRobotoRomanBold10"
                      >
                        SITE NAME
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[61px] text-[10px] text-gray-500 tracking-[1.00px]"
                        size="txtRobotoRomanBold10"
                      >
                        ADDRESS
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[65px] text-[10px] text-gray-500 tracking-[1.00px]"
                        size="txtRobotoRomanBold10"
                      >
                        STATE
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[71px] text-[10px] text-gray-500 tracking-[1.00px]"
                        size="txtRobotoRomanBold10"
                      >
                        COUNTRY
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[12.00px] sm:ml-[0] ml-[67px] text-[10px] text-gray-500 tracking-[1.00px] w-[6%] sm:w-full"
                        size="txtRobotoRomanBold10"
                      >
                        POST CODE
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[12.00px] ml-12 sm:ml-[0] text-[10px] text-center text-gray-500 tracking-[1.00px] w-[6%] sm:w-full"
                        size="txtRobotoRomanBold10"
                      >
                        NUM CHARGES
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[45px] text-[10px] text-gray-500 tracking-[1.00px]"
                        size="txtRobotoRomanBold10"
                      >
                        AVAILABILITY
                      </Text>
                      <Text
                        className="ml-12 sm:ml-[0] text-[10px] text-gray-500 tracking-[1.00px]"
                        size="txtRobotoRomanBold10"
                      >
                        Location
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-[900px] items-center justify-start left-[1%] p-3.5 md:px-5 shadow-bs1 top-[3%] w-[19%]"
          style={{ backgroundImage: "url('images/img_sidebar.svg')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[293px] items-center justify-start mb-[27px] mt-[15px] w-[99%] md:w-full">
            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
              <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-[83%] md:w-full">
                  <Img
                    className="h-6 md:h-auto object-cover w-full"
                    src="images/img_akkodislogo.png"
                    alt="akkodislogo"
                  />
                </div>
                <Line className="bg-gradient  h-px w-full" />
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-[94%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="dashboard"
                    placeholder="Dashboard"
                    className="!placeholder:text-gray-800 !text-gray-800 font-bold p-0 text-base text-left w-full"
                    wrapClassName="flex shadow-bs1 w-full"
                    prefix={
                      <Img
                        className="mt-0.5 mb-px h-[15px] mr-[19px]"
                        src="images/img_ioniconhhomedefault.svg"
                        alt="IONIcon/H/home/default"
                      />
                    }
                    size="sm"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="reports_One"
                    placeholder="Reports"
                    className="font-bold p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-px mb-0.5 h-[15px] mr-5"
                        src="images/img_ioniconddocumentdefault.svg"
                        alt="IONIcon/D/document/default"
                      />
                    }
                    color="gray_900"
                    size="sm"
                  ></Input>
                </div>
                <DesktopTwoHelpbutton className="flex flex-col items-center justify-start w-full" />
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="setting"
                    placeholder="Setting"
                    className="!placeholder:text-gray-900 !text-gray-900 font-bold p-0 text-base text-left w-full"
                    wrapClassName="flex shadow-bs1 w-full"
                    prefix={
                      <Img
                        className="mt-px mb-0.5 h-[15px] mr-[19px]"
                        src="images/img_ioniconbbuilddefault.svg"
                        alt="IONIcon/B/build/default"
                      />
                    }
                    size="sm"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="profile_Two"
                    placeholder="Profile"
                    className="!placeholder:text-gray-900 !text-gray-900 font-bold p-0 text-base text-left w-full"
                    wrapClassName="flex shadow-bs1 w-full"
                    prefix={
                      <Img
                        className="mt-[3px] mb-px h-[15px] mr-5"
                        src="images/img_ioniconppersondefault.svg"
                        alt="IONIcon/P/person/default"
                      />
                    }
                    size="sm"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="chart"
                    placeholder="Charts"
                    className="!placeholder:text-gray-900 !text-gray-900 font-bold p-0 text-base text-left w-full"
                    wrapClassName="flex shadow-bs1 w-full"
                    prefix={
                      <Img
                        className="mt-0.5 mb-px h-[15px] mr-5"
                        src="images/img_ioniconsstatschart.svg"
                        alt="IONIcon/S/stats/chart"
                      />
                    }
                    size="sm"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtRobotoRomanBold14Bluegray900"
                  >
                    Visit Us At
                  </Text>
                  <a
                    href="www.akkodis.com"
                    className="mt-0.5 text-gray-600 text-xs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text size="txtRobotoRomanRegular12">www.akkodis.com</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
