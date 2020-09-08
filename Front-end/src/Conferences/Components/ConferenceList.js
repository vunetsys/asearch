import React from "react";
import "./ConferenceList.css";
import ConferenceItem from "./ConferenceItem";
import Not_Found from "../../assets/images/undraw_Taken_if77.svg";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

const ConferenceList = (props) => {

  if (props.items.length > 0 && props.search === true ) {
    console.log("search");

    return (
      <Fade bottom>
        <Grid
          container
          direction="column-reverse"
          justify="center"
          alignItems="center"
        >
          {props.items.map((conference) => (
            <ConferenceItem
              key={conference['parent']['0']['_id']}
              id={conference['parent']['0']['_id']}
              acronym={conference['parent']['0']['acronym']}
              name={conference['parent']['0']['fullname']}
              area={conference['parent']['0']['area']}
              subarea={conference['parent']['0']['subarea']}
            />
          ))}
        </Grid>
      </Fade>
    );
  }

  if (props.items.length === 0) {
    console.log("No Conferences");

    return (
      <div className="not_found">
        <img src={Not_Found} alt="404" width="300" height="auto" />
        <br></br>
        <p className="pBody">Could not find any relevant conferences..</p>
      </div>
    );
  }

  return (
    <Fade bottom>
      <Grid
        container
        direction="column-reverse"
        justify="center"
        alignItems="center"
        className="mt-5 pt-2"
      >
        {props.items.map((conference) => (
          <ConferenceItem
            key={conference._id}
            id={conference._id}
            acronym={conference.acronym}
            name={conference.fullname}
            area={conference.area}
            subarea={conference.subarea}
          />
        ))}
      </Grid>
    </Fade>
  );
};

export default ConferenceList;
