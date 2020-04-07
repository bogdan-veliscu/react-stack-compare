import React, { Component } from "react";
import axiosInstance from "../axiosApi";
import DjangoCSRFToken from "django-react-csrftoken";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleChange = () => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async () => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post("/token/obtain/", {
        username: this.state.username,
        password: this.state.password,
      });
      axiosInstance.defaults.headers[
        "Authentication"
      ] = `JWT ${response.data.access}`;
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      return response;
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <DjangoCSRFToken />
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

export default Login;
