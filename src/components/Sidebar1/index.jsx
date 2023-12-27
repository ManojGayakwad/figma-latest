import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const Sidebar1 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

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
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
        style={{ backgroundImage: "url('images/img_sidebar.svg')" }}
      >
        <Img
          className="h-6 md:h-auto mt-[30px] mx-9 object-cover w-[73%]"
          src="images/img_akkodislogo.png"
          alt="akkodislogo"
        />
        <Line className="bg-gradient  h-px ml-3.5 mr-[17px] mt-[29px] w-[88%]" />
        <Menu
          menuItemStyles={{
            button: {
              padding: "17px 17px 17px 22px",
              gap: "20px",
              backgroundColor: "#ffffff",
              boxShadow: "0px 5px  14px 0px #0000000c",
              color: "#001f33",
              fontWeight: 700,
              fontSize: "16px",
              fontFamily: "Roboto",
              borderRadius: "8px",
              [`&:hover, &.ps-active`]: {
                color: "#2d3748",
                backgroundColor: "#ffffffff !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mt-1 pl-[21px] pr-6 pt-[17px] sm:px-5 w-[83%]"
        >
          <div className="flex flex-col gap-[21px] items-center justify-start w-full">
            <MenuItem
              icon={
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_ioniconhhomedefault.svg"
                  alt="ioniconhhomedef"
                />
              }
            >
              <Text>Dashboard</Text>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_ioniconddocumentdefault.svg"
                  alt="ioniconddocumen"
                />
              }
            >
              <Text>Reports</Text>
            </MenuItem>
          </div>
          <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-5 py-3 rounded-lg shadow-bs1 w-full">
            <div className="bg-yellow-700_d8 flex flex-1 flex-col items-center justify-start py-[7px] rounded-lg w-full">
              <div className="bg-white-A700 border border-solid border-yellow-700_d8 flex flex-col items-center justify-start rounded-lg w-full">
                <Text
                  className="text-xs text-yellow-700_d8"
                  size="txtRobotoRomanBold12"
                >
                  ?
                </Text>
              </div>
            </div>
            <Text
              className="text-base text-gray-900"
              size="txtRobotoRomanBold16"
            >
              Help
            </Text>
          </div>
          <div className="flex flex-col gap-[18px] items-center justify-end mt-5 w-full">
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
        </Menu>
        {!collapsed && (
          <Text
            className="ml-[94px] mr-[104px] mt-[310px] text-gray-800 text-sm"
            size="txtRobotoRomanBold14Bluegray900"
          >
            Visit Us At
          </Text>
        )}
        {!collapsed && (
          <Text
            className="mb-[41px] ml-20 mr-[87px] mt-0.5 text-gray-600 text-xs"
            size="txtRobotoRomanRegular12"
          >
            www.akkodis.com
          </Text>
        )}
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
