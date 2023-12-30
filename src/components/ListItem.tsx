import { ListItemProps } from "./Interfaces";

const ListItem = ({ id, label, onRemove }: ListItemProps) => {
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <li>
      <span>{label}</span>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export { ListItem };
