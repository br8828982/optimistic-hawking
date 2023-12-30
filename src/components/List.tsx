import { useState } from "react";
import { ListItem } from "./ListItem";
import { ListItemType } from "./Interfaces";
import { AddItem } from "./AddItem";

const List = () => {
  const [items, setItems] = useState<ListItemType[]>([]);

  const addItemToList = () => {
    const newItem: ListItemType = {
      id: new Date().getTime().toString(),
      label: `Item ${items.length + 1}`,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleRemove = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>List Component</h2>
      <AddItem onAdd={addItemToList} />
      <h2>List Component</h2>
      <ul>
        {items.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            label={item.label}
            onRemove={handleRemove}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
