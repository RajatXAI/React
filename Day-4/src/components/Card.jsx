import './Card.css'
function Card({ name, url }) {
  return (
    <div className="card">
      <img src={url} alt={name} />
      <div className="bottom">
        <h2>{name}</h2>
        </div>
    </div>
  );
}

export default Card