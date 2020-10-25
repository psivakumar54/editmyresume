import React, { Component } from 'react';
import './Hobbies.scss';
import Arrow from '../../../assets/arrow.png';
import Cross from '../../../assets/cross.png'
import SimpleInput from '../simple-input/SimpleInput';
import SimpleTextArea from '../simple-textarea/SimpleTextarea';
import ProgressBar from '../progress-bar/ProgressBar';
import Dropdown from '../dropdown-input/DropdownInput'
class Hobbies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobbiesName: '(not-set)'
        }
        this.toggleHandle = this.toggleHandle.bind(this);
        this.handleInputs = this.handleInputs.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleInputs(inputName, Value) {
        switch (inputName) {
            case "Hobbies Name":
                this.setState({
                    hobbiesName: Value
                });
                this.props.handleInputs(inputName, Value, this.props.id, "Hobbies");
                break;
            default:
                break;
        }
    }
    handleDelete() {
        console.log("in");
        this.props.handleDelete("Hobbies", 2); // This one responsable for removing the hobbies from the parent state
        this.props.handleComponentDelete("Hobbies", 2) // This one responsable to remove the hobbies component from parent
    }
    // Handling toggle click 
    toggleHandle() {
        this.state.isOpened === "false" ? this.setState({ isOpened: "true" }) : this.setState({ isOpened: "false" });
    }
    render() {
        return (
            <div className="panel">
                <div className="panel-heading">
                    <span className="panel-title"> {this.state.hobbiesName == "(not-set)" ? this.props.hobbiesName : this.state.hobbiesName}</span>
                    <span className="panel-subtitle">
                    </span>
                    <span className="actionButtons">
                        {/* <img alt="delete" onClick={this.handleDelete} className="panel-toggler cross " src={Cross} /> */}
                        <img alt="more" onClick={this.toggleHandle} className={this.state.isOpened === "false" ? "panel-toggler " : "panel-toggler panel-toggler-opened"} src={Arrow} />
                    </span>
                </div>
                <div className={this.state.isOpened === "false" ? "panel-body hidden" : "panel-body"}>
                    <div className="grid-2-col">
                        <SimpleInput handleInputs={this.handleInputs} title="Hobbies Name" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Hobbies;