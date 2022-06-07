import OverviewComponent from "../../molecules/OverviewComponent";
import SalesDetailComponent from "../../molecules/SalesDetailComponent";
import InventoryComponent from "../../molecules/InventoryComponent";

export default function Content() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <OverviewComponent />
      <SalesDetailComponent />
      <InventoryComponent />
    </div>
  );
}
