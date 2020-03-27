import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useAuth0 } from "../../contexts/auth0-context";

const Create = () => {
  let history = useHistory();
  const { user, getIdTokenClaims } = useAuth0();

  const [author, setAuthor] = useState("");
  const [values, setValues] = useState([]);
  const [submitSuccess, setSubmmitSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setAuthor(user.name);
    }
  }, [user]);

  const handleFormSubmission = async e => {
    e.preventDefault();
    setLoading(true);
    const formData = { ...values, author };

    const submitSuccess = await submitForm(formData);
    setSubmmitSuccess(submitSuccess);
    setValues({ ...values, formData });
    setLoading(false);
    setTimeout(() => {
      history.push("/");
    }, 1500);
  };

  const submitForm = async formData => {
    try {
      const accessToken = await getIdTokenClaims();
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/blog/post`,
        {
          method: "post",
          headers: new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: `Bearer ${accessToken.__raw}`
          }),
          body: JSON.stringify(formData)
        }
      );
      return response.ok;
    } catch (ex) {
      return false;
    }
  };

  const setFormValues = formValues => {
    setValues({ ...values, ...formValues });
  };

  const handleInputChanges = e => {
    e.preventDefault();
    setFormValues({ [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <div>
      <div className={"col-md-12 form-wrapper"}>
        <h2> Create Post </h2>
        {!submitSuccess && (
          <div className="alert alert-info" role="alert">
            Fill the form belor to create a new post
          </div>
        )}
        {submitSuccess && (
          <div className="alert alert-info" role="alert">
            The form was successfully submitted!
          </div>
        )}
        <form
          id={"create-post-form"}
          onSubmit={handleFormSubmission}
          noValidate={true}
        >
          <div className="form-group col-md-12">
            <label htmlFor="title"> Title </label>
            <input
              type="text"
              id="title"
              onChange={e => handleInputChanges(e)}
              name="title"
              className="form-control"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="description"> Description </label>
            <input
              type="text"
              id="description"
              onChange={e => handleInputChanges(e)}
              name="description"
              className="form-control"
              placeholder="Enter Description"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="body"> Write Content </label>
            <input
              type="text"
              id="body"
              onChange={e => handleInputChanges(e)}
              name="body"
              className="form-control"
              placeholder="Enter content"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="author"> Author </label>
            <input
              type="text"
              id="author"
              defaultValue={author}
              onChange={e => handleInputChanges(e)}
              name="author"
              className="form-control"
            />
          </div>
          <div className="form-group col-md-4 pull-right">
            <button className="btn btn-success" type="submit">
              Create Post
            </button>
            {loading && <span className="fa fa-circle-o-notch fa-spin" />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Create);
