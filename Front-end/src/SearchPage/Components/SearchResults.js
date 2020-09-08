import React from "react";
import "./SearchResults.css";
import PaperItem from "./PaperItem.js";
import Not_Found from "../../assets/images/undraw_Taken_if77.svg";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

const SearchResults = (props) => {
  console.log(props.items);
  
  if (props.items.length === 0) {
    console.log("No Papers");
    
    if(props.type === undefined) {
      return (
        <div className="not_found">
          <img src={Not_Found} alt="404" width="300" height="auto" />
          <br></br>
          <p className="pBody">Could not find any relevant papers..</p>
        </div>
      );
    }
    else {
      return (
        <div className="not_found">
          <br></br>
          <p className="pBody">Could not find any relevant papers..</p>
        </div>
      );
    }
    
  }

  return (
    <Fade bottom>
      <Grid
        container
        direction="column-reverse"
        justify="center"
        alignItems="center"
      >
        {props.items.map((paper) => (
          <PaperItem
            id={paper._id}
            key={paper._id}
            title={paper.title}
            author={paper.author}
            abstract={paper.abstract}
            publication_date={paper.publication_date}
            author_keywords={paper.author_keywords}
            doi={paper.doi}
            proceeding={paper.proceeding}
          />
        ))}
      </Grid>
    </Fade>
  );
};

export default SearchResults;
