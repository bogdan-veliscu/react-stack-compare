import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleChange = () => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    alert(
      `A user/pass were submited: ${this.state.username} / ${this.state.password}`
    );
  };

  render() {
    return (
      <div>
        <h2>Login Page</h2>
      </div>
    );
  }
}

export default Login;
