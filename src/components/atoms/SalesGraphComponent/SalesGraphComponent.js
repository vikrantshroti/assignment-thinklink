import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import growth from "../../../assets/svg/growth.svg";

export default function SalesGraphComponent() {
  const pdata = [
    {
      day: "0",
      revenue: 0,
    },
    {
      day: "MON",
      revenue: 5000,
    },
    {
      day: "TUE",
      revenue: 7000,
    },
    {
      day: "WED",
      revenue: 5000,
    },
    {
      day: "THU",
      revenue: 8000,
    },
    {
      day: "FRI",
      revenue: 7000,
    },
    {
      day: "SAT",
      revenue: 10000,
    },
    {
      day: "SUN",
      revenue: 50000,
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 48 }}>$74,729.00</span>
            <span style={{ fontSize: 16, color: "#2FCA72" }}>
              <img alt="growth" src={growth} height={12} width={12} />
              +21% from last week
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              paddingRight: 50,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 600 }}>
              <img alt="growth" src={growth} height={12} width={12} /> Highest
              revenue since 2 weeks ago
            </span>
          </div>
        </div>
        <div
          style={{
            width: "60vw",
            height: "40vh",
            marginTop: 20,
            marginRight: 10,
          }}
        >
          <ResponsiveContainer aspect={3}>
            <LineChart data={pdata}>
              <CartesianGrid />
              <XAxis dataKey="day" interval={"preserveStartEnd"} />
              <YAxis></YAxis>
              <Tooltip />
              <Line dataKey="revenue" stroke="black" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#8C8CA1",
          }}
        >
          Total Profit
        </span>
        <span
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#811434",
            marginTop: 16,
          }}
        >
          $12,545.00
        </span>
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#2FCA72",
            marginTop: 8,
          }}
        >
          +23% from last week
        </span>
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#8C8CA1",
            marginTop: 40,
          }}
        >
          Total products sold
        </span>
        <span
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#262730",
            marginTop: 8,
          }}
        >
          329
        </span>
      </div>
    </div>
  );
}
