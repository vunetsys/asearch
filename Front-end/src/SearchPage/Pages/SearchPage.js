import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchResults from "../Components/SearchResults";
import ConferenceList from "../../Conferences/Components/ConferenceList";
import SearchBar from "../Components/SearchBar.js";
import Pagination from "../Components/Pagination";
import Loading from "../../Shared/Components/UIelements/LoadingSpinner.js";
import ErrorHandler from "../../Shared/Components/UIelements/ErrorModal";
import { useHttpClient } from "../../Shared/Hooks/http-hook.js";


const SearchPage = (props) => {
  console.log(props.toggle);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [LoadedResults, setLoadedResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paperPerPage] = useState(25);
  const [ConferenceToggleOn, setConferenceToggleOn] = useState(false)
  const query = useParams().query;
  const input_type = useParams().type;
  const start = new Date();
  

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if(input_type === "conferences") {
          setConferenceToggleOn(true);
          const responseData = await sendRequest(
            `http://localhost:5000/searchbe/conferences/${query}`
          );
          setLoadedResults(responseData);
        }
        else{
          const responseData = await sendRequest(
            `http://localhost:5000/searchbe/papers/${query}`
          );
          setLoadedResults(responseData);
        }
      } catch (err) {}
    };
    fetchResults();
  }, [sendRequest, input_type, query]);

  //Get current papers;
  const indexOfLastPaper = currentPage * paperPerPage;
  const indexOfFirstPaper = indexOfLastPaper - paperPerPage;
  const currentPapers = LoadedResults.slice(
    indexOfFirstPaper,
    indexOfLastPaper
  );
  //Change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <React.Fragment>
      <ErrorHandler error={error} onClear={clearError}></ErrorHandler>
      {isLoading && (
        <div className="Animation">
          <Loading />
        </div>
      )}
      {console.log(LoadedResults)}
      {!isLoading && currentPapers && !ConferenceToggleOn &&(
        <div className="center">
          <div className="container mt-5 pt-5">
            <SearchBar />
          </div>
          <h1 className="pCaption container center mt-5 ">
            About {LoadedResults.length} results ({new Date() - start} seconds)
          </h1>
          <SearchResults items={currentPapers} />
          <div className="container justify-content-center mt-5">
            <Pagination
              paperPerPage={paperPerPage}
              TotalPapers={LoadedResults.length}
              paginate={paginate}
            />
          </div>
        </div>
      )}
      {!isLoading && currentPapers && ConferenceToggleOn &&(
        <div className="center">
          <div className="container mt-5 pt-5">
            <SearchBar />
          </div>
          <h1 className="pCaption container center mt-5">
            About {LoadedResults.length} results ({new Date() - start} seconds)
          </h1>
          <ConferenceList items={currentPapers} search={true} />
          <div className="container justify-content-center mt-5">
            <Pagination
              paperPerPage={paperPerPage}
              TotalPapers={LoadedResults.length}
              paginate={paginate}
            />
          </div>
        </div>
      )

      }
    </React.Fragment>
  );
};

export default SearchPage;
