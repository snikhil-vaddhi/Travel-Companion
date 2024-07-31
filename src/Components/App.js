import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackagingList } from "./PackagingList";
import { Stats } from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    // destrcuturing
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleResetDefaults() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleItems={handleItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onResetDefaults={handleResetDefaults}
      />
      <Stats items={items} />
    </div>
  );
}
