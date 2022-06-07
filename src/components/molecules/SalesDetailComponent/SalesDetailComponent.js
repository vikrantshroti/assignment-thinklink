import SalesOverviewComponent from "../../atoms/SalesOverviewComponent";
import SalesGraphComponent from "../../atoms/SalesGraphComponent";

export default function SalesDetailComponent() {
  return (
    <div style={{ margin: 20 }}>
      <SalesOverviewComponent />
      <div
        style={{
          border: "1px solid lightgrey",
          borderTopWidth: 0,
          padding: 10,
        }}
      >
        <SalesGraphComponent />
      </div>
    </div>
  );
}
