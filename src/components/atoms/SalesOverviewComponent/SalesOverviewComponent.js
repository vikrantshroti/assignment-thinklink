import refresh from "../../../assets/svg/refresh.svg";
import down_black from "../../../assets/svg/down_black.svg";

export default function SalesOverviewComponent() {
  return (
    <>
      <span style={{ fontSize: "16px", lineHeight: "24px" }}>Sales detail</span>
      <div
        style={{
          border: "1px solid lightgrey",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          padding: 15,
          marginTop: 10,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "60%" }}>
          <span style={{ fontSize: 16 }}>Total Sales Overview</span>
          <span style={{ fontSize: 12, color: "grey" }}>7-13 Aug, 202</span>
        </div>
        <div style={{ width: "20%" }}>
          <img
            alt="img-refresh"
            src={refresh}
            height={12}
            width={12}
            style={{ marginRight: 5 }}
          />
          <span>Refresh metrics</span>
        </div>
        <div style={{ width: "20%" }}>
          <span>Filter by | </span>
          <span style={{ fontWeight: "bold" }}>This week</span>
          <img
            alt="img-refresh"
            src={down_black}
            height={12}
            width={12}
            style={{ marginLeft: 5 }}
          />
        </div>
      </div>
    </>
  );
}
