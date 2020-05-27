import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import FormEn from "./FormVersion2Working";
//import Button from '@material-ui/core/Button';
import FormFr from "./FormFrench";
import Button from '@material-ui/core/Button';


class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      fields: {},
      language: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  handleChange() {
    this.setState({ language: "english" })
    localStorage.setItem("app_language", this.state.language);
    //return (<App app_language={this.state.language} />)
  }
  handleChange2() {
    this.setState({ language: "french" })
    localStorage.setItem("app_language", this.state.language);
  }

  
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
        <h1>Meta tag generator</h1>
        <hr></hr>
        <h2>Required fields are marked with an asterisk (*)</h2><br />
        <div>
        <h3>Language:*</h3></div>
        <Button variant="contained" color="primary" component="span"  onClick={this.handleChange} >English </Button>&nbsp;
        <Button variant="contained" color="primary" component="span"  onClick={this.handleChange2}>Français</Button>
              
        <div>
        {
          (() => {
            if (this.handleChange)
              return <div><FormEn onChange={fields => this.onChange(fields)} /></div>
            if (this.handleChange2)
              return <div><FormFr onChange={fields => this.onChange(fields)} /></div>
              })
        }
      </div>
        {/*
        <FormFr onChange={fields => this.onChange(fields)} />
        
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>*/}
      </div>
    );
  }
}

export default App;