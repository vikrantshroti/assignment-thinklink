import "./styles.css";

export default function CardComponent({ title, text, img, style }) {
  return (
    <div className={`cc-main-container ${style}`}>
      <div className="cc-title-text-container">
        <span>{title}</span>
        <span>{text}</span>
      </div>
      <div className="cc-img-container">
        <img src={img} alt="card-icon" height={20} width={20} />
      </div>
    </div>
  );
}
