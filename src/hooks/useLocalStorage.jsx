import React from "react";

function useLocalStorage(itemName, initialValue){
  const [items, setItems] = React.useState(initialValue);
  const [loading, setloading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() =>{
    const localStorageItems = localStorage.getItem(itemName);
    let parsedItems;

    if (!localStorageItems){
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItems = initialValue;
    } else {
      parsedItems = JSON.parse(localStorageItems);
    }
    return setItems(parsedItems);
  },[]);

  const saveItems = (newItems) =>{
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };
  return {items, loading, error, saveItems};
}

export { useLocalStorage }