import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConferencePage from "../Components/ConferencePage";
import Loading from "../../Shared/Components/UIelements/LoadingSpinner.js";
import ErrorHandler from "../../Shared/Components/UIelements/ErrorModal";
import { useHttpClient } from "../../Shared/Hooks/http-hook.js";

const ConferenceMetadata = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [LoadedResults, setLoadedResults] = useState();
  const name = useParams().acronym;

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/conferencesbe/metadata/${name}`
        );
        setLoadedResults(responseData);
      } catch (err) {}
    };
    fetchResults();
  }, [sendRequest, name]);

  return (
    <React.Fragment>
      <ErrorHandler error={error} onClear={clearError}></ErrorHandler>
      {isLoading && (
        <div className="Animation">
          <Loading />
        </div>
      )}
      {console.log(LoadedResults)}
      {!isLoading && LoadedResults && (
        <ConferencePage items={LoadedResults} />
      )}
    </React.Fragment>
  );
};

export default ConferenceMetadata;
