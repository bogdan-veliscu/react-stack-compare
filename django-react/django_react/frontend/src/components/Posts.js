import React, { useState, useEffect, Component } from "react";
import { Link, useHistory } from "react-router-dom";
import axiosInstance from "../axiosApi";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isAuthenticated: true,
      user: "1",
    };
  }

  fetchPosts = async () => {
    console.log("@ before fetchPosts");
    const response = await axiosInstance.get("/posts/");
    const json = await response.data;
    console.log(json);
    this.setState({ posts: json });
  };

  deletePost = async (id) => {
    const accessToken = await getIdTokenClaims();
    await fetch(
      `${process.env.REACT_APP_SERVER_BASE_URL}/blog/delete?postID=${id}`,
      {
        method: "delete",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${accessToken.__raw}`,
        }),
      }
    );
    _removePostFromView(id);
    this.props.history.push("/");
  };

  _removePostFromView = (id) => {
    const index = posts.findIndex((post) => post._id === id);
    posts.splice(index, 1);
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return (
      <section className="blog-area section">
        <div className="container">
          <div className="row">
            {this.state.posts &&
              this.state.posts.map((post) => (
                <div className="col-lg-4 col-md-6" key={post.id}>
                  <div className="card h-100">
                    <div className="single-post post-style-1">
                      <div className="blog-image">
                        <img
                          src="https://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1563149789/blog-image_psvipq.jpg"
                          alt="Blog"
                        />
                      </div>
                      <span className="avatar">
                        <img
                          src="http://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1513770253/WEB_FREAK_50PX-01_yaqxg7.png"
                          alt="Profile"
                        />
                      </span>
                      <div className="blog-info">
                        <h4 className="title">
                          <span>
                            <b>{post.title}</b>
                          </span>
                        </h4>
                        <p className="description">{post.description}</p>
                      </div>
                    </div>
                    <ul className="post-footer">
                      <li>
                        <Link
                          to={`/post/${post.id}`}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View Post{" "}
                        </Link>
                      </li>
                      <li>
                        {this.state.isAuthenticated &&
                          this.state.user.name === post.user && (
                            <Link
                              to={`/edit/${post.id}`}
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Edit Post{" "}
                            </Link>
                          )}
                      </li>
                      <li>
                        {this.state.isAuthenticated &&
                          this.state.user.name === post.user && (
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => deletePost(post._id)}
                            >
                              Delete Post
                            </button>
                          )}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
}

export default PostList;
