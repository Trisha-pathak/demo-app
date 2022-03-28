import React, { Component } from "react";
import ComponentInput from "./UIElements/Inputs/ComponentInput";
import TextInput from "./UIElements/Inputs/TextInput";

class RoomComponents extends Component {

    constructor() {
        super()
        this.state = {
            roomcomponent: [
                { _id: 0, text: '' }
            ]
        }
    }

    addComponents = () => {
        const roomcomponent = [...this.state.roomcomponent, { _id: this.state.roomcomponent.length, text: '' }]
        this.setState({ roomcomponent })
    }

    render() {
        return (
            <>
                <div>
                    <h5 className="text-center">Unit {this.props.id} - Add Components</h5>
                    <div className="row">
                        <div className="col-md-10"><p>Upload Drawings/3D</p></div>
                        <div className="col-md-2"><p><span className='bi bi-upload'></span></p></div>
                    </div>
                    <div className="row">
                    <h6 className="col-md-10">Component 1</h6>
                    <h6 className="col-md-1">X</h6>
                    </div>
                    {this.state.roomcomponent.map(e => {
                        return <div>
                            <ComponentInput text={e.text} id={e._id} />
                            <div className='row' style={{ padding: '0 10px' }}>
                                <div className="col-md-4 low-padding"><TextInput text={e.text} id={e._id} rightLabel="Quantity" /></div>
                                <div className='col-md-4 low-padding'><TextInput text={e.text} id={e._id} rightLabel="Rate" /></div>
                                <div className='col-md-4 low-padding'><TextInput text={e.text} id={e._id} rightLabel="Unit" /></div>
                            </div>
                            <div className="row">
                                <div className="col-md-1"><a>$3000</a></div>
                                <div className="col-md-1"></div>
                                <div className="col-md-1"></div>
                                <div className="col text-right">
                                    <a className="text-right addLinkcomponent">Add Vendors/Material </a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <a className="add_button" onClick={this.addComponents}>+</a>
            </>
        )
    }
}

export default RoomComponents;