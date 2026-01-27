import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = React.useState(initialValue);
  const [loading, setloading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
          setItems(parsedItems);
        } else {
          parsedItems = JSON.parse(localStorageItems);
          setItems(parsedItems);
        }
        setloading(false);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    }, 2000);
  }, []);

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };
  return { items, loading, error, saveItems };
}

export { useLocalStorage };


// const defaultTodos = [
//   { text: "Mi primera tarea", completed: true },
//   { text: "Comer", completed: false },
//   { text: "Dormir", completed: true },
//   { text: "Codear", completed: false },
//   { text: "Repetir", completed: true },
//   { text: "Hacer ejercicio", completed: false },
//   { text: "Leer documentación", completed: true },
//   { text: "Practicar React", completed: false },
//   { text: "Revisar commits", completed: true },
//   { text: "Descansar la vista", completed: false },
// ];
// localStorage.setItem("TODOS_V1",JSON.stringify(defaultTodos));
// localStorage.setItem("TODOS_V1",defaultTodos);