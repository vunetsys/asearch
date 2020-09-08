import React from "react";
import "./SearchBar.css";
import Fade from "react-reveal/Fade";
import LinkButton from "../../Shared/Components/Navigation/LinkButton";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  handleSubmit(event) {
    var query = this.state.value;
    console.log(query);
    return query.toString();
  }

  render() {
    return (
      <div className="input-group mb-3">
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
              aria-label="outlined secondary button group"
            >
              <LinkButton
                type="submit"
                value="Search"
                color="dark"
                href={`../papers/${this.state.value}`}
              >
                Search papers
              </LinkButton>
              <LinkButton
                type="submit"
                value="Search"
                color="dark"
                href={`../conferences/${this.state.value}`}
              >
                Search conferences
              </LinkButton>
            </ButtonGroup>
          </span>
        </Fade>
      </div>
    );
  }
}

export default withRouter(SearchBar);
