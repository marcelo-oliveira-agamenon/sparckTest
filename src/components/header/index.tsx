import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined, BellOutlined, MenuOutlined } from "@ant-design/icons";

import "./styles.scss";
import Logo from "../../assets/logo.png";

function Header() {
  const menu = (
    <Menu>
      <Menu.Item>Homepage</Menu.Item>

      <Menu.Item>My Profile</Menu.Item>

      <Menu.Item>My Dashboard</Menu.Item>

      <Menu.Item>Surveys</Menu.Item>

      <Menu.Item>Recognize!</Menu.Item>
    </Menu>
  );

  return (
    <div id="header">
      <div className="logo">
        <img src={Logo} alt="sparck" />

        <Dropdown overlay={menu}>
          <MenuOutlined />
        </Dropdown>

        <h1>Sparck</h1>
      </div>

      <nav>
        <span>Homepage</span>

        <span>My Profile</span>

        <span>My Dashboard</span>

        <span>Surveys</span>

        <span>Recognize!</span>
      </nav>

      <div className="element-right">
        <button className="normal-btn">company admin</button>

        <BellOutlined />

        <Avatar size={40} icon={<UserOutlined />} />
      </div>
    </div>
  );
}

export default Header;
