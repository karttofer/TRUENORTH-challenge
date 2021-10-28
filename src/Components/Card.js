import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import {
  Card,
  CardContent,
  ToggleButton,
  Typography,
  CardActions,
} from "@mui/material";

// Components
import ModalComponent from "./Modal";

// Hooks
import { useRequest } from "./hooks/useRequest";

const ActionAreaCard = ({ id, description, isClosed }) => {
  const [selected, setSelected] = useState(isClosed);
  const [items, getItems, closeTas] = useRequest();

  const closeTask = () => {
    closeTas(id);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Task #{id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography sx={{ m: 2 }} variant="body2" color="text.secondary">
          {selected
            ? `Great, you've close the task 😜`
            : "Do you wanna close this task?"}
        </Typography>
        <ToggleButton
          value="check"
          size="small"
          selected={selected}
          onClick={() => {
            setSelected(true);
            closeTask();
          }}
        >
          <CheckIcon />
        </ToggleButton>
      </CardActions>
      <ModalComponent id={id} modalDescription={description} />
    </Card>
  );
};
export default ActionAreaCard;
