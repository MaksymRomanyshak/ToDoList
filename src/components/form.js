import { Component } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";

class Form extends Component {
  constructor() {
    super();

    this.displayData = [
      { titleValue: "Pay a bill", priorValue: "5", id: 1 },
      { titleValue: "Buy fruits", priorValue: "10", id: 2 },
      { titleValue: "Go shopping on Fri", priorValue: "2", id: 3 },
    ];

    this.state = {
      showdata: this.displayData,
      titleValue: "",
      priorValue: "",
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.priorChange = this.priorChange.bind(this);
  }

  titleChange(e) {
    let getInputValue = e.target.value;
    this.setState({
      titleValue: getInputValue,
    });
  }

  priorChange(e) {
    let getPriorValue = e.target.value;
    this.setState({
      priorValue: getPriorValue,
    });
  }

  addItem() {
    if (this.state.titleValue && this.state.priorValue) {
      this.displayData.unshift({
        titleValue: this.state.titleValue,
        priorValue: this.state.priorValue,
        id: new Date().valueOf(),
      });

      this.setState({
        showdata: this.displayData,
        titleValue: "",
        priorValue: "",
      });
    }
  }

  removeItem(id) {
    this.displayData = this.displayData.filter((item) => item.id !== id);

    this.setState({
      ...this.state,
      showdata: this.displayData,
    });
  }

  render() {
    return (
      <form className="content">
        <h1 className="title">Shopping List</h1>

        <div className="toolbox">
          <input
            className="form-control input-title"
            type="text"
            maxLength={25}
            placeholder="Title..."
            value={this.state.titleValue}
            onChange={this.titleChange}
          ></input>
          <input
            className="form-control input-priority"
            type="number"
            placeholder="Priority"
            value={this.state.priorValue}
            onChange={this.priorChange}
          ></input>
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={this.addItem}
          >
            Add
          </button>
        </div>

        {this.state.showdata.map(({ id, priorValue, titleValue }) => (
          <div key={id} className="item">
            <div className="text">
              <span className="priority-value">{priorValue}</span>
              <span className="title-value">{titleValue}</span>
            </div>

            <CloseIcon onClick={() => this.removeItem(id)} className="icon" />
          </div>
        ))}
      </form>
    );
  }
}

export default Form;
