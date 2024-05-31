import React from "react";
import { Menu } from "antd";
import { menus } from "./menus";
import { useNavigate } from "react-router-dom";
function LeftMenu() {
  const navigate = useNavigate();
  function goPath(e) {
    navigate(e.key);
  }
  return (
    <div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["/home/dashboard"]}
        style={{
          height: "100%",
          borderRight: 0,
        }}
        items={menus}
        onClick={goPath}
      />
    </div>
  );
}
export default LeftMenu;
