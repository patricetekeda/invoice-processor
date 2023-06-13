import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class App extends Component {
  state = {
    isLoading: false,
    invoices: [],
  };

  render() {
    const { isLoading, invoices } = this.state;

    const body = [
      {
        id: "1",
        brand: "LG",
        price: "$3000",
        invoice: "120",
        date: "05/15/2023",
      },
      {
        id: "1",
        brand: "Samsung",
        price: "$2500",
        invoice: "121",
        date: "05/15/2023",
      },
      {
        id: "2",
        brand: "Mercedes",
        price: "$75000",
        invoice: "122",
        date: "06/01/2023",
      },
      {
        id: "3",
        brand: "Gucci",
        price: "$500",
        invoice: "123",
        date: "04/15/2023",
      },
    ];

    if (isLoading) {
      return <div> Loading....</div>;
    }

    return (
      <div className="container border border-secondary rounded center  ">
        <div className="row">
          <div className="col-12">
            <h4>Pending Invoices - The Test Company</h4>
          </div>
        </div>
        <div className="row">
          <div className=".col-xs-12 center text-center">
            <Table dark responsive striped bordered hover>
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Invoice #</th>
                  <th>Date</th>
                  <th colSpan="4">Actions</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
