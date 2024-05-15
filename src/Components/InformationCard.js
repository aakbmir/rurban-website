function InformationCard(props) {
  return (
    <div className="info-cards">
      <span className="info-card-ico">
        <img src={props.icon} alt="alttt" style={{ width: "64px" }} />
      </span>
      <p className="info-card-title">{props.title}</p>
      <p className="info-card-description">{props.description}</p>
    </div>
  );
}

export default InformationCard;
