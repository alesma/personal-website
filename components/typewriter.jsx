import React from "react";
import { setTimeout, clearTimeout } from "timers";

class Typewriter extends React.Component {
  state = {
    text: ""
  };

  startTyping() {
    if (!this.props.text) {
      return;
    }

    if (this.props.text.length === this.textIndex) {
      return;
    }

    this.timeout = setTimeout(
      function() {
        this.setState({
          text: `${this.state.text}${this.props.text.substring(
            this.textIndex,
            this.textIndex + 1
          )}`
        });

        this.textIndex++;
        this.startTyping();
      }.bind(this),
      (Math.random() * 200 - 50) + 50
    );
  }

  stopTyping() {
    clearTimeout(this.timeout);
  }

  componentDidMount() {
    this.textIndex = 0;
    this.startTyping();
  }

  componentWillUnmount() {
    this.stopTyping();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.text} <span className="pipe">|</span>

        <style jsx>
          {`
            .pipe {
              animation-duration: 1s;
              animation-name: pipe;
              animation-iteration-count: infinite;
              animation-timing-functino: cubic-bezier(0, 0, 0.2, 1);
            }

            @keyframes pipe {
              from {
                opacity: 1;
              }

              to {
                opacity: 0;
              }
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Typewriter;
