import { useState } from "react";

// Test data - Do not modify
const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true },
  { id: 2, name: "Jeans", price: 50, onSale: false },
  { id: 3, name: "Socks", price: 5, onSale: true },
  { id: 4, name: "Hat", price: 15, onSale: false },
  { id: 5, name: "Shoes", price: 65, onSale: true },
];

function App() {
  // Your code here
  const [filterItem, setFilterItem] = useState(items);
  const [showAllItems, setShowAllItems] = useState(true);

  const handleFilter = () => {
    if (showAllItems) {
      const filtered = items.filter((item) => item.onSale === true);
      setFilterItem(filtered);
    } else {
      setFilterItem(items);
    }
    setShowAllItems(!showAllItems);
  };
  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {/* Your JSX here */}
      <button className="btn btn-primary my-3" onClick={handleFilter}>
        {showAllItems ? "Sale Items Only" : "All Items"}
      </button>

      {filterItem.map((item) => (
        <ul className="list-group">
          <li className="list-group-item my-2  d-flex justify-content-between align-items-center">
            <span>
              {item.name}
              {item.onSale && (
                <span className="bg-danger text-white rounded p-1  ms-2">
                  On Sale!
                </span>
              )}
            </span>
            <span className="">${item.price}</span>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
