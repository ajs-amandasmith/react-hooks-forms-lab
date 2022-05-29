import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }



  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  }).filter((item) => {
    if (search === '') return true;
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
        // itemName={itemName} 
        onItemFormSubmit={onItemFormSubmit} 
        // itemCategory={itemCategory}
        // onItemNameChange={handleItemName}
        // onItemCategoryChange={handleItemCategory}
        // items={items}
      />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

// const itemsToDisplay = items.filter((item) => { your first filter if statement }).filter((item) => { your second filter if statement })