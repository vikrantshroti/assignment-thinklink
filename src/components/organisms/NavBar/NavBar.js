import bell from "../../../assets/svg/bell.svg";
import avatar from "../../../assets/svg/avatar.svg";
import down from "../../../assets/svg/down.svg";
import "./styles.css";

export default function NavBar() {
  return (
    <div className="nb-container">
      <div className="nb-title-container">
        <span className="nb-title">C O R K O W L</span>
      </div>
      <div className="nb-input-container">
        <input
          className="nb-input"
          placeholder="Search wines, customers here..."
        />
      </div>
      <div className="nb-action-container">
        <div className="nb-action-sub-container">
          <img className="nb-img-bell" src={bell} alt="img-bell" />
          <span className="nb-text">Nicholas D.</span>
          <img className="nb-img-profile" src={avatar} alt="img-profile" />
          <img className="nb-img-arrow-down" src={down} alt="img-arrow-down" />
        </div>
      </div>
    </div>
  );
}
