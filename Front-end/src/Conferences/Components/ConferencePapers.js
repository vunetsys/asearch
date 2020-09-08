import React from "react";
import Grid from "@material-ui/core/Grid";
import PaperItem from "../../SearchPage/Components/PaperItem";
import Fade from "react-reveal/Fade";

export const ConferencePapers = (props) => {
  if (props.items.length === 0) {
    console.log("No Papers");

    return (
      <div className="not_found">
        <br></br>
        <p className="pBody">Could not find any relevant papers..</p>
      </div>
    );
  }

  return (
    <div>
      <Fade left>
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
    </div>
  );
};

export default ConferencePapers;
