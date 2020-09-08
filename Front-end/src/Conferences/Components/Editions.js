import React, { useState } from "react";
import YearlyPapers from "./YearlyPapers";
import { Button, Collapse } from "@material-ui/core";

const Editions = (props) => {
  const [open, setOpen] = useState("");
  return (
    <div>
      <Button
        variant="dark"
        onClick={() => setOpen(props.year)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {props.year}
      </Button>
      <Collapse in={open === props.year}>
        <Button
          variant="dark"
          onClick={() => setOpen("0")}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          close
        </Button>
        <div id=" container-fluid">
            <YearlyPapers conference={props.acronym} year={props.year}></YearlyPapers>
        </div>
      </Collapse>
    </div>
  );
};

export default Editions;
