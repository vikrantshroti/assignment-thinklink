import { useState } from "react";
import dashboard from "../../../assets/svg/dashboard.svg";
import inventory from "../../../assets/svg/inventory.svg";
import orders from "../../../assets/svg/orders.svg";
import customers from "../../../assets/svg/customers.svg";
import reports from "../../../assets/svg/reports.svg";
import settings from "../../../assets/svg/settings.svg";
import "./styles.css";
export default function SideBar() {
  const [itemSelected, setItemSelected] = useState("dashboard");
  return (
    <div className="sidebar">
      <div
        className={`sidebar-items ${
          itemSelected === "dashboard" ? "sidebar-items-active" : ""
        }`}
        onClick={() => setItemSelected("dashboard")}
      >
        <img alt="dashboard" src={dashboard} height={20} width={20} />
        <span>Dashboard</span>
      </div>
      <div
        className={`sidebar-items ${
          itemSelected === "inventory" ? "sidebar-items-active" : ""
        }`}
        onClick={() => setItemSelected("inventory")}
      >
        <img alt="inventory" src={inventory} height={20} width={20} />
        <span>Inventory</span>
      </div>
      <div
        className={`sidebar-items ${
          itemSelected === "orders" ? "sidebar-items-active" : ""
        }`}
        onClick={() => setItemSelected("orders")}
      >
        <img alt="orders" src={orders} height={20} width={20} />
        <span>Orders</span>
      </div>
      <div
        className={`sidebar-items ${
          itemSelected === "customers" ? "sidebar-items-active" : ""
        }`}
        onClick={() => setItemSelected("customers")}
      >
        <img alt="customers" src={customers} height={20} width={20} />
        <span>Customers</span>
      </div>
      <div
        className={`sidebar-items ${
          itemSelected === "reports" ? "sidebar-items-active" : ""
        }`}
        onClick={() => setItemSelected("reports")}
      >
        <img alt="reports" src={reports} height={20} width={20} />
        <span>Reports</span>
      </div>
      <div
        className={`sidebar-items ${
          itemSelected === "settings" ? "sidebar-items-active" : ""
        }`}
        onClick={() => setItemSelected("settings")}
      >
        <img alt="settings" src={settings} height={20} width={20} />
        <span>Settings</span>
      </div>
    </div>
  );
}
