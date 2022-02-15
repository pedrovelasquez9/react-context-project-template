const ListItem = ({ value }) => {
  const { url, name } = value;
  return (
    <li>
      {" "}
      <a href={url}>{name}</a>
    </li>
  );
};

export default ListItem;
