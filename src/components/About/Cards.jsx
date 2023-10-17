const Cards = ({ number, image, heading, para }) => {
  return (
    <>
      <div className="card">
        <h2 className="card--number">{number}</h2>
        <div className="card__content">
          <img src={image} alt="folder" className="card__image" />
          <h3 className="card__heading">{heading}</h3>
          <p className="card__para">{para}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
