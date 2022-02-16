import "./ListItem.css";
import pokeball from "../../assets/images/pokeball.png";

//TODO: fetch pokemon detail
const ListItem = ({ value }) => {
  console.log(value);
  const { url, name, sprites } = value;
  return (
    <li className="list-item">
      <img src={pokeball} className="pokeball-icon" />
      <a href={url}>{name}</a>
    </li>
  );
};

export default ListItem;
