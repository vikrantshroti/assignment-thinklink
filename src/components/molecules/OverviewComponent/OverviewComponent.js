import CardComponent from "../../atoms/CardComponent";
import order_open from "../../../assets/svg/order_open.svg";
import order_transit from "../../../assets/svg/order_transit.svg";
import order_fulfilled from "../../../assets/svg/order_fulfilled.svg";
import order_cancelled from "../../../assets/svg/order_cancelled.svg";
import add from "../../../assets/svg/add.svg";
import "./styles.css";

export default function OverviewComponent() {
  return (
    <div className="ov-main-container">
      <div className="ov-sub-container">
        <div className="ov-text-container">
          <span>Overview</span>
        </div>
        <div className="ov-btn-container">
          <button className="ov-btn">
            <img
              alt="add"
              src={add}
              height={12}
              width={12}
              style={{ marginRight: 5 }}
            />
            Add new wine
          </button>
        </div>
      </div>
      <div className="ov-cc-container">
        <CardComponent
          title={"Open orders"}
          text={"239"}
          img={order_open}
          // eslint-disable-next-line react/style-prop-object
          style={"cc-main-container-1"}
        />
        <CardComponent
          title={"Orders in transit"}
          text={"126"}
          img={order_transit}
          // eslint-disable-next-line react/style-prop-object
          style={"cc-main-container-2"}
        />
        <CardComponent
          title={"Fulfilled orders"}
          text={"1,254"}
          img={order_fulfilled}
          // eslint-disable-next-line react/style-prop-object
          style={"cc-main-container-3"}
        />
        <CardComponent
          title={"Cancelled orders"}
          text={"35"}
          img={order_cancelled}
          // eslint-disable-next-line react/style-prop-object
          style={"cc-main-container-4"}
        />
      </div>
    </div>
  );
}
