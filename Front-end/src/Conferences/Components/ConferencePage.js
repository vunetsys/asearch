import React from "react";
import Metadata from "./Metadata";

const ConferencePage = (props) => {
  console.log(props);
  return (
    <div>
      {props.items.map((conference) => (
        <Metadata
          key={conference._id}
          id={conference._id}
          name={conference.fullname}
          acronym={conference.acronym}
          location={conference.location}
          area={conference.area}
          subarea={conference.subarea}
          url={conference.url}
          description={conference.description}
          papers={conference.papers}
        />
      ))}
    </div>
  );
};

export default ConferencePage;
