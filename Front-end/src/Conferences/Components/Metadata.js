import React, { useState , useEffect} from "react";
import "./Metadata.css";
import { Button } from "@material-ui/core";
import Fade from "react-reveal/Fade";

import { useHttpClient } from "../../Shared/Hooks/http-hook.js";

import LoadingSpinner from "../../Shared/Components/UIelements/LoadingSpinner.js";
import ErrorHandler from "../../Shared/Components/UIelements/ErrorModal";
import SearchResults from "../../SearchPage/Components/SearchResults";


const Metadata = (props) => {
  var year = ["2020", "2019", "2018", "2017", "2016"];
  const [ choosenYear, setyear] = useState('2020');
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [LoadedResults, setLoadedResults] = useState([]);

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/conferencesbe/${props.acronym}/${choosenYear}`
        );
        setLoadedResults(responseData);
      } catch (err) {}
    };
    fetchConferences();
  }, [sendRequest, choosenYear, props.acronym]);

  return (
    <div className="center conference_metadata">
      <Fade left>
        <h1 className="pTitle_main"> {props.name}</h1>
        <p className="pCaption">
          {props.location} | {props.area} | {props.subarea}
        </p>
      </Fade>
      <span>
        <div className="pCaption position-right">
          <Fade right>
            <Button
              href={props.url}
              disabled={!props.url}
              color="primary"
              target="_blank"
            >
              Go to the Conference website
            </Button>
          </Fade>
        </div>
      </span>

      <hr className="seperator"></hr>
      <h2 className="pTitle_secondary underline-red">About:</h2>
      <br></br>
      <Fade left>
        <p id="Loading" className="pBody">{props.description}</p>
      </Fade>
      <br />
      <h2 id="Loading" className="pTitle_secondary underline-red">Latest Papers: </h2>
      <hr />
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group mx-auto" role="group" aria-label="First group">
          {year.map((year) => (
            <Button
              variant="dark"
              onClick={() => {
                setyear(year);
              }}
              href="#Loading"
            >
              {year}
            </Button>
          ))}
          <Button
              variant="dark"
              onClick={() => {
                setyear('404');
              }}
              href="#Loading"
            >
              ...
            </Button>
        </div>
      </div>
      <div className="Papers mt-5 container-fluid">
        <>
          <ErrorHandler error={error} onClear={clearError} />
          {isLoading && (
            <div >
              <LoadingSpinner />
            </div>
          )}
          {console.log(LoadedResults)}
          {!isLoading && LoadedResults && (
            <SearchResults type="meta" items={LoadedResults} />
          )}
        </>
      </div>
    </div>
  );
};

export default Metadata;
