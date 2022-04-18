import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import "./index.css";
import { bindActionCreators } from "redux";
import { clickButton } from "./actions";

import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    inputValue: "",
  };

  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    const { clickButton, newValue } = this.props;

    const { inputValue } = this.state;

    return (
      <div className="App">
        <Header />,
        <div className="news">
          <h3>Cadastre-se para receber nossas novidades</h3>
          <input
            type="email"
            onChange={this.inputChange}
            value={inputValue}
            required
            name="email"
            placeholder="Digite seu e-mail"
          />
          <Button
            className="button"
            color="secondary"
            onClick={() => clickButton(inputValue)}
          >
            Cadastrar
          </Button>
          <h5>{newValue}</h5>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  newValue: store.clickState.newValue,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
