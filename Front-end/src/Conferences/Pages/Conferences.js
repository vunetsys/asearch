import React, { useEffect, useState } from "react";
import ConferenceList from "../Components/ConferenceList";
import LoadingSpinner from "../../Shared/Components/UIelements/LoadingSpinner.js";
import ErrorHandler from "../../Shared/Components/UIelements/ErrorModal";
import { useHttpClient }  from "../../Shared/Hooks/http-hook.js";
import { Button } from "@material-ui/core";

var fieldList = [
  "Artificial intelligence",
  "Systems",
  "Theory",
  "Interdisciplinary Areas",
];
const Conferences = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [chosenField, setField] = useState('');
  const [LoadedConferences, setLoadedConferences] = useState();

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const responseData = await sendRequest(`http://localhost:5000/conferencesbe/${chosenField}`);
        setLoadedConferences(responseData);
      } catch (err) {}
    };
    fetchConferences();
  }, [ sendRequest, chosenField ] );

  return (
    <React.Fragment>
      <ErrorHandler error={error} onClear={clearError} />
      {isLoading && 
        <div className="center">
          <LoadingSpinner />
        </div>
      }
      {console.log(LoadedConferences)}
      {!isLoading && LoadedConferences && (
      <>
        <div className="btn-group pt-5 pl-5 mt-5 ml-5" role="group" aria-label="First group">
          <h1 className="pDisplay pl-5 mx-auto underline-red">Fields:</h1>
        {fieldList.map((field) => (
          <Button
            variant="info"
            onClick={() => {
              setField(field);
            }}
          >
            {field}
          </Button>
        ))}
        <Button
            variant="dark"
            onClick={() => {
              setField('all');
            }}
          >
            ALL
          </Button>
      </div>
      <hr></hr>
        <ConferenceList items={LoadedConferences} />
        </>
      )}
    </React.Fragment>

  );
};

export default Conferences;
