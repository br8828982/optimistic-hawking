export interface ListItemType {
  id: string;
  label: string;
}

export interface ListItemProps extends ListItemType {
  onRemove: (id: string) => void;
}

export interface AddItemProps {
  onAdd: () => void;
}
