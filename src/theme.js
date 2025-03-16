import { theme } from "antd";
const themes = {
  colorPrimary: "#000000",
  components: {
    Button: {
      colorPrimary: "#ffffff",
      colorBorder: "#000000",
      colorText: "#ffffff",
      colorHover: "#000000",
      defaultHoverBorderColor: "#000000",
      defaultHoverColor: "#ffffff",
      colorBgContainer: "#000000",
    },
    Input: {
      colorPrimary: "#000000",
      colorBorder: "#000000",
      borderWidth: "1px",
      hoverWidth: "1px",
      algorithm: theme.darkAlgorithm,
    },
    Modal: {
      colorBgContainer: "#000000",
    },
    Spin: {},
  },
};

export default themes;
