import React from "react";
import ReactDOM from "react-dom";
import Cookies from "js-cookie";
import "./style.css";

class App extends React.Component {
  state = { text: Cookies.get("signin") ? "Signed in" : "Not signed in" };

  setCookie = () => {
    Cookies.set("signin", "true");
    this.setState({ text: "Signed in" });
  };

  unsetCookie = () => {
    Cookies.remove("signin");
    this.setState({ text: "Not signed in" });
  };

  readCookies = () => {
    console.log(Cookies.get());
  };

  render() {
    const { text } = this.state;
    return (
      <React.Fragment>
        <div>{text}</div>
        <br />
        <button onClick={this.setCookie}>Set Cookie</button>
        <button onClick={this.unsetCookie}>Unset Cookie</button>
        <button onClick={this.readCookies}>Console Cookies</button>
      </React.Fragment>
    );
  }
}

const Index = () => {
  return <div className="helloworld">Hello GIGANTIC World!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
