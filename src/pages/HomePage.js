import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

import analytics from "../helper_functions/analytics";

import Login from "../components/Login";
import Logout from "../components/Logout";

class Homepage extends React.Component {
  head() {
    return (
      <Helmet
        meta={[
          {
            name: "description",
            content: "TODO: Add meta page description for SEO",
          },
        ]}
      >
        <title>Homepage</title>
      </Helmet>
    );
  }

  render() {
    const { auth, firstName, lastName } = this.props;
    return (
      <>
        {this.head()}
        <h1>
          {auth && firstName && lastName
            ? `Welcome to prilltech, ${firstName} ${lastName}!`
            : "Welcome!"}
        </h1>
        <p>
          Current Initiative: OAuth2.0 Google Integration & Redux State
          Management System. <br />
          Feel free to demo the login feature, no data is retained beyond
          browser storage.
        </p>
        <div style={{ paddingBottom: "24px" }} id="account-login-feature">
          {auth ? <Logout /> : <Login />}
        </div>
        <button
          onClick={() => {
            analytics.track({
              category: "Home Page - Hydration Button",
              action: "Click",
              label: "Click CTA",
            });
          }}
        >
          Hydration Check
        </button>
      </>
    );
  }
}

const mapStateToProps = ({ auth, firstName, lastName }) => ({
  auth,
  firstName,
  lastName,
});

const mapDispatchToProps = (dispatch) => ({
  changeText: () =>
    dispatch({ type: "set_firstname", payload: "banana snacks" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
