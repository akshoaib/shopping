import useAuth from "@/hooks/useAuth";
import useOrder from "@/hooks/useOrder";
import { DatePicker, Space } from "antd";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
const { RangePicker } = DatePicker;
const Reports = () => {
  const { getOrderStatusReports } = useOrder();
  const { getUserReports } = useAuth();

  const [userReports, setUserReports] = useState([]);
  const [orderReports, setOrderReports] = useState([]);

  const handleOrderDateChange = (dates, dateStrings) => {
    getOrderStatusReports(dateStrings[0], dateStrings[1], (resp) => {
      setOrderReports(resp);
    });
  };

  const handleUserRegisterDateChange = (dates, dateStrings) => {
    getUserReports(dateStrings[0], dateStrings[1], (resp) => {
      setUserReports(resp);
    });
  };

  return (
    <div>
      <p>Order Reports</p>
      <RangePicker onChange={handleOrderDateChange} />
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <BarChart data={orderReports}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p>Registered Users Reports</p>
      <RangePicker onChange={handleUserRegisterDateChange} />
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <BarChart data={userReports}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reports;
