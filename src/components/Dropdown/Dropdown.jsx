import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Select, Space } from "antd";
import { useState } from "react";

export const DropDown = ({ items, label, defaultValue, onChange }) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleSelect = (value) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div>
      <label>{label}</label>
      <br />
      <Select
        defaultValue={defaultValue}
        style={{ width: 120 }}
        onChange={handleSelect}
      >
        {items.map((item) => (
          <Select.Option value={item.label} key={item.key}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
      {/* <p>Selected Gender: {selected}</p> */}
    </div>
  );
};


