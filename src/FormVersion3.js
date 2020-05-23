import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class Form extends React.Component {
  state = {
    Title: "",
    TitleError:"",
    Description: "",
    DescriptionError:"",
    Date_issued: "",
    DateError: "",
    Date_modified: "",
    Keyword: "",
    Keyword_uncontrolled: "",
    Url: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let TitleError="";
  
    if (!this.state.Title){
      TitleError = "Title cannot be blank";
    }



    if (TitleError){
      this.setState({TitleError});
      return false;
    }
    return true;
  };

  onSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        //Check For Error
        const err = this.validate();
        if (err){
            //clear form
            this.setState({
                Title: "",
                TitleError:"",
                Description: "",
                Date_issued: "",
                Date_modified: "",
                Keyword: "",
                Keyword_uncontrolled: "",
                Url: ""
        });
            this.props.onChange({
                Title: "",
                Description: "",
                Date_issued: "",
                Date_modified: "",
                Keyword: "",
                Keyword_uncontrolled: "",
                Url: ""  
        });
    }    
  };

  render() {
    return (
      <form>
        <div>
         <h3>Title:*</h3>
        </div>
        <input
          name="Title"
          placeholder="Title"
          value={this.state.Title}
          onChange={e => this.change(e)}
        />
        <div style={{ fontSize: 12, color: "red" }}>
            {this.state.TitleError}
        </div>
        <br />
        <div>
         <h3>Description:*</h3>
        </div>
        <input
          name="Description"
          placeholder="Description"
          value={this.state.Description}
          onChange={e => this.change(e)}
        />
        <br />
        <div>
         <h3>Date Issued:*</h3>
        </div>
        <input
          name="Date_issued"
          placeholder="Date Issued"
          value={this.state.Date_issued}
          onChange={e => this.change(e)}
        />
        <br />
        <div>
         <h3>Date Modified:*</h3>
        </div>
        <input
          name="Date_modified"
          placeholder="Date Modified"
          value={this.state.Date_modified}
          onChange={e => this.change(e)}
        />
        <br />
        <div>
         <h3>Keyword (Controlled)*</h3>
        </div>
        <input
          name="Keyword"
          placeholder="Keyword (Controlled)"
          value={this.state.Keyword}
          onChange={e => this.change(e)}
        />
        <br />
        <div>
         <h3>Keyword (Uncontrolled):*</h3>
        </div>
        <input
          name="Keyword_uncontrolled"
          placeholder="Keyword (Uncontrolled)"
          value={this.state.Keyword_uncontrolled}
          onChange={e => this.change(e)}
        />
        <br />
        <div>
         <h3>Url (Canonical):*</h3>
        </div>
        <input
          name="Url"
          placeholder="Url (Canonical)"
          value={this.state.Url}
          onChange={e => this.change(e)}
        />
        
        <br />
        <br />
        <Button variant="contained" color="primary" component="span" onClick={e => this.onSubmit(e)}>Clear</Button>
      </form>
    );
  }
}