import React, { useState } from "react";
import "./PaperItem.css";
import { withRouter, NavLink } from "react-router-dom";
import { Card, Collapse } from "react-bootstrap";
import { Button, ButtonGroup } from '@material-ui/core/';

const PaperItem = (props) => {
  const [open, setOpen] = useState(false);
  
  let abstract;

  if (props.abstract !== undefined) {
    abstract = props.abstract;
  }else if(props.doi !== undefined) {
    abstract = "The abstract for this article is unavailable. Please try checking the link to the article for more information.";
  } else {
    abstract = "The abstract for this article is unavailable.";
  }

  return (
    <Card className={"center pBody"} style={{ width: "80%" }}>
      <Card.Body onClick={() => setOpen(!open)}>
        <Card.Title>
          <a
            href={`https://doi.org/${props.doi}`}
            style={{ marginBottom: "1rem" }}
          >
            {props.title}
          </a>
          <hr />
        </Card.Title>
        <div className="justify-content-center inline">
          <Card.Text>
            Written by : <b>{props.author}</b> | Published in :{" "}
              <b>{AdjustDate(props.publication_date)}</b> at : <NavLink to={`../../conferences/${props.proceeding}`}>{props.proceeding}</NavLink>
            <br />
            <p className="pCaption">{props.author_keywords}</p>
          </Card.Text>
          <div className="position-right">
            <Button onClick={() => setOpen(!open)}>
              More
            </Button>
          </div>

          <Collapse in={open}>
            <div id="example-collapse-text black">
              <hr></hr>
              <h2 className="pBody underline-red">
                <b>Abstract</b>:
              </h2>
              <br></br>
              <p>{abstract}</p>

              <div className="position-right">
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  color="light"
                >
                  <Button href={`https://doi.org/${props.doi}`} disabled={!props.doi}>Go to Article</Button>
                  <Button href={`http://localhost:3000/search/papers/${returnValid(props.author_keywords)}`} disabled={!props.author_keywords}>Find similar articles</Button>
                </ButtonGroup>
              </div>
            </div>
          </Collapse>
        </div>
      </Card.Body>
    </Card>
  );
};

function AdjustDate(date) {
  if (date === undefined) return "undefined";
  var newDate = "";

  for (var i = 0; i < 4; i++) {
    newDate = newDate + date[i];
  }

  return newDate;
}

function returnValid(Item) {
  if (Item === undefined) return Item;
  let x = Item.split(" | ");
  console.log(x);
  x = x.toString(" ");

  console.log(x);

  return x;
}

export default withRouter(PaperItem);
