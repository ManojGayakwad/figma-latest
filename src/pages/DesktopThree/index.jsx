import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const DesktopThreePage = () => {
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
                  Setting
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
                  className="h-6 w-6"
                  src="images/img_iconsetting.svg"
                  alt="iconsetting"
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
          className="absolute bg-cover bg-no-repeat sm:h-[318px] h-[830px] md:h-[972px] inset-y-[0] my-auto p-[50px] md:px-5 right-[1%] shadow-bs4 w-[78%] md:w-full"
          style={{ backgroundImage: "url('images/img_sidebar.svg')" }}
        >
          <div className="absolute flex sm:flex-col flex-row gap-7 items-start justify-center right-[15%] top-[27%] w-[36%]">
            <Input
              name="inputtimezone"
              placeholder="E:bob@client.com"
              className="p-0 placeholder:text-black-900 text-left text-xs w-full"
              wrapClassName="border border-black-900_77 border-solid w-[63%] sm:w-full"
              size="xs"
            ></Input>
            <Button
              className="cursor-pointer mb-[50px] min-w-[121px] text-base text-center"
              shape="round"
              color="red_500"
            >
              Remove
            </Button>
          </div>
          <div className="absolute bottom-[13%] flex flex-col gap-[30px] items-center justify-start left-[6%] w-[81%]">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex md:flex-1 flex-col gap-[15px] justify-start w-[51%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-end justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtRobotoRomanRegular16"
                      >
                        Monthly Reports
                      </Text>
                      <Input
                        name="emaildropdown"
                        placeholder="Email(human readable)"
                        className="p-0 placeholder:text-black-900 text-left text-xs w-full"
                        wrapClassName="border border-gray-300 border-solid"
                        type="email"
                        size="xs"
                      ></Input>
                    </div>
                    <Input
                      name="inputtimezone_One"
                      placeholder="Enter Email"
                      className="!placeholder:text-gray-500 !text-gray-500 p-0 text-left text-xs w-full"
                      wrapClassName="border border-gray-300 border-solid w-[56%]"
                      type="email"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <Button
                  className="cursor-pointer min-w-[78px] md:ml-[0] ml-[202px] mr-[172px] text-base text-center"
                  shape="round"
                >
                  Add{" "}
                </Button>
              </div>
              <Input
                name="inputtimezone_Two"
                placeholder="E:deve@client.com"
                className="p-0 placeholder:text-black-900 text-left text-xs w-full"
                wrapClassName="border border-black-900_77 border-solid md:flex-1 mb-[54px] md:ml-[0] ml-[50px] w-[28%] md:w-full"
                size="xs"
              ></Input>
              <Button
                className="cursor-pointer mb-[104px] min-w-[121px] ml-7 md:ml-[0] text-base text-center"
                shape="round"
                color="red_500"
              >
                Remove
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex md:flex-1 flex-col gap-[15px] justify-start w-[51%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-end justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtRobotoRomanRegular16"
                      >
                        Realtime Alerts
                      </Text>
                      <Input
                        name="emaildropdown_One"
                        placeholder="Email(human readable)"
                        className="p-0 placeholder:text-black-900 text-left text-xs w-full"
                        wrapClassName="border border-gray-300 border-solid"
                        type="email"
                        size="xs"
                      ></Input>
                    </div>
                    <Input
                      name="inputtimezone_Three"
                      placeholder="Enter Email"
                      className="!placeholder:text-gray-500 !text-gray-500 p-0 text-left text-xs w-full"
                      wrapClassName="border border-gray-300 border-solid w-[56%]"
                      type="email"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <Button
                  className="cursor-pointer min-w-[78px] md:ml-[0] ml-[202px] mr-[172px] text-base text-center"
                  shape="round"
                >
                  Add{" "}
                </Button>
              </div>
              <Input
                name="inputtimezone_Four"
                placeholder="W:https://webhook.client.com/ecom/"
                className="p-0 placeholder:text-black-900 text-left text-xs w-full"
                wrapClassName="border border-black-900_77 border-solid md:flex-1 mb-[54px] md:ml-[0] ml-[50px] w-[28%] md:w-full"
                size="xs"
              ></Input>
              <Button
                className="cursor-pointer mb-[104px] min-w-[121px] ml-7 md:ml-[0] text-base text-center"
                shape="round"
                color="red_500"
              >
                Remove
              </Button>
            </div>
          </div>
          <div className="absolute flex flex-col gap-[31px] items-center justify-start left-[6%] top-[8%] w-[41%]">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <Text
                className="text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                IDP MetaData URL
              </Text>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-center md:pr-10 pr-16 sm:pr-5 rounded-lg shadow-bs">
                <div className="flex flex-col h-[39px] md:h-auto items-center justify-center w-[37px]">
                  <div className="flex flex-col h-5 md:h-auto items-center justify-start px-1.5 py-1 w-auto">
                    <Img
                      className="h-3.5 md:h-auto object-cover w-3.5"
                      src="images/img_urlimage.png"
                      alt="urlimage"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center w-auto">
                  <Text
                    className="text-gray-500 text-xs w-[52px]"
                    size="txtRobotoRomanRegular12Bluegray200"
                  >
                    Enter URL
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <Text
                className="leading-[140.00%] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                <>
                  Default Client Time <br />
                  Zone
                </>
              </Text>
              <Input
                name="inputtimezone_Five"
                placeholder="Gremany/Berlin"
                className="p-0 placeholder:text-black-900 text-left text-xs w-full"
                wrapClassName="border border-gray-300 border-solid sm:flex-1 sm:mt-0 my-0.5 sm:w-full"
                size="xs"
              ></Input>
            </div>
          </div>
          <div className="absolute h-[143px] left-[6%] top-[28%] w-[41%] sm:w-full">
            <div className="flex flex-col h-full items-center justify-start mx-auto w-full">
              <div className="flex flex-col gap-2.5 items-end justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Daily Reports
                  </Text>
                  <Input
                    name="emaildropdown_Two"
                    placeholder="Email(human readable)"
                    className="p-0 placeholder:text-black-900 text-left text-xs w-full"
                    wrapClassName="border border-gray-300 border-solid"
                    type="email"
                    size="xs"
                  ></Input>
                </div>
                <Input
                  name="inputtimezone_Six"
                  placeholder="Enter Email"
                  className="!placeholder:text-gray-500 !text-gray-500 p-0 text-left text-xs w-full"
                  wrapClassName="border border-gray-300 border-solid w-[56%]"
                  type="email"
                  size="xs"
                ></Input>
              </div>
            </div>
            <div className="absolute flex flex-col gap-[15px] h-full inset-[0] justify-center m-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-2.5 items-end justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Daily Reports
                    </Text>
                    <Input
                      name="emaildropdown_Three"
                      placeholder="Email(human readable)"
                      className="p-0 placeholder:text-black-900 text-left text-xs w-full"
                      wrapClassName="border border-gray-300 border-solid"
                      type="email"
                      size="xs"
                    ></Input>
                  </div>
                  <Input
                    name="inputtimezone_Seven"
                    placeholder="Enter Email"
                    className="!placeholder:text-gray-500 !text-gray-500 p-0 text-left text-xs w-full"
                    wrapClassName="border border-gray-300 border-solid w-[56%]"
                    type="email"
                    size="xs"
                  ></Input>
                </div>
              </div>
              <Button
                className="cursor-pointer min-w-[78px] md:ml-[0] ml-[202px] mr-[172px] text-base text-center"
                shape="round"
              >
                Add{" "}
              </Button>
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

export default DesktopThreePage;
