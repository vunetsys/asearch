import React from "react";
import "./SearchHandler.css";
import Fade from "react-reveal/Fade";
import LinkButton from "../../Shared/Components/Navigation/LinkButton";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "../../Shared/Typography/typography.css";




class SearchHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    var query = this.state.value;
    console.log(query);
    return query.toString();
  }

 

  render() {
    return (
      <div className="form-group search-bar vertical-center mt-5 ">
        <div className="input-group search-bar">
          <Fade top>
            <TextField
              type="text"
              color="secondary"
              id="standard-basic" 
    
              fullWidth
              className="input_bar"
              value={this.state.value}
              onChange={this.handleChange}
              label="Search"
            />
            <span>
              <ButtonGroup
                color="dark"
                variant="text"
                className="button"
                aria-label="outlined secondary button group"
              >
                <LinkButton
                  type="submit"
                  value="Search"
                  color="dark"
                  to={`./search/papers/${this.state.value}`}
                >
                  Search papers
                </LinkButton>
                <LinkButton
                  type="submit"
                  value="Search"
                  color="dark"
                  to={`./search/conferences/${this.state.value}`}
                >
                  Search conferences
                </LinkButton>
              </ButtonGroup>
            </span>
          </Fade>
        </div>
      </div>
    );
  }
}

export default SearchHandler;
