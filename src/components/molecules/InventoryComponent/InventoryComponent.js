import { useRef, useState } from "react";
import { slideUp, slideDown } from "../../../assets/animation";
import { data } from "../../../assets/data";
import wine from "../../../assets/png/wine.png";
import edit from "../../../assets/svg/edit.svg";
import del from "../../../assets/svg/del.svg";
import "./styles.css";

export default function InventoryComponent() {
  return (
    <div>
      <span style={{ marginLeft: 20, fontSize: 16, fontWeight: 700 }}>
        Inventory
      </span>
      <main>
        <div className="table-container">
          <div className="uk-overflow-auto">
            <table
              className="uk-table uk-table-hover uk-table-middle uk-table-divider"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th className="uk-table-shrink" />
                  <th className="uk-table-shrink" />
                  <th className="uk-table-shrink">Product</th>
                  <th></th>
                  <th
                    style={{ fontSize: 12, fontWeight: 700, color: "#485572" }}
                  >
                    Rating
                  </th>
                  <th
                    style={{ fontSize: 12, fontWeight: 700, color: "#485572" }}
                  >
                    Vintage
                  </th>
                  <th
                    style={{ fontSize: 12, fontWeight: 700, color: "#485572" }}
                  >
                    Qty
                  </th>
                  <th
                    style={{ fontSize: 12, fontWeight: 700, color: "#485572" }}
                  >
                    Volume
                  </th>
                  <th
                    style={{ fontSize: 12, fontWeight: 700, color: "#485572" }}
                  >
                    Cost
                  </th>
                  <th
                    style={{ fontSize: 12, fontWeight: 700, color: "#485572" }}
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.results.map((item, index) => {
                  return (
                    <UserTableRow key={index} index={index + 1} item={item} />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export function UserTableRow({ key, index, item }) {
  const refExpanderBody = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpander = (e) => {
    if (e.target.type === "checkbox") return;

    if (!isExpanded) {
      setIsExpanded(true);
      if (refExpanderBody.current) {
        slideDown(refExpanderBody.current);
      }
    } else {
      slideUp(refExpanderBody.current, {
        onComplete: () => {
          setIsExpanded(false);
        },
      });
    }
  };

  return [
    <tr key="main" onClick={toggleExpander}>
      <td>
        <input className="uk-checkbox" type="checkbox" />
      </td>
      <td className="uk-text-nowrap"></td>
      <td>
        <img
          className="uk-preserve-width uk-border-circle"
          src={wine}
          width={48}
          alt="avatar"
        />
      </td>
      <td style={{ fontSize: 16, fontWeight: 600, color: "#262730" }}>
        {item.name}
        <br />
        <small style={{ fontSize: 14, fontWeight: 400, color: "#8C8CA1" }}>
          {item.region}
        </small>
      </td>
      <td
        style={{
          backgroundColor: "#F4F7FF",
          borderRadius: 4,
          fontSize: 14,
          fontWeight: 600,
          color: "#485572",
        }}
      >
        {item.rating}
      </td>
      <td style={{ fontSize: 14, fontWeight: 600, color: "#8C8CA1" }}>
        {item.vintage}
      </td>
      <td style={{ fontSize: 14, fontWeight: 600, color: "#8C8CA1" }}>
        {item.qty}
      </td>
      <td style={{ fontSize: 14, fontWeight: 600, color: "#8C8CA1" }}>
        {item.volume}
      </td>
      <td style={{ fontSize: 14, fontWeight: 600, color: "#8C8CA1" }}>
        {item.cost}
      </td>
      <td style={{ fontSize: 14, fontWeight: 600, color: "#8C8CA1" }}>
        {" "}
        {item.price}
      </td>
    </tr>,
    isExpanded && (
      <tr className="expandable" key="tr-expander">
        <td className="uk-background-muted" colSpan={12}>
          <div
            ref={refExpanderBody}
            style={{ display: "flex", flexDirection: "column", padding: 20 }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{ fontSize: 14, fontWeight: 600, color: "#262730" }}
                >
                  {item.fullName}
                </span>
                <span
                  style={{ fontSize: 14, fontWeight: 600, color: "#262730" }}
                >
                  Region: {item.region}
                </span>
              </div>
              <div
                style={{
                  width: "20%",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#262730",
                }}
              >
                <span>Vintage: {item.vintage}</span>
              </div>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <span
                  style={{
                    color: "#EF4859",
                    textDecorationLine: "underline",
                    fontSize: 14,
                    fontWeight: 700,
                    marginRight: 10,
                  }}
                >
                  View wine
                </span>
                <img
                  alt="edit"
                  src={edit}
                  width={12}
                  height={12}
                  style={{ marginRight: 10 }}
                ></img>
                <img
                  alt="delete"
                  src={del}
                  width={12}
                  height={12}
                  style={{ marginRight: 10 }}
                ></img>
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
            >
              <div
                style={{
                  width: "50% ",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{ fontSize: 12, fontWeight: 700, color: "#8C8CA1" }}
                >
                  RATING
                </span>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: 20,
                      marginTop: 20,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#262730",
                      }}
                    >
                      {item.ratingTitle1}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#262730",
                        borderRadius: 4,
                      }}
                    >
                      {item.ratingText1}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: 20,
                      marginTop: 20,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#262730",
                      }}
                    >
                      {item.ratingTitle2}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#262730",
                        borderRadius: 4,
                      }}
                    >
                      {item.ratingText2}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: 20,
                      marginTop: 20,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#262730",
                      }}
                    >
                      {item.ratingTitle3}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#262730",
                        borderRadius: 4,
                      }}
                    >
                      {item.ratingText3}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: 20,
                    marginTop: 20,
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#262730",
                    }}
                  >
                    {item.ratingTitle4}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#262730",
                      borderRadius: 4,
                    }}
                  >
                    {item.ratingText4}
                  </span>
                </div>
              </div>
              <div style={{ width: "50%" }}>
                <span
                  style={{ fontSize: 12, fontWeight: 700, color: "#8C8CA1" }}
                >
                  STOCK
                </span>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 20,
                      marginRight: 40,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#262730",
                      }}
                    >
                      {item.stockTitle1}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#811434",
                      }}
                    >
                      {item.stockText1}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: 40,
                      marginTop: 20,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#262730",
                      }}
                    >
                      {item.stockTitle2}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#811434",
                      }}
                    >
                      {item.stockText2}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    ),
  ];
}
