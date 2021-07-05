import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class StationaryTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStationary = this.deleteStationary.bind(this);
    }


     async deleteStationary() {
         
         await axios.delete('http://localhost:4000/stationary/delete-item/' + this.props.obj._id)
            .then((res) => {
                console.log('Item successfully deleted!');
                this.setState();
                window.location.reload(true);

            }).catch((error) => {
                console.log(error)
            })

    }


    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.quantity}</td>
                <td>{this.props.obj.price}</td>
                <td>{this.props.obj.quantity * this.props.obj.price}</td>
                <td>
                    <Link className="edit-link" to={"/edit-item/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteStationary} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}