import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StationaryTableRow from './StationaryTableRow';


export default class StationaryList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stationary: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/stationary')
      .then(res => {
        this.setState({
          stationary: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.stationary.map((res, i) => {
      return <StationaryTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}