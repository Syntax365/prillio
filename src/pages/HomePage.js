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
            ? `Welcome to PrillTech, ${firstName} ${lastName}!`
            : "Welcome!"}
        </h1>
        <p>
          Key calulation system is currently undergoing maintenance. Please
          Standby while we grow more IQ points.
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
          Calculate
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
