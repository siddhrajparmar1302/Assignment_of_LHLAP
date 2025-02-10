import React, { Component } from "react";

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], 
      isLoading: true, 
      error: null,
    };
  }

  componentDidMount() {
    
    fetch("https://fakestoreapi.com/products") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ data, isLoading: false }); 
      })
      .catch((error) => {
        this.setState({ error, isLoading: false }); 
      });
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      return <h2>Error: {error.message}</h2>;
    }

    return (
      <div style={{ padding: "20px" }}>
        <h2>Fetched Data</h2>
        <ul>
          {data.map((item) => ( 
            <li key={item.id} style={{ marginBottom: "15px" }}>
              <strong>{item.title}</strong>
              <p>Price: {item.price}</p>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default API;
