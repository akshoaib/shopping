import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const CustomInput = ({
  handleChange,
  placeholder,
  touched,
  error,
  name,
  type = "text",
  onBlur,
  label,
  value,
  disabled = false,
}) => {
  return (
    <>
      {type === "text" ? (
        <>
          <label>{label}</label>
          <Input
            onChange={handleChange}
            name={name}
            placeholder={placeholder}
            onBlur={onBlur}
            className="my-2"
            value={value}
            disabled={disabled}
          />
        </>
      ) : (
        <>
          <label>{label}</label>
          <Input.Password
            onChange={handleChange}
            name={name}
            onBlur={onBlur}
            placeholder="input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            className="my-2"
          />
        </>
      )}
      {error && <p className={"error"}>{error}</p>}
    </>
  );
};

export default CustomInput;
