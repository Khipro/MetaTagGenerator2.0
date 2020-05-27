import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Form from "./FormVersion2Working";
//import Button from '@material-ui/core/Button';



class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} />
        {/*
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>*/}
      </div>
    );
  }
}

export default App;