import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStationary extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStationaryName = this.onChangeStationaryName.bind(this);
    this.onChangeStationaryQuantity = this.onChangeStationaryQuantity.bind(this);
    this.onChangeStationaryPrice = this.onChangeStationaryPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      image: '',
      description: ''
    }
  }

  onChangeStationaryName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStationaryQuantity(e) {
    this.setState({ quantity: e.target.value })
  }

  onChangeStationaryPrice(e) {
    this.setState({ price: e.target.value })
  }

  async onSubmit(e) {
    e.preventDefault()

    const stationaryObject = {
      name: this.state.name,
      quantity: this.state.quantity,
      price: this.state.price
    };

    await axios.post('http://localhost:4000/stationary/create-item', stationaryObject)
      .then(res => {
        console.log(res.data);
        this.setState();
        
      });

    this.setState({
      name: '',
      image: '',
      description: ''
    });
    
    this.props.history.push('/stationary-list')

  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStationaryName} required/>
        </Form.Group>

        <Form.Group controlId="Quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" value={this.state.quantity} onChange={this.onChangeStationaryQuantity} min = "0" step="1" required/>
        </Form.Group>

        <Form.Group controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" value={this.state.price} onChange={this.onChangeStationaryPrice} min = "0" step="0.01" required/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Item
        </Button>
      </Form>
    </div>);
  }
}
