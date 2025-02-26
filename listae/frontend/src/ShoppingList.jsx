import { useState, useEffect } from "react";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const addItem = () => {
    fetch("http://127.0.0.1:5000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, quantity, price }),
    })
      .then((res) => res.json())
      .then((item) => setItems([...items, item]));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">LISTA DE COMPRAS!</h1>
      <div className="mb-4">
        <input className="border p-2 w-64" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="border p-2 w-16" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={addItem}>Add</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="p-2 border-b flex justify-between">
            {item.name} x{item.quantity} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
