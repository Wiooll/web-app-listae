import { useState, useEffect } from "react";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5173/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const addItem = () => {
    fetch("http://localhost:5173/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, quantity, price }),
    })
      .then((res) => res.json())
      .then((item) => setItems([...items, item]));
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <h1>SUAS LISTAS</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={addItem}>+</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={() => setItems([])}>Limpar Lista</button>
    </div>
  );
}

export default ShoppingList;
