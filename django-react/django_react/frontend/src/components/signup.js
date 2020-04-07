import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
  }

  handleChange = () => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Signup;
