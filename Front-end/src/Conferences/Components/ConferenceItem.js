import React from "react";
import "./ConferenceItem.css";
import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";

const ConferenceItem = (props) => {
  console.log(props);
  return (
    <Card className={"center pBody"} style={{ width: "80%" }}>
      <Card.Body>
        <Card.Title><NavLink to={`/conferences/${props.acronym}`}>{props.name}</NavLink></Card.Title>
        <div className="justify-content-center inline">
          <Card.Text>
          <p>  acronym : <b>{props.acronym}</b> | focus : <b> {props.area} - {props.subarea} </b>  </p>
          </Card.Text>
          <div className="position-right">
          <NavLink to={`/conferences/${props.acronym}`}> Go to Conference</NavLink>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ConferenceItem;
