import React from "react";
import SearchHandler from "../Components/SearchHandler";
import MainTilte from "../Components/MainTitle";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <MainTilte />
        <SearchHandler />
      </div>
    );
  }
}

export default HomePage;
