// Dependencies
import { useState } from "react";

export const useRequest = () => {
  const [items, setItems] = useState([]);

  const getItems = (nItems, isSAvedData) => {
    fetch(
      `http://localhost:3001/tasks?quantity=${nItems}&savedData=${isSAvedData}`
    )
      .then((e) => e.json())
      .then((response) => {
        setItems(response);
      });
  };

  const closeTas = (taskId) => {
    fetch("http://localhost:3001/close", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskId }),
    });
  };

  return [items, getItems, closeTas];
};
