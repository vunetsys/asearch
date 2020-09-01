import React, { useState, useEffect } from "react";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";
import DeleteForm from "./DeleteForm";
import FetchPapers from "./FetchPapers";
import LoadingSpinner from "./LoadingSpinner";
import { useHttpClient } from "../http-hook.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Collapse, Form } from "react-bootstrap";

const LandingScreen = () => {
  const { isAuthenticated } = useAuth0();
  const [open, setOpen] = useState("");
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [LoadedConferences, setLoadedConferences] = useState();

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/conferences"
        );
        setLoadedConferences(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchConferences();
  }, [sendRequest]);

  return (
    isAuthenticated && (
      <React.Fragment>
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {console.log(LoadedConferences)}
        {!isLoading && LoadedConferences && (
          <>
            <div
              class="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <Button
                  variant="dark"
                  onClick={() => setOpen("1")}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  Add Conference
                </Button>
                <Button
                  variant="dark"
                  onClick={() => setOpen("2")}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  Update Conference
                </Button>
                <Button
                  variant="dark"
                  onClick={() => setOpen("3")}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  Delete Conference
                </Button>
                <Button
                  variant="dark"
                  onClick={() => setOpen("5")}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  Fetch Papers
                </Button>
                <Button
                  variant="danger"
                  onClick={() => setOpen("4")}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  RESET DATABASE
                </Button>
              </div>
            </div>
            <Collapse in={open === "1"}>
              <div id="example-collapse-text">
                <div className="card card-body">
                  <AddForm />
                  <Button variant="light" onClick={() => setOpen("0")}>
                    Cancel
                  </Button>
                </div>
              </div>
            </Collapse>
            <Collapse in={open === "2"}>
              <div id="example-collapse-text">
                <div className="card card-body">
                  <UpdateForm items={LoadedConferences}></UpdateForm>
                  <Button variant="light" onClick={() => setOpen("0")}>
                    Cancel
                  </Button>
                </div>
              </div>
            </Collapse>
            <Collapse in={open === "3"}>
              <div id="example-collapse-text">
                <div className="card card-body">
                  <DeleteForm items={LoadedConferences} />
                  <Button variant="light" onClick={() => setOpen("0")}>
                    Cancel
                  </Button>
                </div>
              </div>
            </Collapse>
            <Collapse in={open === "4"}>
              <div id="example-collapse-text">
                <div className="card card-body">
                  <Form>
                    <Form.Group id="formGridCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I know the consequences from resetting the database and know that this process can take a few hours and will make asearch unavailable for some time."
                        required
                      />
                    </Form.Group>
                    <Button variant="dark" onClick={() => setOpen("0")}>
                      Reset Database
                    </Button>
                    <Button variant="light" onClick={() => setOpen("0")}>
                      Cancel
                    </Button>
                  </Form>
                </div>
              </div>
            </Collapse>
            <Collapse in={open === "5"}>
              <div id="example-collapse-text">
                <div className="card card-body">
                  <FetchPapers items={LoadedConferences}></FetchPapers>
                </div>
              </div>
            </Collapse>
          </>
        )}
      </React.Fragment>
    )
  );
};

export default LandingScreen;
