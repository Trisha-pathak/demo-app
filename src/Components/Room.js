import React, { Component } from "react";
import TextInput from "./UIElements/Inputs/TextInput";

class Room extends Component {

    constructor() {
        super()
        this.state = {
            room: [
                { _id: 0, text: '' }
            ]
        }
    }

    addUnit = () => {
        const room = [...this.state.room, { _id: this.state.room.length, text: '' }]
        this.setState({ room })
    }

    render() {
        return (
            <>
                <div className="room">
                    <label>{'Room' + this.props.id}</label>
                    {this.state.room.map(e => {
                        return <div>
                            <TextInput text={e.text} id={e._id} trashIcon rightLabel={'Unit Name'}/>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-1"></div>
                                <div className="col-md-1"></div>
                                <div className="col text-right">
                                    <a className="text-right addLink">Add Component(s) </a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <a className="add_button" onClick={this.addUnit}>+</a>
            </>
        )
    }
}

export default Room;