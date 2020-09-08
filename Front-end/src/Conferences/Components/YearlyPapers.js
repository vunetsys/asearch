import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../Shared/Hooks/http-hook.js";

import LoadingSpinner from "../../Shared/Components/UIelements/LoadingSpinner.js";
import ErrorHandler from "../../Shared/Components/UIelements/ErrorModal";
import SearchResults from "../../SearchPage/Components/SearchResults";

const YearlyPapers = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [LoadedResults, setLoadedResults] = useState([]);

  useEffect(() => {
    const fetchConferences = async () => {
      var year = props.year;
      var conference = props.conference;
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/searchbe/papers/market value`
        );
        setLoadedResults(responseData);
      } catch (err) {}
    };
    fetchConferences();
  }, [sendRequest]);

  return (
      <>
      <ErrorHandler error={error} onClear={clearError} />
      {isLoading && 
        <div className="center">
          <LoadingSpinner />
        </div>
      }
      {console.log(LoadedResults)}
      {!isLoading && LoadedResults && (
        <SearchResults items={LoadedResults} />
      )}
      </>
  )
};

export default YearlyPapers;
