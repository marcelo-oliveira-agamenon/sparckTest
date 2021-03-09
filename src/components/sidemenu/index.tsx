import { useState } from "react";
import { Select } from "antd";
import {
  BankOutlined,
  CopyrightOutlined,
  UsergroupAddOutlined,
  CreditCardOutlined,
  BarsOutlined,
  StockOutlined,
  HeartOutlined,
  StarOutlined,
  ProfileOutlined,
  SmileOutlined,
  QuestionCircleOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./styles.scss";

const { Option } = Select;

function Sidemenu() {
  const [selected, setSelected] = useState(5);

  return (
    <div id="sidemenu">
      <Select>
        <Option value="1">Company as Admin</Option>
        <Option value="2">Company as User</Option>
      </Select>

      <div className="menu">
        <div
          className={selected === 1 ? "selected" : ""}
          onClick={() => setSelected(1)}
        >
          <BankOutlined />
          <h4>Companies</h4>
        </div>

        <div
          className={selected === 2 ? "selected" : ""}
          onClick={() => setSelected(2)}
        >
          <CopyrightOutlined />
          <h4>My Company</h4>
        </div>

        <div
          className={selected === 3 ? "selected" : ""}
          onClick={() => setSelected(3)}
        >
          <UsergroupAddOutlined />
          <h4>Employees</h4>
        </div>

        <div
          className={selected === 4 ? "selected" : ""}
          onClick={() => setSelected(4)}
        >
          <CreditCardOutlined />
          <h4>Invoices</h4>
        </div>

        <div
          className={selected === 5 ? "selected" : ""}
          onClick={() => setSelected(5)}
        >
          <BarsOutlined />
          <h4>#BeHeader Surveys</h4>
        </div>

        <div
          className={selected === 6 ? "selected" : ""}
          onClick={() => setSelected(6)}
        >
          <StockOutlined />
          <h4>Pulse Surveys</h4>
        </div>

        <div
          className={selected === 7 ? "selected" : ""}
          onClick={() => setSelected(7)}
        >
          <HeartOutlined />
          <h4>Core Values</h4>
        </div>

        <div
          className={selected === 8 ? "selected" : ""}
          onClick={() => setSelected(8)}
        >
          <StarOutlined />
          <h4>Perks</h4>
        </div>

        <div
          className={selected === 9 ? "selected" : ""}
          onClick={() => setSelected(9)}
        >
          <ProfileOutlined />
          <h4>Profile Questions</h4>
        </div>

        <div
          className={selected === 10 ? "selected" : ""}
          onClick={() => setSelected(10)}
        >
          <SmileOutlined />
          <h4>Recognition Programs</h4>
        </div>

        <div
          className={selected === 11 ? "selected" : ""}
          onClick={() => setSelected(11)}
        >
          <QuestionCircleOutlined />
          <h4>Onboarding Questions</h4>
        </div>

        <div
          className={selected === 12 ? "selected" : ""}
          onClick={() => setSelected(12)}
        >
          <MenuUnfoldOutlined />
          <h4>Budget</h4>
        </div>

        <div
          className={selected === 13 ? "selected" : ""}
          onClick={() => setSelected(13)}
        >
          <SettingOutlined />
          <h4>Settings</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidemenu;
