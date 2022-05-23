import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

import analytics from "../helper_functions/analytics";

class KeyCalc extends React.Component {
  head() {
    return (
      <Helmet
        meta={[
          {
            name: "description",
            content:
              "A simple resource for calulating key gold for simple minded individules",
          },
        ]}
      >
        <title>Key Calculator</title>
      </Helmet>
    );
  }

  render() {
    return (
      <>
        {this.head()}
        <h1>
          Welcome to the <>PRILLIO</> Key Calculator
        </h1>
        <div id="key-calculator">
          <p style={{ fontWeight: 700 }}>Key Amount: </p>
          <input id="key-amount"></input>
        </div>
        <div id="key-price-breakdown">
          <p style={{ fontWeight: 700 }}>Key Price Breakdown:</p>
          <p>
            Advertiser (5%) : <span id="advertiser">0</span> gold
          </p>
          <p>
            Key Holder (5%) : <span id="holder">0</span> gold
          </p>
          <p>
            Key Runners 80% (20% Each) : <span id="runner">0</span> gold
          </p>
          <p>
            Guild Bank (10%) : <span id="bank">0</span> gold
          </p>
        </div>
        <button
          onClick={() => {
            analytics.track({
              category: "Home Page - Hydration Button",
              action: "Click",
              label: "Click CTA",
            });

            //Do Key Calulations
            const keyPrice = document.getElementById("key-amount").value;

            document.getElementById("advertiser").innerText = keyPrice * 0.05;
            document.getElementById("holder").innerText = keyPrice * 0.05;
            document.getElementById("runner").innerText = keyPrice * 0.2;
            document.getElementById("bank").innerText = keyPrice * 0.1;
          }}
        >
          Calculate
        </button>
      </>
    );
  }
}

const mapStateToProps = ({ holderCut, runnderCut, bankCut, avertiserCut }) => ({
  holderCut,
  runnderCut,
  bankCut,
  avertiserCut,
});

const mapDispatchToProps = (dispatch) => ({
  changeText: () =>
    dispatch({ type: "set_firstname", payload: "banana snacks" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(KeyCalc);
