import { AddItemProps } from "./Interfaces";

const AddItem = ({ onAdd }: AddItemProps) => {
  return <button onClick={onAdd}>Add Item</button>;
};

export { AddItem };
