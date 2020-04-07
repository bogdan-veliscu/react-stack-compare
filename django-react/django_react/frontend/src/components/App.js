import React, { Component } from "react";
import { render } from "react-dom";
import { Switch, Link, Route } from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import PostList from "./Posts";
import Navbar from "./Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",
    };
  }

  componentDidMount() {
    // fetch("api/lead")
    //   .then((response) => {
    //     if (response.status > 400) {
    //       return this.setState(() => {
    //         return { placeholder: "Something went wrong!" };
    //       });
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState(() => {
    //       return {
    //         data,
    //         loaded: true,
    //       };
    //     });
    //   });
  }

  render() {
    return (
      <div className="site">
        <Navbar />
        {/* <nav>
          <Link className="nav-link" to={"/"}>
            Home
          </Link>
          <Link className={"nav-link"} to={"/login/"}>
            Login
          </Link>
          <Link className={"nav-link"} to={"/signup/"}>
            Signup
          </Link>
        </nav> */}
        <main>
          <Switch>
            <Route exact path={"/login/"} component={Login} />
            <Route exact path={"/signup/"} component={Signup} />

            <Route path={"/"} component={PostList} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
