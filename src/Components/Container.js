// Dependencies
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

// Style
import "./style.css";

// Components
import Controllers from "./Controllers";
import Card from "./Card";

// Hooks
import { useRequest } from "./hooks/useRequest";

const Container = () => {
  const [items, getItems] = useRequest();
  const [currValue, setCurrVal] = useState("1");

  useEffect(() => {
    getItems(0, true);
  });

  const handleChange = (event) => {
    setCurrVal(event.target.value);
    getItems(+event.target.value, false);
  };

  return (
    <Box>
      <Controllers
        selectValueProp={currValue}
        handleChange={(e) => handleChange(e)}
      />
      <Box className="cards-container">
        {items && items.length ? (
          items.map((e) => (
            <Card
              key={e.title}
              id={e.id}
              description={e.title}
              isClosed={e.isClosed}
            />
          ))
        ) : (
          <h1>Not elements</h1>
        )}
      </Box>
    </Box>
  );
};

export default Container;
