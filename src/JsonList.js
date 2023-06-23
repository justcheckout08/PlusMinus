import React, { useState, useEffect } from "react";

const JsonList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  const renderItems = () => {
    return items.map((item) => (
      <li key={item.id}>{item.title}</li>
    ));
  };

  return (
    <div>
        {renderItems()}
    </div>
  );
};

export default JsonList;
    
    
    