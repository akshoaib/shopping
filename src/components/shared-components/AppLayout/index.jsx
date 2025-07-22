import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import CustomButton from "../custom-button";
import SideDrawer from "../SideDrawer";
import AddCategoryForm from "../../category/AddCategoryForm";
import { useDispatch } from "react-redux";
import { setLoggedinUser, setToken } from "@/reducers/authSlice";
import { persistor } from "@/store";
const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const AppLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await persistor.purge();
    dispatch(setLoggedinUser(null));
    dispatch(setToken(null));
    navigate("/");
  };

  // const [showSideDrawer, setShowSideDrawer] = useState(false);

  const items = [
    {
      key: "/",
      icon: <MdDashboardCustomize size={20} />,
      label: "Dashboard",
      onClick: ({ key }) => navigate(key),
    },
    {
      key: "/orders",
      icon: <FaShoppingCart size={20} />,
      label: "Orders",
      onClick: ({ key }) => {
        navigate(key);
      },
    },
    {
      key: "/reports",
      icon: <TbReportSearch size={20} />,
      label: "Reports",
      onClick: ({ key }) => {
        navigate(key);
      },
    },
  ];
  return (
    <Layout style={{ minWidth: 300 }} hasSider>
      <Sider breakpoint="lg" style={siderStyle} width={250} collapsible>
        <div className="demo-logo-vertical" />
        <div>My app</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "20px",
            background: colorBgContainer,
          }}
        >
          <CustomButton title="Logout" handleClick={handleLogout} />
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          WardrobeWave ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
