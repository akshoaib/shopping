import React from "react";
import { Select } from "antd";

const CustomSelect = ({
  data,
  handleChange,
  error,
  name,
  onBlur,
  label,
  disabled = false,
  value,
}) => {
  return (
    <>
      <label>{label}</label>
      <br />
      <Select
        size="large"
        disabled={disabled}
        value={value}
        // defaultValue="a1"
        onChange={(e) => {
          handleChange({
            target: {
              name,
              value: e,
            },
          });
        }}
        onBlur={onBlur}
        style={{
          width: "100%",
        }}
        options={data}
        fieldNames={{ label: "name", value: "_id" }}
      />
      {error && <p className={"error"}>{error}</p>}
    </>
  );
};
export default CustomSelect;
