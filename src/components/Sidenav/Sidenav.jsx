import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import SubMenu from "antd/es/menu/SubMenu";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";

const SideNavWrapper = styled.div`

`;
const Sidenav = ({ collapsed, items, onCollapse }) => {
  const location = useLocation();
  // const [collapsed, setCollapsed] = useState(false);

  const renderMenuItems = (items, parentPath = "") => {
    return items.map((item) => {
      if (item.children && item.children.length > 0) {
        const itemPath = `${parentPath}/${item.label
          .toLowerCase()
          .replace(" ", "-")}`;
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.label}>
            {renderMenuItems(item.children, itemPath)}
          </SubMenu>
        );
      }
      const itemPath =
        parentPath === ""
          ? `/${item.label.toLowerCase().replace(" ", "-")}`
          : `${parentPath}/${item.label.toLowerCase().replace(" ", "-")}`;

      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link
            to={itemPath}
            className={location.pathname === itemPath ? "active" : ""}
          >
            {item.label}
          </Link>
        </Menu.Item>
      );
    });
  };

  return (
    <SideNavWrapper>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        className="sider-bar"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          // display: "none",
        }}
        width={300}
        theme="light"
      >
        <div className="logo-sidebar">
          {collapsed ? (
            <div
              className="collapse-button-expand"
              onClick={() => onCollapse(!collapsed)}
            >
              <MenuOutlined />
              {/* {collapsed ? "Expand" : "Collapse"} */}
            </div>
          ) : (
            <>
              <div className="logo">MMoviews</div>
              <div
                className="collapse-button"
                onClick={() => onCollapse(!collapsed)}
              >
                <MenuOutlined />
                {/* {collapsed ? "Expand" : "Collapse"} */}
              </div>
            </>
          )}
        </div>
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          {renderMenuItems(items)}
        </Menu>
      </Sider>
    </SideNavWrapper>
  );
};

export default Sidenav;
